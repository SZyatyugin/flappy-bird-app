import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    addNewPipe,
    movePipes,
    deleteItemFromArrayOfPipes,
    getUserScore,
    changeGameStatus,
} from "../../store/reducers";
import "./App-game-field.scss";
import AppBird from "../App-bird";
import AppPipes from "../App-pipes";
import AppUserDetails from "../App-user-details";

const AppGameField = () => {
    let data = useSelector((state) => {
        let {
            gameReducer: { status },
        } = state;
        return { status };
    }, shallowEqual);
    let { status } = data;
    let dispatch = useDispatch();

    useEffect(() => {
        if (status === "game over") {
            console.log("reload");
            dispatch(deleteItemFromArrayOfPipes());
            dispatch(changeGameStatus("start"));
        }
    }, [status]);

    useEffect(() => {
        dispatch(addNewPipe());
        setInterval(() => {
            dispatch(movePipes());
            dispatch(getUserScore());
        }, 50);
        setInterval(() => {
            dispatch(addNewPipe());
        }, 8000);
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
