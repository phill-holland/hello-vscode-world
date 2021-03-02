//import { Record } from "./abstracts/record";
//import { Model } from "mongoose";

var mongoose = require('mongoose');

export class Context<T>
{
    //static models:Map<string,SchemaType> = new Map<string, SchemaType>();

    constructor()
    {
        //this.models = new Map<string, any>();
        let connection:string = process.env.DATABASE;
        mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true });
    }

   // model(name:string, source:Record<T>)//:any
    //{
        /*
        console.log(name + " blah");
        console.log(Context.models.has(name));
        var schema;
        if(Context.models.has(name)===true) 
        {
            console.log("model");
            schema = Context.models[name];
        }
        else
        {
            schema = mongoose.Schema(source.schema());
            Context.models.set(name, schema);
        }
        //console.log("set");
        //Context.models.set(name, schema);
        //console.log(Context.models.has(name));
        var result = mongoose.model(name, schema);
        //Context.models.set(name, result);
        return result;
        //return mongoose.model(name, schema);
        */
    //}
}