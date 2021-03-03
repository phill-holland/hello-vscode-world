import { settings } from "cluster";
import { isThisTypeNode } from "typescript";
import { Settings } from "./settings";

export class Configuration
{
    collisionSettings:Settings;
    lifetimeSettings:Settings;
    insertSettings:Settings;
    movementSettings:Settings;
    costSettings:Settings;
    allowanceSettings:Settings;

    constructor()
    {
        this.collisionSettings = new Settings(2,200);
        this.lifetimeSettings = new Settings(4,300,0,0,0,0,5000);
        this.insertSettings = new Settings(2,100);
        this.movementSettings = new Settings(2,300,100,100,100,10);
        this.costSettings = new Settings(2,5000);
        this.allowanceSettings = new Settings(1,5);
    }
}