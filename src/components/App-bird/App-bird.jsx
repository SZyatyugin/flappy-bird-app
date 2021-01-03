import React from "react";
import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
    setStartPosForBird,
    changeGameStatus,
    fallBird,
    flyBird,
    minusLife,
    deleteItemFromArrayOfPipes,
} from "../../store/reducers";
import "./App-bird.scss";
const AppBird = () => {
    let dispatch = useDispatch();
    let data = useSelector((state) => {
        let {
            birdReducer: { birdPosX, birdPosY },
            pipesReducer: { arrayOfPipes },
            lifeReducer: { lifes },
        } = state;
        return { birdPosX, birdPosY, arrayOfPipes, lifes };
    }, shallowEqual);
    let { birdPosX, birdPosY, arrayOfPipes, lifes } = data; //gameFieldHeight
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
        // if (birdPosY < 0 || birdPosY + 30 > gameFieldHeight) {
        //     dispatch(setStartPosForBird());
        //     dispatch(changeGameStatus("game over"));
        // }
        // arrayOfPipes.map((elem) => {
        //     if (
        //         birdPosX + 30 >= elem.pipePosX &&
        //         birdPosX + 30 <= elem.pipePosX + elem.pipeWidth &&
        //         (birdPosY + 30 <= elem.pipeHeightTop ||
        //             birdPosY + 30 >= elem.pipeHeightBottom)
        //     ) {
        //         dispatch(changeGameStatus("game over"));
        //         dispatch(setStartPosForBird());
        //     }
        // });
        const check = (birdPosX, birdPosY, arrayOfPipes) => {
            const challenge = arrayOfPipes
                .map((pipe) => {
                    return {
                        x1: pipe.pipePosX,
                        y1: pipe.pipeHeightTop,
                        x2: pipe.pipePosX,
                        y2: pipe.pipeHeightTop + 118,
                    };
                })
                .filter(({ x1 }) => {
                    if (x1 > 0 && x1 < 159) {
                        return true;
                    }
                });
            if (birdPosY + 25 > 394) {
                console.log("game over");
                // dispatch(minusLife());
                // dispatch(birdOver());
                // dispatch(resetPipes());
                // dispatch(changeGameStatus("game over"));
                dispatch(minusLife());
                dispatch(setStartPosForBird());
                dispatch(deleteItemFromArrayOfPipes());
            }
            if (challenge.length) {
                const { x1, y1, x2, y2 } = challenge[0];
                if (
                    (x1 < birdPosX + 30 &&
                        birdPosX < x1 + 50 &&
                        birdPosY < y1) ||
                    (x2 < birdPosX + 30 &&
                        birdPosX < x2 + 50 &&
                        birdPosY + 25 > y2)
                ) {
                    // dispatch(minusLife());
                    // dispatch(birdOver());
                    // dispatch(resetPipes());
                    //dispatch(changeGameStatus("game over"));
                    dispatch(minusLife());
                    dispatch(setStartPosForBird());
                    dispatch(deleteItemFromArrayOfPipes());
                }
            }
        };
        check(birdPosX, birdPosY, arrayOfPipes);
    }, [arrayOfPipes]); //[birdPosX, birdPosY]);
    useEffect(() => {
        if (lifes === 0) {
            dispatch(changeGameStatus("game over"));
        }
    }, [lifes]);

    return (
        <div
            className="app-bird"
            style={{ top: birdPosY + "px", left: birdPosX + "px" }}
        ></div>
    );
};
export default React.memo(AppBird);
