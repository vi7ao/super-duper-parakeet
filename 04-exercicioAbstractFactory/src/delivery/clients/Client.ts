import TypeSelector from "../consts/TypeSelector";
import IDrink from "../drink/interfaces/IDrink";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import IFood from "../food/interfaces/IFood";

export default class Client{
    private drink : IDrink;
    private food: IFood;
    constructor(factory : IDeliveryFactory, currentType : string){
        if (currentType == TypeSelector.DRINK) {
            this.drink = factory.createDeliveryDrink();
        }else
        if (currentType == TypeSelector.FOOD){
            this.food = factory.createDeliveryFood();
        }
    }
    startRoute(currentType) : void{
        if (currentType == TypeSelector.DRINK) {
            this.drink.startRoute();
        }else
        if (currentType == TypeSelector.FOOD){
            this.food.startRoute();
        }
    }
}