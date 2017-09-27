import React, { Component } from 'react';
import './RegisterCard.scss';
import './RegisterCard.css';

import { Link } from 'react-router-dom';

class RegisterCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
        };
    }

    render() {
        return (
            <div className="register-box">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="form-row">
                        <div className="input-box">
                            <label>Username</label>

                            <input type="text" onChange={e => this.handleChange(e, 'username')} value={this.state.username} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-box">
                            <label>Email</label>

                            <input type="email" onChange={e => this.handleChange(e, 'email')} value={this.state.email} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-box">
                            <label>Password</label>

                            <input type="password" onChange={e => this.handleChange(e, 'password')} value={this.state.password} />
                        </div>
                    </div>

                    <div className="form-row">
                        <button type="submit">Submit</button>
                    </div>
                </form>

                <Link to="/login">
                    Already have an account? Log in!
                </Link>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.history.push({
            pathname: '/main/forum',
        });
    }

    handleChange(e, name) {
        e.persist();

        this.setState(() => ({ [name]: e.target.value }));
    }
}

export default RegisterCard;