import React from "react";
import { Link } from "react-router-dom";
import "./App-start-page.scss";
const AppStartPage = () => {
    return (
        <div className="app-start-page">
            <h2>Flappy Bird</h2>
            <div className="start-page__list-wrapper">
                <ul className="start-page__list">
                    <li className="start-page__list-item">
                        <Link to="/create-user">New Game</Link>
                    </li>
                    <li className="start-page__list-item">
                        <Link to="/top-score">Top Score</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default AppStartPage;
