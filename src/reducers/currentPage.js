import { CURRENT_PAGE } from "../actions/currentPage";

export default function currentPage(state = '/', action) {
    switch (action.type) {
        case CURRENT_PAGE:
            return action.currentPage;
        default:
            return state
    }
}