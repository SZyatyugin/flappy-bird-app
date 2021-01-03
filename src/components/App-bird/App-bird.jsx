import React from "react";
import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
    setStartPosForBird,
    changeGameStatus,
    fallBird,
    flyBird,
} from "../../store/reducers";
import "./App-bird.scss";
const AppBird = () => {
    let dispatch = useDispatch();
    let data = useSelector((state) => {
        let {
            birdReducer: { birdPosX, birdPosY },
            pipesReducer: { arrayOfPipes, gameFieldHeight },
        } = state;
        return { birdPosX, birdPosY, arrayOfPipes, gameFieldHeight };
    }, shallowEqual);
    let { birdPosX, birdPosY, arrayOfPipes, gameFieldHeight } = data;
    useEffect(() => {
        setInterval(() => {
            dispatch(fallBird());
        }, 50);
        const handleKeyPress = (e) => {
            if (e.keyCode === 32) {
                dispatch(flyBird());
            }
        };
        document.addEventListener("keypress", handleKeyPress);
    }, []);
    useEffect(() => {
        if (birdPosY < 0 || birdPosY + 30 > gameFieldHeight) {
            dispatch(setStartPosForBird());
            dispatch(changeGameStatus("game over"));
        }
        arrayOfPipes.map((elem) => {
            if (
                birdPosX + 30 >= elem.pipePosX &&
                birdPosX + 30 <= elem.pipePosX + elem.pipeWidth &&
                (birdPosY + 30 <= elem.pipeHeightTop ||
                    birdPosY + 30 >= elem.pipeHeightBottom)
            ) {
                dispatch(changeGameStatus("game over"));
                dispatch(setStartPosForBird());
            }
        });
    }, [birdPosX, birdPosY]);

    return (
        <div
            className="app-bird"
            style={{ top: birdPosY + "px", left: birdPosX + "px" }}
        ></div>
    );
};
export default React.memo(AppBird);
