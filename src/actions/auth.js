export const USER_AUTH = 'USER_AUTH';

export function userIsLoggedIn(user) {
    return {
        type: USER_AUTH,
        user,
    }
}