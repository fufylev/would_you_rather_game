import React, { Component } from 'react';
import { MDBNav, MDBNavItem, MDBLink } from "mdbreact";
import { connect } from 'react-redux';
import { currentPageHandler } from "../actions/currentPage";
import { userIsLoggedIn } from "../actions/auth";

const routesArray = [
    {route: '/', pageName: 'Home'},
    {route: '/new', pageName: 'New Question'},
    {route: '/leader_board', pageName: 'Leader Board'},
];

class NavBar extends Component {

    /**
     * this function handles the current route and chane it in the store
     * @param route {string} - current route
     */
    toggleTabs = (route) => {
        this.props.dispatch(currentPageHandler(route));
    };

    render() {
        const {loggedInUser, currentPage} = this.props;

        return (
            <MDBNav className='mb-4 d-flex justify-content-between border-bottom border-dark'>
                <div className='d-flex justify-content-between'>
                    {routesArray.map((route) => (
                        <MDBNavItem key={route.pageName}>
                            <MDBLink to={route.route}
                                     active={currentPage === route.route}
                                     onClick={() => this.toggleTabs(route.route)}
                                     link
                                     className={currentPage === route.route ? 'text-white bg-dark' : 'text-dark'}>
                                {route.pageName}
                            </MDBLink>
                        </MDBNavItem>
                    ))}
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    {loggedInUser
                    && <span className='text-success mr-5'>Hello, {loggedInUser}</span>}
                    {!loggedInUser
                    && <MDBNavItem>
                        <MDBLink to='/auth'
                                 active={currentPage === '/auth'}
                                 onClick={() => this.toggleTabs('/auth')}
                                 link
                                 className={currentPage === '/auth'
                                     ? 'text-white bg-dark'
                                     : 'text-dark font-weight-bold'}>
                            Log In
                        </MDBLink>
                    </MDBNavItem>}
                    {loggedInUser
                    && <MDBNavItem>
                        <MDBLink to='/auth'
                                 onClick={() => {
                                     this.props.dispatch(userIsLoggedIn(null));
                                     this.props.dispatch(currentPageHandler('/auth'));
                                 }}
                                 link
                                 className='text-info font-weight-bold'>
                            Log Out
                        </MDBLink>
                    </MDBNavItem>}
                </div>

            </MDBNav>
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