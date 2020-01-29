import { USER_AUTH } from "../actions/auth";

export default function loggedInUser(state = {}, action) {
    switch (action.type) {
        case USER_AUTH:
            return action.user;
        default:
            return state
    }
}