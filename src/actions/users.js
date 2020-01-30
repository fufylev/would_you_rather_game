export const SAVE_USERS = 'SAVE_USERS';

export function saveUsers(users) {
    return {
        type: SAVE_USERS,
        users,
    }
}
