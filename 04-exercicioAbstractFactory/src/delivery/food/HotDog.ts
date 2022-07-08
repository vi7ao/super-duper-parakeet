import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    makingFood(): void {
        console.log("HotDog: Cozinhando vina...");
    }
    startRoute(): void {
        this.makingFood();
        console.log("HotDog: Saindo para entrega!");
    }

}