import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './Component/App/App';
import Login from './Component/Signin/login';
import SignUp from './Component/Signup/Signup';
import Home from './Component/home';

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>

                <Route path="/home" component={Home} />
                <Route path="/Signin" component={Login} />

                <Route path="/" component={App}>
                    <IndexRoute component={SignUp} />
                </Route>

            </Router>
        )
    }
}
export default Routes;

{/*npm install react-router@^3.0.2*/ }
{/*npm install packge@version*/ }