import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNewPipe, movePipes, fallBird, flyBird } from "../../store/reducers";
import "./App-game-field.scss";
import AppBird from "../App-bird";
import AppPipes from "../App-pipes";
import AppLifes from "../App-lifes";
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

    return (
        <div className="app-game-field">
            <AppBird />
            <AppPipes />
            <AppLifes />
            <div className="app-bottom-image"></div>
        </div>
    );
};

export default AppGameField;
