import { Schema } from "./schema"
import { Configuration } from "./configuration"
import { Schema as DBSchema } from "../mongo/models/schema"

export class Breeding {

    population: Array<Schema>;
    configuration: Configuration;

    index: number;
    total: number;

    constructor(total:number)
    {
        this.configuration = new Configuration();
        this.total = total;
        this.index = 0;

        this.seed();
    }

    seed()
    {
        this.population = [];
        for(var i=0;i<this.total;++i)
        {
            let temp:Schema = new Schema(this.configuration);
            temp.generate();
            temp.identity = this.next();
            console.log("here " + temp.identity);
            this.population.push(temp);
        }
    }

    best(size:number = 2): number
    {        
        let best:number = Math.floor((Math.random() * (this.total - 1)));
        let score:number = this.population[best].results.score;

        for(var i=0;i<size;++i)
        {
            let competition:number = Math.floor((Math.random() * (this.total - 1)));
            let temp:number = this.population[competition].results.score;
            if(temp > score)
            {
                best = competition;
                score = temp;
            }
        }

        return best;
    }

    worst(size:number = 2): number
    {
        let worst:number = (Math.random() * (this.total - 1));
        let score:number = this.population[worst].results.score;

        for(var i=0;i<size;++i)
        {
            let competition:number = (Math.random() * (this.total - 1));
            let temp:number = this.population[competition].results.score;
            if(temp < score)
            {
                worst = competition;
                score = temp;
            }
        }

        return worst;
    }

    get(): Schema
    {
        let destination:Schema = new Schema(this.configuration);
        let result:number = this.next();

        let mutation:number = 0.8;
        let repeat:number = 0.5;

        if(Math.random() < mutation)
        {
            if(Math.random() < repeat)
            {
                let parent:number = this.best();

                destination = this.population[parent];

                destination.father = parent;
                destination.mother = parent;    
            }
            else
            {
                var parent1: number;
                var parent2: number;

                do
                {
                    do
                    {
                        parent1 = this.best();
                        parent2 = this.best();
                    }while(parent1 == parent2);
                }while(!destination.breed(this.population[parent1],this.population[parent2]));

                destination.father = this.population[parent1].identity;
                destination.mother = this.population[parent2].identity;
            }
        }
        else
        {
            let parent:number = this.best();

            destination = this.population[parent];
            destination.mutate();

            destination.father = parent;
            destination.mother = parent;    

        }

        destination.identity = result;

        return destination;
    }

    set(source:Schema): number
    {
        let offspring:number = this.worst();
        this.population[offspring] = source;
        return offspring;
    }

    next(): number
    {
        this.index = this.index + 1;
        return this.index;
    }

    load()
    {
        // from database
    }

    save()
    {
        for(var i=0;i<this.total;++i)
        {
            let source = this.population[i];
            let destination = new DBSchema({identity:source.identity});
         
            console.log(source.identity);
            
            destination.save(function(error,result) {
                if(error) return false;
                else return true;
            });
        }
    }
}