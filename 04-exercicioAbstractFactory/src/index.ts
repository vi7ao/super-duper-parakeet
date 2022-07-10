import Client from "./delivery/clients/Client";
import Company from "./delivery/consts/Company";
import TypeSelector from "./delivery/consts/TypeSelector";
import AiFoodDelivery from "./delivery/factories/AiFoodDelivery";
import AiQueFomeDelivery from "./delivery/factories/AiQueFomeDelivery";
import IDeliveryFactory from "./delivery/factories/interfaces/IDeliveryFactory";

const currentCompany = Company.AIFOOD
let factory : IDeliveryFactory;
const currentType = TypeSelector.DRINK

switch(currentCompany){
    case Company.AIFOOD :
        factory = new AiFoodDelivery;
        break;
    case Company.AIQUEFOME :
        factory = new AiQueFomeDelivery;
        break;
    default :
        console.log("Escolha uma companhia");
}

const cliente = new Client(factory!, currentType);

cliente.startRoute(currentType);