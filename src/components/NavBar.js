import React, { Component } from 'react';
import { MDBNav, MDBNavItem, MDBLink } from "mdbreact";

class NavBar extends Component {
    state = {
        activeItemPills: '/'
    };

    toggleTabs = tab => () => {
        const { activePills } = this.state;
        if (activePills !== tab) {
            this.setState({
                activeItemPills: tab
            });
        }
    };

    render() {
        const {activeItemPills} = this.state;

        return (
            <MDBNav className='mb-4 d-flex justify-content-between border-bottom border-dark'>
                <div className='d-flex justify-content-between'>
                    <MDBNavItem>
                        <MDBLink to='/'
                                 active={activeItemPills === '/'}
                                 onClick={this.toggleTabs('/')}
                                 link
                                 className={activeItemPills === '/' ? 'text-white bg-dark' : 'text-dark'}>
                            Home
                        </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBLink to='/new'
                                 active={activeItemPills === '/new'}
                                 onClick={this.toggleTabs('/new')}
                                 link
                                 className={activeItemPills === '/new' ? 'text-white bg-dark' : 'text-dark'}>
                            New Question
                        </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBLink to='/leader_board'
                                 active={activeItemPills === '/leader_board'}
                                 onClick={this.toggleTabs('/leader_board')}
                                 link
                                 className={activeItemPills === '/leader_board' ? 'text-white bg-dark' : 'text-dark'}>
                            Leader Board
                        </MDBLink>
                    </MDBNavItem>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='text-success mr-5'>Welcome User!!</span>
                    <MDBNavItem >
                        <MDBLink to='/auth'
                                 active={activeItemPills === '/auth'}
                                 onClick={this.toggleTabs('/auth')}
                                 link
                                 className={activeItemPills === '/auth' ? 'text-white bg-dark' : 'text-dark'}>
                            Log In
                        </MDBLink>
                    </MDBNavItem>
                </div>

            </MDBNav>
        );
    }
}

export default NavBar;