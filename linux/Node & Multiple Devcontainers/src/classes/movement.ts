import { Gene } from "../abstracts/gene";
import { Vector } from "./vector";
import { Settings } from "./settings";
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Movement extends Gene
{
    @JsonProperty() position: Vector;
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

        this.position = this.create();
        this.data = [];

        for(var i=0;i<count;++i)
        {
            let x:number = Math.floor((Math.random() * 2)) - 1;
            let y:number = Math.floor((Math.random() * 2)) - 1;
            let z:number = Math.floor((Math.random() * 2)) - 1;

            let temp:Vector = new Vector(x,y,z,0);

            this.data.push(temp);
        }
    }

    create() : Vector
    {
        let result:Vector = new Vector();

        let halfX:number = Math.floor(this.settings.width / 2);
        let halfY:number = Math.floor(this.settings.height / 2);
        let halfZ:number = Math.floor(this.settings.depth / 2);

        result.x = Math.floor((Math.random() * (this.settings.width - 1))) - halfX;
        result.y = Math.floor((Math.random() * (this.settings.height- 1))) - halfY;
        result.z = Math.floor((Math.random() * (this.settings.depth - 1))) - halfZ;
        result.w = Math.floor((Math.random() * (this.settings.delay - 1)));

        return result;
    }
}
