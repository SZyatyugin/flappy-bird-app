import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./App-bird.scss";
const AppBird = () => {
    let data = useSelector((state) => {
        let {
            birdReducer: { birdPosX, birdPosY },
        } = state;
        return { birdPosX, birdPosY };
    }, shallowEqual);
    let { birdPosX, birdPosY } = data;
    return (
        <div
            className="app-bird"
            style={{ top: birdPosY + "px", left: birdPosX + "px" }}
        ></div>
    );
};
export default AppBird;
