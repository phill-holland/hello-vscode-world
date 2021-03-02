import { Sentence } from './sentence'
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Score
{
    @JsonProperty({type:Sentence}) sentences: Array<Sentence>;
    @JsonProperty() score: number;

    constructor()
    {
        this.score = 0.0;
    }
}