import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Login.scss';
import './Login.css';

import LoginCard from './LoginCard';
import RegisterCard from './RegisterCard';

export default class Login extends Component {
    render() {
        return (
            <div className="login-layout">
                <Route exact path={`${this.props.match.url}`} component={LoginCard} />
                <Route path={`${ this.props.match.url }/register`} component={RegisterCard} />
            </div>
        );
    }
}