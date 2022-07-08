import IDrink from "../../drink/interfaces/IDrink";
import IFood from "../../food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryFood() : IFood;
    createDeliveryDrink() : IDrink;
}