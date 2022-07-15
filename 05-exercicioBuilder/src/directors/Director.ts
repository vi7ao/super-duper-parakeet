import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSandwichType(SandwichType.HOTDOG);
        this.builder.setBread(Bread.FRANCES);
        this.builder.setProtein(Protein.VINA);
        this.builder.addSalad(Salad.CEBOLA);
        this.builder.addSauce(Sauce.MAIONESE);
        this.builder.addSauce(Sauce.KETCHUP);
        this.builder.addSauce(Sauce.MOSTARDA);
        this.builder.addSauce(Sauce.MOLHO_TOMATE);
    }

    constructXSalada(){
        this.builder.setSandwichType(SandwichType.XSALADA);
        this.builder.setBread(Bread.AGUA);
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.addSalad(Salad.ALFACE);
        this.builder.addSauce(Sauce.MAIONESE);
        this.builder.addSauce(Sauce.KETCHUP);
        this.builder.addSauce(Sauce.MOSTARDA);
        this.builder.addSauce(Sauce.MOLHO_VERDE);
    }
}