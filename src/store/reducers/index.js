import birdReducer from "./birdReducer";
import pipesReducer from "./pipesReducer";
import gameReducer from "./gameReducer";
import lifeReducer from "./lifeReducer";
import { changeGameStatus, getUserName, getUserScore } from "./gameReducer";
import {
    addNewPipe,
    movePipes,
    deleteItemFromArrayOfPipes,
} from "./pipesReducer";
import { minusLife, getLifes } from "./lifeReducer";
import { fallBird, flyBird, setStartPosForBird } from "./birdReducer";
export { birdReducer, pipesReducer, gameReducer, lifeReducer };
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
    minusLife,
    getLifes,
};
