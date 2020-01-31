import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import NewQuestion from './components/pages/NewQuestion';
import Auth from './modules/Authorization/Auth';
import NavBar from './modules/NavBar/NavBar';
import LeaderBoardPage from './components/pages/LeaderBoardPage';
import { handleInitialData } from './actions/shared';
import PollCard from './modules/Poll/PollCard';
import PageNotFound from './components/PageNotFound';
import { LoadingBar } from 'react-redux-loading';


class App extends Component {
    componentDidMount() {
        const {questions, users} = this.props;

        /* if no users and question in the store (came from 'redux-persist' Local Storage
            - see the file './src/index.js') then we take initial data from _DATA.js.
            This function invokes only one time when game start first time
            - later then all data stores in the Local Storage along with redux store */
        if (Object.keys(users).length === 0 && Object.keys(questions).length === 0) {
            this.props.dispatch(handleInitialData());
        }

    }

    render() {
        return (
            <>
                <Router>
                    <>
                        <NavBar/>
                        <div className='container'><LoadingBar/></div>
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                            <Route path='/add' component={NewQuestion}/>
                            <Route path='/question/:id/' component={PollCard}/>
                            <Route path='/leaderboard' component={LeaderBoardPage}/>
                            <Route path='/auth' component={Auth}/>
                            <Route path='/*' component={PageNotFound}/>
                        </Switch>
                    </>
                </Router>
            </>
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