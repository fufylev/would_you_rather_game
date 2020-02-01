import { showLoading, hideLoading } from 'react-redux-loading';

import { saveUsers } from './users';
import { saveQuestions } from './questions';
import { getInitialData } from '../utils/_DATA';
import { formatQuestion } from '../utils/helper';

/**
 * Receive initial data if it does not exists in the LocalStorage
 * @returns {function(*): Promise<{questions: *, users: *}>}
 */
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(saveUsers(users));
                dispatch(saveQuestions(questions));
                dispatch(hideLoading());
            })
    }
}

/**
 * This function updates users and questions once User submitted the Poll
 * @param authedUser {string} - User's id
 * @param qid {string} - poll question's id
 * @param answer {string} - chosen User's answer
 * @returns {function(...[*]=)} - invokes users' and questions' actions
 */
export function saveQuestionAnswer ({ authedUser, qid, answer }) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const {users, questions} = getState();

        const usersNew = {
            ...users,
            [authedUser]: {
                ...users[authedUser],
                answers: {
                    ...users[authedUser].answers,
                    [qid]: answer
                }
            }
        };

        const questionsNew = {
            ...questions,
            [qid]: {
                ...questions[qid],
                [answer]: {
                    ...questions[qid][answer],
                    votes: questions[qid][answer].votes.concat([authedUser])
                }
            }
        };
        // imitate a server response
        setTimeout(() => {
            dispatch(saveUsers({...usersNew}));
            dispatch(saveQuestions({...questionsNew}));
            dispatch(hideLoading());
        }, 1000);
    }
}

/**
 * saves the question created by user
 * @param question - {Object}
 * @returns {function(...[*]=)}
 */
export function saveQuestion (question) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const {users, questions} = getState();
        const authedUser = question.author;
        const formattedQuestion = formatQuestion(question);

        const questionsNew  = {
            ...questions,
            [formattedQuestion.id]: formattedQuestion
        };

        const usersNew = {
            ...users,
            [authedUser]: {
                ...users[authedUser],
                questions: users[authedUser].questions.concat([formattedQuestion.id])
            }
        };
        // imitate a server response
        setTimeout(() => {
            dispatch(saveUsers({...usersNew}));
            dispatch(saveQuestions({...questionsNew}));
            dispatch(hideLoading());
        }, 1000);

    }
}

