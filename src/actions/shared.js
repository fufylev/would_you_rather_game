import axios from 'axios';
import { receiveUsers } from "./users";
import {receiveQuestions} from "./questions";

const DB = 'https://would-you-rather-38744.firebaseio.com/';

function getAll() {
    const users = axios.get(`${DB}users.json`)
        .then(res => {
            return {...res.data}
        });
    const questions = axios.get(`${DB}questions.json`)
        .then(res => {
            return {...res.data}
        });

    return Promise.all([users, questions])
        .then(([users, questions]) => ({
            users,
            questions,
        }))
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



