import React, { Component } from 'react';
import { MDBNav, MDBNavItem, MDBLink } from 'mdbreact';
import { connect } from 'react-redux';
import { currentPageHandler } from '../actions/currentPage';
import { userIsLoggedIn } from '../actions/auth';

const routesArray = [
    {route: '/', pageName: 'Home'},
    {route: '/new', pageName: 'New Question'},
    {route: '/leader_board', pageName: 'Leader Board'},
];

class NavBar extends Component {

    /**
     * this function handles the current route and chane it in the store
     * if redistribute this function to the local state
     * then it won't work if redirected from other Component
     * now NavBar always knows the current page
     * @param route {string} - current route
     */
    toggleRoute = (route) => {
        this.props.dispatch(currentPageHandler(route));
    };

    render() {
        const {loggedInUser, currentPage} = this.props;

        return (
            <div className='border-bottom border-dark mb-4'>
                <MDBNav className='container d-flex justify-content-between '>
                    <div className='d-flex justify-content-between'>
                        {routesArray.map((route) => (
                            <MDBNavItem key={route.pageName}>
                                <MDBLink to={route.route}
                                         active={currentPage === route.route}
                                         onClick={() => this.toggleRoute(route.route)}
                                         link
                                         className={currentPage === route.route ? 'text-white bg-dark' : 'text-dark'}>
                                    {route.pageName}
                                </MDBLink>
                            </MDBNavItem>
                        ))}
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        {loggedInUser.name
                        && <span className='text-success mr-5'>Hello, {loggedInUser.name}</span>}
                        {!loggedInUser.id
                        && <MDBNavItem>
                            <MDBLink to='/auth'
                                     active={currentPage === '/auth'}
                                     onClick={() => this.toggleRoute('/auth')}
                                     link
                                     className={currentPage === '/auth'
                                         ? 'text-white bg-dark'
                                         : 'text-dark font-weight-bold'}>
                                Log In
                            </MDBLink>
                        </MDBNavItem>}
                        {loggedInUser.id
                        && <MDBNavItem>
                            <MDBLink to='/auth'
                                     onClick={() => {
                                         this.props.dispatch(userIsLoggedIn({}));
                                         this.toggleRoute('/auth');
                                     }}
                                     link
                                     className='text-info font-weight-bold'>
                                Log Out
                            </MDBLink>
                        </MDBNavItem>}
                    </div>

                </MDBNav>
            </div>

        );
    }
}

function mapStateToProps({loggedInUser, currentPage}) {
    return {
        loggedInUser,
        currentPage,
    };
}

export default connect(mapStateToProps)(NavBar);