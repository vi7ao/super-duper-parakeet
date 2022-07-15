import SandwichBuilder from "./builders/SandwichBuilder";
import Director from "./directors/Director";
import Sandwich from "./products/Sandwich";

const builder : SandwichBuilder = new SandwichBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
let hotDog : Sandwich = builder.getSandwich();
console.log("Criando sanduiche do tipo: " + hotDog.sandwichType);
console.log("Molhos: " + hotDog.sauces);
console.log("Saladas: " + hotDog.salads);

builder.reset();

director.constructXSalada();
let xSalada : Sandwich = builder.getSandwich();
console.log("Criando Sanduiche do tipo: " + xSalada.sandwichType);
console.log("Molhos: " + xSalada.sauces);
console.log("Saladas: " + xSalada.salads);