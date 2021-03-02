export abstract class Collection<T>
{
    abstract insert(values:Array<T>):Promise<boolean>;
    abstract select(identity:Array<number>):Promise<Array<T>>;
}