import React, { Component } from 'react';
import { Drawer, RaisedButton } from 'material-ui';

export default class Forum extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false,
        };
    }
    
    handleToggle = () => this.setState(s => ({ open: !s.open }));
    
    render() {
        return (
            <div>
                <h1>
                    Forum!!!
                </h1>
                
                <RaisedButton onClick={this.handleToggle}>Toggle Drawer</RaisedButton>
                
                <Drawer open={this.state.open} openSecondary={true}>
                    <h2>Header!</h2>
                </Drawer>
            </div>
        )
    };
}