import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewQuestion from './components/NewQuestion';
import Auth from './components/Auth';
import NavBar from "./components/NavBar";
import LeaderBoard from "./components/LeaderBoard";


class App extends Component {
    render() {
        return (
            <div className='container my-3'>
                <Router>
                    <NavBar/>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/new' component={NewQuestion}/>
                    <Route path='/leader_board' component={LeaderBoard}/>
                    <Route path='/auth' component={Auth}/>
                </Router>
            </div>
        );
    }
}

export default connect()(App);