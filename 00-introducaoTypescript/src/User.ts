import Adress from "./Adress"
import { gender } from "./Utils";

export class User{
    private _name : string;
    private _cpf : number;
    private _gender : gender;
    private _adress : Adress;

    constructor(name : string, cpf : number, gender : gender, adress : Adress){
        this._name = name;
        this._cpf = cpf;
        this._gender = gender;
        this._adress = adress;
    }

    get name() : string{
        return this._name
    }

    set name(name : string){
        this._name = name;
    }

    get cpf() : number{
        return this._cpf
    }

    set cpf(name : number){
        this._cpf = this.cpf;
    }

    get gender() : gender{
        return this._gender
    }

    set gender(gender : gender){
        this._gender = gender;
    }

    get adress() : Adress {
        return this._adress
    }

    userInfo(){
        console.log(this._name + ", pessoa do sexo " + this._gender + ", mora no seguinte endereço: " + this._adress.toString());
    }
}

