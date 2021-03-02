import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Vector
{
    @JsonProperty() x: number;
    @JsonProperty() y: number;
    @JsonProperty() z: number;
    @JsonProperty() w: number;

    constructor(x:number = 0,y:number = 0,z:number = 0,w:number = 0)
    {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
}