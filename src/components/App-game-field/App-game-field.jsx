import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNewPipe, movePipes } from "../../store/reducers";
import "./App-game-field.scss";
import AppBird from "../App-bird";
import AppPipes from "../App-pipes";
const AppGameField = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(addNewPipe());
        setInterval(() => {
            dispatch(movePipes());
        }, 50);
        setInterval(() => {
            dispatch(addNewPipe());
        }, 8000);
    }, []);

    return (
        <div className="app-game-field">
            <AppBird />
            <AppPipes />
            <div className="app-bottom-image"></div>
        </div>
    );
};

export default AppGameField;
