import IDrink from "../drink/interfaces/IDrink";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import IFood from "../food/interfaces/IFood";

export default class Client{
    private drink : IDrink;
    private food: IFood;
    constructor(factory : IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startRoute() : void{
        this.drink.startRoute();
        this.food.startRoute();
    }
}