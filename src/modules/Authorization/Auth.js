import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { userIsLoggedIn } from "../../actions/auth";
import { currentPageHandler } from "../../actions/currentPage";

class Auth extends Component {
    state = {
        value: 'select',
    };

    handleChange = (event) => {
        const {value} = event.target;
        this.setState(() => ({
            value
        }))
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {users} = this.props;
        const {value} = this.state;
        this.props.dispatch(userIsLoggedIn({id: value, name: users[value].name}));

        // redirect to Home Page
        this.props.history.push(`/`);
        this.props.dispatch(currentPageHandler('/'));
    };

    render() {
        const {users} = this.props;

        const usersArray = Object.keys(users).map(key => {
            return {name: users[key].name, id: key}
        });

        return (
            <div className='auth-form border border-default p-5 rounded'>
                <form className='text-center' onSubmit={this.handleSubmit}>
                    <p className='h5 text-center mb-4'>Sign in</p>
                    <div className='grey-text my-5'>
                        <select
                            value={this.state.value}
                            onChange={this.handleChange}
                            className='select-user'>
                            <option value='select' disabled>Select User</option>
                            {usersArray && usersArray.map(user => (
                                <option key={user.id} value={user.id}>{user.name}</option>
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

export default withRouter(connect(mapStateToProps)(Auth));