import IConsole from "../consoles/IConsole";
import IGameplays from "./IGameplays";

export default class Play implements IGameplays{

    constructor(private platform : IConsole){}

    playing(): void {
        console.log("Playing Fall Guys!");
    }
    result(): void {
        console.log("You died!");
    }

}