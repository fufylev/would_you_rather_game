import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { getInitialData } from '../utils/_DATA';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
            })
    }
}



