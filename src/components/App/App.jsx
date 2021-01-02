import React from "react";
import AppGameField from "../App-game-field";
import "./App.scss";
import { Provider } from "react-redux";
import store from "../../store";
const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <AppGameField />
            </div>
        </Provider>
    );
};

export default App;
