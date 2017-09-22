import React from 'react';
import { Route, Link } from 'react-router-dom';

import Forum from './Forum';
import Topic from './Topic';

export default function Main({ match }) {
    return (
        <div>
            <Link to={`${match.url}/forum`}>To the forum!</Link>
            <Link to={`${match.url}/topic`}>To the topic!</Link>
            
            <Route path={`${match.url}/`} component={Forum} />
            <Route path={`${match.url}/topic`} component={Topic} />
        </div>
    );
}