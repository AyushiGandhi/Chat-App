import React from "react";
import Login from "./components/Login/Login";
import {Link, Route, Switch} from 'react-router-dom';
import Landing from "./components/LandingPage/Landing";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
    return (
        <div className="App">

            <ul>
                <li>
                    <Link to="/">Login </Link>
                </li>
                <li>
                    <Link to="/landing">Landing</Link>
                </li>
                <li>
                    <Link to="/forgotPassword">Forgot Password</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path={'/landing'} component={Landing}/>
                <Route path={'/forgotPassword'} component={ForgotPassword}/>
            </Switch>


        </div>
    );
}

export default App;
