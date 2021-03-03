import { Gene } from "../abstracts/gene";
import { Strategy } from "./strategy";
import { Settings } from "./settings";
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Collision extends Gene
{
    @JsonProperty({type:Strategy}) data: Array<Strategy>;
    settings: Settings;

    constructor(settings: Settings)
    {
        super();
        this.settings = settings;
    }

    generate()
    {
        this.data = [];

        for(var i=0;i<27;++i)
        {
            let temp:Strategy = new Strategy(this.settings);

            temp.value = (0x1 << i);
            temp.generate();

            this.data.push(temp);
        }
    }
}