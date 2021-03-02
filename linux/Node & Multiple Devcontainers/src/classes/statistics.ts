import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Statistics
{
    @JsonProperty() collided: number;
    @JsonProperty() data: number;
    @JsonProperty() lifetime: number;
    @JsonProperty() data_or_lifetime: number;
    @JsonProperty() join: number;
    @JsonProperty() trace_with_trace: number;
    @JsonProperty() trace_one_side: number;
    @JsonProperty() average_expired_age: number;
    @JsonProperty() average_collision_age: number;
    @JsonProperty() collision_point: number;
    @JsonProperty() collision_point_data: number;
    @JsonProperty() collision_point_lifetime: number;
    @JsonProperty() total_cells: number;
    @JsonProperty() total_cells_with_trace: number;

    constructor()
    {
        this.collided = 0;
        this.data = 0;
        this.lifetime = 0;
        this.data_or_lifetime = 0;
        this.join = 0;
        this.trace_with_trace = 0;
        this.trace_one_side = 0;
        this.average_expired_age = 0;
        this.average_collision_age = 0;
        this.collision_point = 0;
        this.collision_point_data = 0;
        this.collision_point_lifetime = 0;
        this.total_cells = 0;
        this.total_cells_with_trace = 0;
    }
}