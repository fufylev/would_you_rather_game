import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewQuestion from './components/NewQuestion';
import Auth from './components/Auth';
import NavBar from './components/NavBar';
import LeaderBoard from './components/LeaderBoard';
import { handleInitialData } from './actions/shared';
import Header from './components/Header';
import PollCard from './components/PollCard';
import PageNotFound from './components/PageNotFound';


class App extends Component {

    componentDidMount() {
        const {questions, users} = this.props;

        /* if no users and question in the store (came from 'redux-persist' Local Storage
            - see the file './src/index.js') then take initial data from _DATA.js.
            This function invokes only one time when game start first time
            - later then all data stores in the Local Storage along with redux store */
        if (Object.keys(users).length === 0 && Object.keys(questions).length === 0) {
            this.props.dispatch(handleInitialData());
        }

    }

    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <NavBar/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/new' component={NewQuestion}/>
                        <Route path='/poll/:id/' component={PollCard}/>
                        <Route path='/leader_board' component={LeaderBoard}/>
                        <Route path='/auth' component={Auth}/>
                        <Route path='/*' component={PageNotFound}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps({questions, users}) {
    return {
        users,
        questions
    };
}

export default connect(mapStateToProps)(App);