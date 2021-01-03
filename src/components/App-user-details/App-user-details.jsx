import React from "react";
import { useSelector } from "react-redux";
import "./App-game-user.scss";
const AppUserDetails = () => {
    let data = useSelector((state) => {
        let {
            gameReducer: { userScore, userName },
        } = state;
        return { userScore, userName };
    });
    let { userScore, userName } = data;
    return (
        <div className="app-bottom-image">
            <div className="app-game-user">
                <div className="app-game-userName">{userName}</div>
                <div className="app-game-userScore">Score {userScore}</div>
            </div>
        </div>
    );
};
export default React.memo(AppUserDetails);
