import { Gene } from "../abstracts/gene";
import { Settings } from "./settings";
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Specification extends Gene
{
    @JsonProperty() cost: number;
    @JsonProperty() allowance: number;

    csettings:Settings;
    asettings:Settings;

    constructor(csettings:Settings,asettings:Settings)
    {
        super();

        this.cost = 0;
        this.allowance = 0;

        this.csettings = csettings;
        this.asettings = asettings;
    }

    generate()
    {
        let total:number = this.csettings.max - this.csettings.min;
        this.cost = Math.floor((Math.random() * total)) + this.csettings.min;

        total = this.asettings.max - this.asettings.min;
        this.allowance = Math.floor((Math.random() * total)) + this.asettings.min;
    }
}