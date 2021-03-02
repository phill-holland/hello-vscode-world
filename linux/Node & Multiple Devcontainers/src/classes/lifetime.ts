import { Gene } from "../abstracts/gene";
import { Settings } from  "./settings";
import { Vector } from "./vector";
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Lifetime extends Gene
{
    @JsonProperty({type:Vector}) data: Array<Vector>;
    settings: Settings;


    constructor(settings: Settings)
    {
        super();
        this.settings = settings;
    }

    generate()
    {
        let total:number = this.settings.max - this.settings.min;
        let count:number = Math.floor((Math.random() * total)) + this.settings.min;

        this.data = [];

        for(var i=0;i<count;++i)
        {
            let value:number = Math.floor((Math.random() * (this.settings.range - 2)));

            let temp:Vector = new Vector(value,value,value,0);

            this.data.push(temp);
        }
    }
}