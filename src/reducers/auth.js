import { USER_AUTH } from "../actions/auth";

export default function loggedInUser(state = null, action) {
    switch (action.type) {
        case USER_AUTH:
            return action.userName;
        default:
            return state
    }
}