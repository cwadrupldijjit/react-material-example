import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginCard.scss';
import './LoginCard.css';

class LoginCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirectToMain: false,
        };
    }

    render() {
        return (
            <div className="login-box">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="form-row">
                        <div className="input-box">
                            <label>Username</label>

                            <input type="text" value={this.state.username} onChange={e => this.handleChange(e, 'username')} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-box">
                            <label>Password</label>

                            <input type="password" value={this.state.password} onChange={e => this.handleChange(e, 'password')} />
                        </div>
                    </div>

                    <div className="form-row">
                        <button type="submit">Submit</button>
                    </div>
                </form>

                <Link to="/login/register">Don't have an account?  Register!</Link>
            </div>
        );
    }

    handleChange(e, name) {
        e.persist();

        this.setState(() => ({ [name]: e.target.value }));
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('username', this.state.username);
        console.log('password', this.state.password);

        this.props.history.push({
            pathname: '/main/forum'
        });
    }
}

export default LoginCard;