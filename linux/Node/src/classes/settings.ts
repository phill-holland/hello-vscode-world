import { textChangeRangeIsUnchanged } from "typescript";

export class Settings
{
    min: number;
    max: number;

    width: number;
    height: number;
    depth: number;

    delay: number;
    range: number;

    constructor(min: number = 0, max: number = 0, 
                width: number = 0, height: number = 0, depth: number = 0,
                delay: number = 0, range: number = 0)
    {
        this.min = min;
        this.max = max;
        
        this.width = width;
        this.height = height;
        this.depth = depth;

        this.delay = delay;
        this.range = range;
    }
}