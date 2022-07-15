import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";

export default class Sandwich{
    private _sandwichType : SandwichType;
    private _salads : Salad[] = [];
    private _protein : Protein;
    private _sauces : Sauce[] = [];
    private _bread : Bread;

    get sandwichType() : SandwichType{
        return this._sandwichType;
    }

    set sandwichType(value : SandwichType){
        this._sandwichType = value;
    }

    get salads() : Salad[]{
        return this._salads;
    }

    addSalad(salad : Salad){
        this._salads.push(salad);
    }

    get sauces() : Sauce[]{
        return this._sauces;
    }

    addSauces(sauce : Sauce){
        this._sauces.push(sauce);
    }

    get protein() : Protein{
        return this._protein;
    }

    set protein(value : Protein){
        this._protein = value;
    }

    get bread() : Bread{
        return this._bread;
    }

    set bread(value : Bread){
        this._bread = value;
    }
}