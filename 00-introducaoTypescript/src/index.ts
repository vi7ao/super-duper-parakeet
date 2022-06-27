import Adress from "./Adress";
import { User } from "./User";
import { gender } from "./Utils";

let adress1 : Adress = new Adress("Rua XV de Novembro", 1234, 85000000, "Alto da XV", "Guarapuava")
let adress2 : Adress = new Adress("Rua Saldanha Marinho", 4321, 85010010, "Centro", "Guarapuava")
let adress3 : Adress = new Adress("Rua Vicente Machado", 41, 85010015, "Centro", "Guarapuava")
let user1 : User = new User("Jose", 10990119081, gender.male, adress1)
let user2 : User = new User("Joana", 10990119031, gender.female, adress2)
let user3 : User = new User("Jo", 10990119031, gender.undefined, adress3)

user1.userInfo();
user2.userInfo();
user3.userInfo();