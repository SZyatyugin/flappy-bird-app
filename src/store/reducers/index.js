import birdReducer from "./birdReducer";
import pipesReducer from "./pipesReducer";
import gameReducer from "./gameReducer";
import {
    changeGameStatus,
    getUserName,
    getUserScore,
    setUserListTopScore,
    setUserScoreToDefault,
} from "./gameReducer";
import {
    addNewPipe,
    movePipes,
    deleteItemFromArrayOfPipes,
} from "./pipesReducer";
import { fallBird, flyBird, setStartPosForBird } from "./birdReducer";
import lifesReducer from "./lifesReducer";
import { decreaseBirdLife, setDefaultBirdLife } from "./lifesReducer";
export { birdReducer, pipesReducer, gameReducer, lifesReducer };
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
    decreaseBirdLife,
    setDefaultBirdLife,
    setUserListTopScore,
    setUserScoreToDefault,
};
