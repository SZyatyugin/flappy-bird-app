import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import "./App-game-score.scss";
const AppGameScore = () => {
    let data = useSelector((state) => {
        let {
            gameReducer: { userListTopScore },
        } = state;
        return { userListTopScore };
    }, shallowEqual);

    let { userListTopScore } = data;
    let usersTopScore = userListTopScore.map((elem, index) => {
        return (
            <li key={index}>
                <div>User: {elem.userName}</div>
                <div>Score: {elem.score}</div>
            </li>
        );
    });
    return (
        <div className="app-game-score">
            <h2 className="app-game-score__title">Top score</h2>
            <ul className="app-game-score-list"> {usersTopScore}</ul>
            <div className="app-game-score-btn__wrapper">
                <button className="app-game-score-btn">
                    <Link to="/">Home</Link>
                </button>
            </div>
        </div>
    );
};
export default AppGameScore;
