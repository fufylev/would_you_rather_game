import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import loggedInUser from './auth';

export default combineReducers({
    users,
    questions,
    loggedInUser,
});