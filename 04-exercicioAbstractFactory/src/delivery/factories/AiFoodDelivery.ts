import IDrink from "../drink/interfaces/IDrink";
import SoftDrink from "../drink/SoftDrink";
import HotDog from "../food/HotDog";
import IFood from "../food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiFoodDelivery implements IDeliveryFactory{
    createDeliveryFood(): IFood {
        return new HotDog();
    }
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
}