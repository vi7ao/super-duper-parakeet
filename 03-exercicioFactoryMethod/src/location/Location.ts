import IItem from "./itens/interfaces/IItem";

export abstract class Location{

    startItem() : void{
        const item = this.createItem();
        item.start();
    }
    protected abstract createItem() : IItem;

}