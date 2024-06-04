
import GameSavingLoader from "./gameSavingLoadr";

let game = new GameSavingLoader();
game.load().then((saving) => {
    console.log(saving)
      }, (error) => {
     console.log(error)
  });

