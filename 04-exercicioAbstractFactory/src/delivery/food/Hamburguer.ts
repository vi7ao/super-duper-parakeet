import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    makingFood(): void {
        console.log("Hamburguer: Fritando Hamburguer...");
    }
    startRoute(): void {
        this.makingFood();
        console.log("Hamburguer: Saindo para entrega!");
    }

}