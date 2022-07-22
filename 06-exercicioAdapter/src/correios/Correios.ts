
import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{

    sendCorreios(): void {
        console.log("Enviando encomenda pelos correios");
    }
    receiveCorreios(): void {
        console.log("Recebendo encomenda pelos correios");
    }

}