import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    
    constructor(){
        this.configureGame;
        console.log("Xbox: Game Started!");
    }

    configureGame(): void {
        this.authToken();
        console.log("Xbox: Configuring game...");
    }
    authToken(): void {
        console.log("Xbox: Logging in...");
        console.log("Xbox: Welcome to Xbox Series X");
    }
    
}