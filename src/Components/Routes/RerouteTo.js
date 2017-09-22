import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Reroute = ({ from, to, ...rest }) => (
    <Route
        path={from}
        render={props => (
            <Redirect to={{
                pathname: to,
                state: {
                    from: props.location,
                },
            }} />
        )}
        {...rest} />
);

export default Reroute;