import React from "react";
import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
    flyBird,
    changeGameStatus,
    deleteItemFromArrayOfPipes,
} from "../../store/reducers";
import "./App-bird.scss";
const AppBird = () => {
    let dispatch = useDispatch();
    let data = useSelector((state) => {
        let {
            birdReducer: { birdPosX, birdPosY },
            pipesReducer: {
                arrayOfPipes,
                gameFieldHeight,
                pipeGap,
                bottomBgHeight,
            },
            lifesReducer: { lifes },
        } = state;
        return {
            birdPosX,
            birdPosY,
            arrayOfPipes,
            gameFieldHeight,
            pipeGap,
            lifes,
            bottomBgHeight,
        };
    }, shallowEqual);
    let {
        birdPosX,
        birdPosY,
        arrayOfPipes,
        gameFieldHeight,
        pipeGap,
        lifes,
        bottomBgHeight,
    } = data;
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.keyCode === 32) {
                dispatch(flyBird());
            }
        };
        document.addEventListener("keypress", handleKeyPress);
    }, []);
    useEffect(() => {
        if (birdPosY < 0 || birdPosY + 30 > gameFieldHeight - bottomBgHeight) {
            dispatch(changeGameStatus("next try"));
        }
        if (lifes > 0) {
            arrayOfPipes.map((elem) => {
                if (
                    birdPosX + 30 >= elem.pipePosX &&
                    birdPosX + 30 <= elem.pipePosX + elem.pipeWidth &&
                    (birdPosY <= elem.pipeHeightTop ||
                        birdPosY + 30 >= elem.pipeHeightTop + pipeGap)
                ) {
                    console.log(birdPosY + 30);
                    console.log(elem.pipeHeightTop + pipeGap);
                    console.log(elem.pipeHeightBottom);
                    dispatch(deleteItemFromArrayOfPipes());
                    dispatch(changeGameStatus("next try"));
                }
            });
        } else {
            dispatch(changeGameStatus("game over"));
        }
    }, [birdPosY, lifes]);

    return (
        <div
            className="app-bird"
            style={{ top: birdPosY + "px", left: birdPosX + "px" }}
        ></div>
    );
};
export default React.memo(AppBird);
