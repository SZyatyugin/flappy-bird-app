import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserName } from "../../store/reducers";
import "./App-create-user.scss";
const AppCreateUser = () => {
    let history = useHistory();
    let [inputValue, setInputValue] = useState();
    let [errorHandler, setErrorHandler] = useState(false);
    let dispatch = useDispatch();
    let error = errorHandler ? (
        <div className="app-user-error">Please,enter your username</div>
    ) : null;
    return (
        <div className="app-create-user">
            <h2>Flappy Bird</h2>
            <input
                type="text"
                className="app-username"
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                placeholder="Please type in your name"
            ></input>
            {error}
            <button
                className="app-start-game"
                onClick={(e) => {
                    if (!inputValue) {
                        setErrorHandler(!errorHandler);
                        e.preventDefault();
                        return;
                    }
                    setErrorHandler(!errorHandler);
                    dispatch(getUserName(inputValue));
                    history.push("/game");
                }}
            >
                Start New game
            </button>
        </div>
    );
};
export default AppCreateUser;
