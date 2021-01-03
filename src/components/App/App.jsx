import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import store from "../../store";
import AppGameField from "../App-game-field";
import AppStartPage from "../App-start-page";
import AppGameScore from "../App-game-score";
import AppCreateUser from "../App-create-user";
import "./App.scss";
const App = () => {
    let history = useHistory();
    if (location.reload) {
        history.push("/");
    }
    return (
        <Provider store={store}>
            <div className="App">
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={AppStartPage} />
                        <Route path="/create-user" component={AppCreateUser} />
                        <Route path="/game" component={AppGameField} />
                        <Route path="/top-score" component={AppGameScore} />
                    </Switch>
                </div>
            </div>
        </Provider>
    );
};

export default App;
