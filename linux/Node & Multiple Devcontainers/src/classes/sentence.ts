import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Sentence
{
    @JsonProperty() value: string;
    @JsonProperty() score: number;

    constructor()
    {
        this.score = 0.0;
    }
}