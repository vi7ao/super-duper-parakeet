import ICorreios from "../correios/ICorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios{

    constructor(private transportadora : Transportadora){
        console.log("Adaptando transportadora em correios");
    }

    sendCorreios(): void {
        return this.transportadora.send();
    }
    receiveCorreios(): void {
        return this.transportadora.receive();
    }

}