import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBLink, MDBNavLink, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";

import { FaUserGraduate } from 'react-icons/fa';
import { currentPageHandler } from '../../actions/currentPage';
import { userIsLoggedIn } from '../../actions/auth';

const routesArray = [
    {route: '/', pageName: 'Home'},
    {route: '/add', pageName: 'New Question'},
    {route: '/leaderboard', pageName: 'Leader Board'},
];

class NavBar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    /**
     * this function handles the current route and chane it in the store. If redistribute this
     * function to the local state then it won't work if redirected from other Component
     * now NavBar always knows the current page
     * @param route {string} - current route
     */
    toggleRoute = (route) => {
        this.props.dispatch(currentPageHandler(route));
    };

    render() {
        const {loggedInUser, currentPage, users} = this.props;
        const user = Object.keys(users).map(key => users[key]).filter(user => user.id === loggedInUser.id)[0];

        return (
            <div className='bg-secondary border-bottom border-dark mb-4'>
                <MDBNavbar color="indigo" dark expand="xs" className='container text-secondary'>
                    <MDBNavbarNav left className='d-flex justify-content-between align-items-center'>
                        {routesArray.map((route) => (
                            <MDBNavItem key={route.pageName}>
                                <MDBLink to={route.route}
                                            active={currentPage === route.route}
                                            onClick={() => this.toggleRoute(route.route)}
                                            link
                                            className={currentPage === route.route ? 'text-warning font-weight-bold px-1' : "text-white"}>
                                    {route.pageName}
                                </MDBLink>
                            </MDBNavItem>
                        ))}

                    </MDBNavbarNav>
                    <MDBNavbarNav right className='d-flex justify-content-center align-items-center'>
                        {loggedInUser.name &&
                        <MDBNavItem>
                            <span className='text-warning user-custom'>Hello, {loggedInUser.name}</span>
                            {user.avatarURL && user.avatarURL.length !== 0 &&
                            <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar-small'/>}
                            {(!user.avatarURL || user.avatarURL.length === 0) &&
                            <FaUserGraduate size='2em' className='mx-3'/>}
                        </MDBNavItem>}
                        {!loggedInUser.id &&
                        <MDBNavItem>
                            <MDBNavLink to='/auth'
                                        active={currentPage === '/auth'}
                                        onClick={() => this.toggleRoute('/auth')}
                                        link
                                        className={currentPage === '/auth' ? 'text-white font-weight-bold px-1' : "text-white"}>
                                Log In
                            </MDBNavLink>
                        </MDBNavItem>}
                        {loggedInUser.id &&
                        <MDBNavItem>
                            <MDBNavLink to='/auth'
                                        onClick={() => {
                                            this.props.dispatch(userIsLoggedIn({}));
                                            this.toggleRoute('/auth');
                                        }}
                                        link
                                        className='text-white font-weight-bold '>
                                Log Out
                            </MDBNavLink>
                        </MDBNavItem>}
                    </MDBNavbarNav>
                </MDBNavbar>
            </div>
        );
    }
}

function mapStateToProps({loggedInUser, currentPage, users}) {
    return {
        loggedInUser,
        currentPage,
        users,
    };
}

export default connect(mapStateToProps)(NavBar);