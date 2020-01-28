import axios from 'axios';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

const DB = 'https://would-you-rather-38744.firebaseio.com/';

/**
 * This function sends query the DB server in order to receive initial data to build App
 * @returns {Promise<{questions: Object with all questions,
 *                      users: Object with all users}>}
 */
function getAll() {
    const users = axios.get(`${DB}users.json`)
        .then(res => {
            return {...res.data}
        })
        .catch(e => console.log(e));

    const questions = axios.get(`${DB}questions.json`)
        .then(res => {
            return {...res.data}
        })
        .catch(e => console.log(e));

    return Promise.all([users, questions])
        .then(([users, questions]) => ({
            users,
            questions,
        }));
}

export function getInitialData() {
    return (dispatch) => {
        return getAll()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
            })
    }
}



