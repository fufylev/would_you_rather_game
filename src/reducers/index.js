import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import loggedInUser from './auth';
import currentPage from './currentPage';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    users,
    questions,
    loggedInUser,
    currentPage,
    loadingBar: loadingBarReducer,
});