import IConsole from "../consoles/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{

    constructor(platform : IConsole){
        super(platform);
    }

    challenge() : void{
        console.log("Press X to challenge your friends!");
    }

}