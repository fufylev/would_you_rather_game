export const USER_AUTH = 'USER_AUTH';

export function userIsLoggedIn(userName) {
    return {
        type: USER_AUTH,
        userName,
    }
}