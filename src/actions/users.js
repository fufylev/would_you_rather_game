import axios from 'axios';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const DB = 'https://would-you-rather-38744.firebaseio.com/';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function getUsersHandler() {
    return (dispatch) => {
        return axios.get(`${DB}users.json`)
            .then(res => res.data)
            .then((users) => {
                dispatch(receiveUsers(users));
            })
    }
}