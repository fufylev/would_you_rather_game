import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userIsLoggedIn } from "../actions/auth";

class Auth extends Component {
    state = {
        value: 'choice',
    };

    handleChange = (event) => {
        const {value} = event.target;
        this.setState(() => ({
            value
        }))
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {value} = this.state;
        this.props.dispatch(userIsLoggedIn(value))
    };

    render() {
        const {users} = this.props;

        const usersArray = Object.keys(users).map(key => {
            return users[key].name
        });

        return (
            <div className='auth-form border border-default p-5 rounded'>
                <form className='text-center' onSubmit={this.handleSubmit}>
                    <p className='h5 text-center mb-4'>Sign in</p>
                    <div className='grey-text my-5'>
                        <select
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <option value='choice' disabled>Choose User</option>
                            {usersArray && usersArray.map(name => (
                                <option key={name} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='text-center '>
                        <button className='btn btn-dark mt-5'>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return {
        users
    };
}

export default connect(mapStateToProps)(Auth);