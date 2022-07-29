import IConsole from "./consoles/IConsole";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./gameplay/AdvancedPlay";
import Play from "./gameplay/Play";

function startGame(platform : IConsole){
    console.log("Loading...");
    const game = new Play(platform);
    game.playing();
    game.result();
}

function startAdvancedGame(platform : IConsole){
    console.log("Loading...");
    const game = new AdvancedPlay(platform);
    game.playing();
    game.result();
    game.challenge();
}

//startGame(new PlayStation());
//startGame(new Xbox());

startAdvancedGame(new PlayStation());
//startAdvancedGame(new Xbox());