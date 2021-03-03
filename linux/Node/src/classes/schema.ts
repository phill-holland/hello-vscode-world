import { Gene } from "../abstracts/gene";
import { Collision } from "./collision"
import { Lifetime } from "./lifetime"
import { Insert } from "./insert"
import { Specification } from "./specification"
import { Score } from "./score"
import { Statistics } from "./statistics"
import { Configuration } from "./configuration"
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Schema extends Gene
{
    @JsonProperty() identity: number;

    @JsonProperty() generation: string;

    @JsonProperty() mother: number;
    @JsonProperty() father: number;

    @JsonProperty() score: number;

    @JsonProperty() collision: Collision;
    @JsonProperty() lifetime: Lifetime;
    @JsonProperty() inserter: Insert;
    @JsonProperty() specification: Specification;

    @JsonProperty() results: Score;
    @JsonProperty() statistics: Statistics;

    constructor(configuration:Configuration)
    {
        super();

        this.identity = 0;
        this.mother = 0;
        this.father = 0;

        this.score = 0.0;

        this.collision = new Collision(configuration.collisionSettings);
        this.lifetime = new Lifetime(configuration.lifetimeSettings);
        this.inserter = new Insert(configuration.insertSettings, configuration.movementSettings);
        this.specification = new Specification(configuration.costSettings, configuration.allowanceSettings);

        this.results = new Score();
        this.statistics = new Statistics();
    }

    generate()
    {
        this.collision.generate();
        this.lifetime.generate();
        this.inserter.generate();
        this.specification.generate();
    }

    breed(mother:Schema,father:Schema):Schema
    {
        return mother;
    }

    mutate():Schema
    {
        return this;
    }
}