import { isTemplateExpression, textChangeRangeIsUnchanged } from "typescript";
import { Gene } from "../abstracts/gene";
import { Movement } from "./movement";
import { Settings } from "./settings";
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Insert extends Gene
{
    @JsonProperty({type:Movement}) data: Array<Movement>;

    isettings: Settings;
    msettings: Settings;

    constructor(isettings:Settings, msettings:Settings)
    {
        super();

        this.isettings = isettings;
        this.msettings = msettings;
    }

    generate()
    {
        let total:number = this.isettings.max - this.isettings.min;
        let count:number = (Math.random() * total) + this.isettings.min;

        this.data = [];

        for(var i=0;i<total;++i)
        {
            let temp:Movement = new Movement(this.msettings);

            temp.generate();

            this.data.push(temp);
        }
    }
}