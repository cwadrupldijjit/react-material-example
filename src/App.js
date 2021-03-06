import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import './App.css';

import { Route } from 'react-router-dom';

import Reroute from './Components/Routes/RerouteTo';

import Login from './Components/Login/Login';
import Main from './Components/Main/Main';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Reroute from="/" to="/login" exact />
                    <Route path="/login" component={Login} />
                    <Route path="/main" component={Main} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
