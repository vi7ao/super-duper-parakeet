import Beer from "../drink/Beer";
import IDrink from "../drink/interfaces/IDrink";
import Hamburguer from "../food/Hamburguer";
import IFood from "../food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiQueFomeDelivery implements IDeliveryFactory{
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
    createDeliveryDrink(): IDrink {
        return new Beer();
    }

}