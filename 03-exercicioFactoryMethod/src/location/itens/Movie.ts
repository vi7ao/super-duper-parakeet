import IItem from "./interfaces/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Movie loading...");
        console.log("Movie started!");
    }
    getDescription(): void {
        console.log("Movie: Drive");
    }
}