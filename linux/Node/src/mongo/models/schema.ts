//import { Record } from "../abstracts/record";

import dotenv from 'dotenv';

dotenv.config();

var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });

var schema = { 
            identity:Number, 
            generation:String,
            mother:Number,
            father:Number,
            score:Number,
            collision: [
            {
                strategy:[
                    {x:Number,
                    y:Number,
                    z:Number,
                    w:Number}
                ]}
            ],
            lifetime: [
                {x:Number,
                    y:Number,
                    z:Number,
                    w:Number}
                ],
            inserter: [
                {
                position: {x:Number,
                            y:Number,
                            z:Number,
                            w:Number},
                data: [{x:Number,
                        y:Number,
                        z:Number,
                        w:Number}]
                }
            ],
            specification: { cost:Number, allowance:Number },
            epochs: [
                {
                    statistics: {},
                    sentence:[{score:Number,value:String}]
                }
            ]
    };

export const Schema = mongoose.model("Schema", schema);

//export class 
/*Schema extends Record<MGSchema>
{
    identity: number;

    generation: string;
    
    mother: number;
    father: number;

    score: number;

    createInstance()
    {
        return new MGSchema();
    }

    from(source:any)
    {
        this.identity = source.identity;
        this.generation = source.generation;
        this.mother = source.mother;
        this.father = source.father;
        this.score = source.score;
    }

    to(destination:any)
    {
        console.log("to " + this.identity);
        destination.identity = this.identity;
        destination.generation = this.generation;
        destination.mother = this.mother;
        destination.father = this.father;
        destination.score = this.score;
        console.log("dest " + destination.identity);
    }

}
*/
/*
import { Collision } from "./collision";
import { Lifetime } from "./lifetime";
import { Inserter } from "./inserter"
import { Specification } from "./specification";

import { Schema as VSchema } from "../../classes/schema";
import { Epoch } from "./epoch";

export class Schema extends Record<Schema>
{
    identity: number;

    generation: string;
    
    mother: number;
    father: number;

    score: number;

    collision: Collision;
    lifetime: Lifetime;
    inserter: Inserter;
    specification: Specification;
    epoch: Epoch;

    constructor()
    {
        super();
        this.clear();
    }

    clear()
    {
        this.identity = 0;
        this.generation = '';
        this.mother = 0;
        this.father = 0;
        this.score = 0.0;
    }

    name():string
    {
        return "Schema";
    }

    from(source:any)
    {
        this.identity = source.identity;
        this.generation = source.generation;
        this.mother = source.mother;
        this.father = source.father;
        this.score = source.score;
    }

    to(destination:any)
    {
        console.log("to " + this.identity);
        destination.identity = this.identity;
        destination.generation = this.generation;
        destination.mother = this.mother;
        destination.father = this.father;
        destination.score = this.score;
        console.log("dest " + destination.identity);
    }

    schema():any
    {
        return { identity:Number, 
                 generation:String,
                 mother:Number,
                 father:Number,
                 score:Number,
                 collision: [
                     {
                        strategy:[
                         {x:Number,
                          y:Number,
                          z:Number,
                          w:Number}
                     ]}
                    ],
                lifetime: [
                    {x:Number,
                     y:Number,
                     z:Number,
                     w:Number}
                    ],
                inserter: [
                    {
                    position: {x:Number,
                               y:Number,
                               z:Number,
                               w:Number},
                    data: [{x:Number,
                            y:Number,
                            z:Number,
                            w:Number}]
                    }
                ],
                specification: { cost:Number, allowance:Number },
                epochs: [
                    {
                        statistics: {},
                        sentence:[{score:Number,value:String}]
                    }
                ]
            };
    }

    copy(source:VSchema)
    {
        console.log("baa " + source.identity);
        this.identity = source.identity;
        this.generation = source.generation;
        this.mother = source.mother;
        this.father = source.father;
        this.score = source.score;
    }
}

*/