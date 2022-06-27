export default class Adress{
    private _street : string;
    private _number : number;
    private _cep : number;
    private _district : string;
    private _city: string;
    

    constructor(street : string, number : number, cep : number, district : string, city : string){
        this._street = street;
        this._number = number;
        this._cep = cep;
        this._district = district;
        this._city = city;
    }

    toString(){
        return this._street + ", " + this._number + ". " + this._district + ", " + this._city + ". CEP: " + this._cep;
    }
}