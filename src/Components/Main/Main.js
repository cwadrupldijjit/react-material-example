import React from 'react';
import { Route } from 'react-router-dom';
import './Main.scss';
import './Main.css';

import MainHeader from './MainHeader/MainHeader';
import LeftNav from './LeftNav/LeftNav';

import Forum from './Forum';
import Topic from './Topic';

export default function Main({ match }) {
    return (
        <div className="main">
            <MainHeader match={match} />
            <div className="main-horizontal-container">
                <LeftNav match={match} />
                
                <div className="viewport">
                    <Route path={`${match.url}/forum`} component={Forum} />
                    <Route path={`${match.url}/topic`} component={Topic} />
                </div>
            </div>
        </div>
    );
}