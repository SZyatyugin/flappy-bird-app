import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./App-lifes.scss";
const AppLifes = () => {
    let data = useSelector((state) => {
        let {
            lifeReducer: { lifes },
        } = state;
        return { lifes };
    }, shallowEqual);
    let { lifes } = data;
    return (
        <div className="app-lifes">
            <p
                style={
                    lifes === 3
                        ? { display: "inline-block" }
                        : { display: "none" }
                }
            >
                &#10084;
            </p>
            <p
                style={
                    lifes >= 2
                        ? { display: "inline-block" }
                        : { display: "none" }
                }
            >
                &#10084;
            </p>
            <p
                style={
                    lifes >= 1
                        ? { display: "inline-block" }
                        : { display: "none" }
                }
            >
                &#10084;
            </p>
        </div>
    );
};
export default AppLifes;
