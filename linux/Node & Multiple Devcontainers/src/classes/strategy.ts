import { Gene } from "../abstracts/gene";
import { Settings } from  "./settings";
import { Vector } from "./vector";
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Strategy extends Gene
{
    @JsonProperty() value: number;
    @JsonProperty({type:Vector}) direction: Array<Vector>;
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

        this.direction = [];

        for(var i=0;i<count;++i)
        {
            let x:number = Math.floor((Math.random() * 2)) - 1;
            let y:number = Math.floor((Math.random() * 2)) - 1;
            let z:number = Math.floor((Math.random() * 2)) - 1;

            let temp:Vector = new Vector(x,y,z,0);

            this.direction.push(temp);
        }
    }
}