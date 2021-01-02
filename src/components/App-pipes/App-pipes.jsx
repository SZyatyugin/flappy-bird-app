import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./App-pipes.scss";
const AppPipes = () => {
    let pipesReducerData = useSelector((state) => {
        let {
            pipesReducer: { arrayOfPipes },
        } = state;
        return { arrayOfPipes };
    }, shallowEqual);
    let { arrayOfPipes } = pipesReducerData;
    let pipesArray = arrayOfPipes.map((elem, index) => {
        return (
            <React.Fragment key={index}>
                <div
                    className="pipes-top"
                    style={{
                        height: elem.pipeHeightTop + "px",
                        left: elem.pipePosX + "px",
                        width: elem.pipeWidth + "px",
                    }}
                ></div>
                <div
                    className="pipes-bottom"
                    style={{
                        height: elem.pipeHeightBottom + "px",
                        left: elem.pipePosX + "px",
                        width: elem.pipeWidth + "px",
                    }}
                ></div>
            </React.Fragment>
        );
    });

    return <div className="pipes">{pipesArray}</div>;
};
export default AppPipes;
