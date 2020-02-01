/**
 * this function returns arrays of unAnswered questions & answered questions for particulat user
 * @param questions - {Object} - set of all questions in store
 * @param loggedInUser {Object} - user's data {name, id}
 * @returns {{unAnsweredQuestions: *[], answeredQuestions: *[]}}
 */
export function checkIfAnswered(questions, loggedInUser) {
    const unAnsweredQuestions = Object.keys(questions)
        .map(key => questions[key])
        .sort((a, b) => (b.timestamp - a.timestamp))
        .filter(question => {
            // concat all votes
            let arr = [];
            if (question.optionOne.votes) {
                arr = [...arr, ...question.optionOne.votes]
            }
            if (question.optionTwo.votes) {
                arr = [...arr, ...question.optionTwo.votes]
            }
            return !arr.includes(loggedInUser.id)
        });

    const answeredQuestions = Object.keys(questions)
        .map(key => questions[key])
        .sort((a, b) => (b.timestamp - a.timestamp))
        .filter(question => {
            // concat all votes
            let arr = [];
            if (question.optionOne.votes) {
                arr = [...arr, ...question.optionOne.votes]
            }
            if (question.optionTwo.votes) {
                arr = [...arr, ...question.optionTwo.votes]
            }
            return arr.includes(loggedInUser.id)
        });
    return {unAnsweredQuestions, answeredQuestions}
}

/**
 * generates unique number according to current time and date
 * @returns {string}
 */
function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

/**
 * forms question to the appropriate structure which suits reducer
 * @param optionOneText - first option
 * @param optionTwoText - second option
 * @param author - user's id
 * @returns {{author: *, optionTwo: {votes: [], text: *}, id: string, timestamp: number, optionOne: {votes: [], text: *}}}
 */
export function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}