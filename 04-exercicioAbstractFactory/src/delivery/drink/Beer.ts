import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    pouringDrink(): void {
        console.log("Cerveja: Servindo...");
    }
    startRoute(): void {
        this.pouringDrink();
        console.log("Cerveja: Saindo para entrega...");
    }

}