import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import Sauce from "../components/Sauce";
import Sandwich from "../products/Sandwich";
import IBuilder from "./IBuilder";

export default class SandwichBuilder implements IBuilder{

    private sandwich = new Sandwich();

    reset(): void {
        this.sandwich = new Sandwich();
    }
    getSandwich(): Sandwich {
        return this.sandwich;
    }
    setSandwichType(value: SandwichType) {
        this.sandwich.sandwichType = value;
    }
    setBread(bread: Bread) {
        this.sandwich.bread = bread;
    }
    setProtein(protein: Protein) {
        this.sandwich.protein = protein;
    }
    addSalad(salad: Salad) {
        this.sandwich.addSalad(salad);
    }
    addSauce(sauce: Sauce) {
        this.sandwich.addSauces(sauce);
    }

}