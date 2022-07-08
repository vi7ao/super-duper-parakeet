import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    pouringDrink(): void {
        console.log("Refrigerante: Servindo...");
    }
    startRoute(): void {
        this.pouringDrink();
        console.log("Refrigerante: Saindo para entrega...");
    }

}