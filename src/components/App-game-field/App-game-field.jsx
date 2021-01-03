import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
    addNewPipe,
    movePipes,
    getUserScore,
    changeGameStatus,
    setUserListTopScore,
    fallBird,
    setDefaultBirdLife,
    setStartPosForBird,
    setUserScoreToDefault,
    decreaseBirdLife,
    deleteItemFromArrayOfPipes,
} from "../../store/reducers";
import "./App-game-field.scss";
import AppBird from "../App-bird";
import AppPipes from "../App-pipes";
import AppUserDetails from "../App-user-details";
let timerPipesMove;
let timerPipesCreate;
let timerBirdFall;
const AppGameField = () => {
    let history = useHistory();
    let data = useSelector((state) => {
        let {
            gameReducer: { status },
            lifesReducer: { lifes },
        } = state;
        return { status, lifes };
    }, shallowEqual);
    let { status, lifes } = data;
    let dispatch = useDispatch();

    useEffect(() => {
        if (status === "next try") {
            dispatch(changeGameStatus("start"));
            dispatch(setStartPosForBird());
            dispatch(decreaseBirdLife());
            if (lifes > 1) {
                dispatch(setUserScoreToDefault());
            } else {
                dispatch(setUserListTopScore());
            }
        }
        if (status === "game over") {
            dispatch(deleteItemFromArrayOfPipes());
            dispatch(changeGameStatus("start"));
            dispatch(setDefaultBirdLife());
            clearInterval(timerPipesCreate);
            clearInterval(timerBirdFall);
            clearInterval(timerPipesMove);
            history.push("/top-score");
        }
    }, [status, lifes]);

    useEffect(() => {
        dispatch(addNewPipe());
        timerPipesMove = setInterval(() => {
            dispatch(movePipes());
            dispatch(getUserScore());
        }, 50);
        timerPipesCreate = setInterval(() => {
            dispatch(addNewPipe());
        }, 8000);
        timerBirdFall = setInterval(() => {
            dispatch(fallBird());
        }, 50);
    }, []);

    return (
        <div className="app-game-field">
            <AppBird />
            <AppPipes />
            <AppUserDetails />
        </div>
    );
};

export default React.memo(AppGameField);
