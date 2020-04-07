import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import {logoutUser, setCurrentUser} from './actions/authentication';

import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

import Dashboard from './components/dashboard/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from "./components/profile/Profile";
import IdeaPreview from "./components/idea/IdeaPreview";

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <PrivateRoute exact path="/profile" component={Profile}/>
                        <PrivateRoute exact path="/idea" component={IdeaPreview}/>
                        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        <PrivateRoute exact path="/" component={Home}/>
                        <div className="container">
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
