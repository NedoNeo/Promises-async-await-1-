import json from "./parse";
import read from "./reader";
export default class GameSavingLoader {
    load () {
    return new Promise ((resolve) => {
        read().then((data) => {return json(data)})
        .then((parseData) => resolve(JSON.parse(parseData)));

        
        })
    }

}
  