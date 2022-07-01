import IItem from "./interfaces/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Game loading...");
        console.log("Game started!");
    }
    getDescription(): void {
        console.log("Game: League of Legends");
    }
}