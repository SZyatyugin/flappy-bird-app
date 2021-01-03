import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./App-bird-lifes.scss";
const AppBirdLifes = () => {
    let data = useSelector((state) => {
        let {
            lifesReducer: { lifes },
        } = state;
        return { lifes };
    }, shallowEqual);
    let { lifes } = data;
    let dataLifes = new Array(lifes).fill(null).map((elem, index) => {
        return (
            <div className="app-lifes__item" key={index}>
                &#10084;
            </div>
        );
    });
    return <div className="app-lifes">{dataLifes}</div>;
};
export default AppBirdLifes;
