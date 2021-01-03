import birdReducer from "./birdReducer";
import pipesReducer from "./pipesReducer";
import gameReducer from "./gameReducer";
import { changeGameStatus, getUserName, getUserScore } from "./gameReducer";
import {
    addNewPipe,
    movePipes,
    deleteItemFromArrayOfPipes,
} from "./pipesReducer";
import { fallBird, flyBird, setStartPosForBird } from "./birdReducer";
export { birdReducer, pipesReducer, gameReducer };
export {
    addNewPipe,
    movePipes,
    deleteItemFromArrayOfPipes,
    changeGameStatus,
    getUserName,
    getUserScore,
    fallBird,
    flyBird,
    setStartPosForBird,
};
