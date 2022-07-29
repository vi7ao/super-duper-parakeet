import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    
    constructor(){
        this.configureGame;
        console.log("PlayStation: Game Started!");
    }

    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configuring game...");
    }
    authToken(): void {
        console.log("PlayStation: Logging in...");
        console.log("PlayStation: Welcome to PlayStation5");
    }

}