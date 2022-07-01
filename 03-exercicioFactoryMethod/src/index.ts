import GameLocation from "./location/GameLocation";
import MovieLocation from "./location/MovieLocation";
import { Location } from "./location/Location";

declare var process;
let location1 : Location;

if(process.argv.includes("game")){
    location1 = new GameLocation();
}else if(process.argv.includes("movie")){
    location1 = new MovieLocation();
}else{
    console.error("Selecione um tipo de locaçao");
}

if(location1!){
    location1.startItem();
}