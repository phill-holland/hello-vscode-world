//import { EROFS } from "constants";
//import { Context } from "../context"
import { Document } from "mongoose"

export abstract class Record<T extends Document>
{
    //abstract name():string;

    abstract from(source:T);
    abstract to(destination:T);

    //abstract schema():any;
    
    abstract createInstance():T;

    insert():boolean
    {
        (async () => {
            await this._insert(this);
        })().catch(e => {
            return false;
        });

        return true;
    }

    /*
    select(identity:number):boolean
    {
        (async () => {
            this.from(await this._select(identity));
        })().catch(e => {
            return false;
        });

        return true;
    }
*/

    async _insert(source:Record<T>):Promise<boolean>
    {
        var promise = new Promise(function (resolve, reject) {

            var record = this.createInstance();


            //let context:Context<T> = new Context<T>();
            //console.log("a");
            //var model = context.model(name, source);
            //console.log("b");
            //var record = new model();
            //console.log("c");
            source.to(record);
            //console.log("d");
            record.save(function(error,result) {
                if(error) reject(result);
                else resolve(result);
            });
        
        });

        return await promise.then(function whenok(response) {
            this.from(response);
            return true;
        }).catch(function notok(error) {
            console.log("errr " + error);
            return false;
        });
    }

    /*
    async _select(identity:number):Promise<T>
    {
        var promise = new Promise(function (resolve, reject) {
        
            //let context:Context<T> = new Context<T>();
            //var model = context.model(name, this);
            model.find({identity:identity},
                function(error, response) {
                    if(error) reject(response);
                    else resolve(response);
                });
        });

        return await promise.then(function whenok(response:T) {
            return response;
        }).catch(function notok(error) {
            return null;
        });
    }
    */
}