import React from "react";
import { useSelector } from "react-redux";
import "./App-bird.scss";
const AppBird = () => {
    let data = useSelector((state) => {
        let {
            birdReducer: { birdPosX, birdPosY },
        } = state;
        return { birdPosX, birdPosY };
    });
    let { birdPosX, birdPosY } = data;
    return (
        <div
            className="app-bird"
            style={{ top: birdPosY + "px", left: birdPosX + "px" }}
        ></div>
    );
};
export default AppBird;