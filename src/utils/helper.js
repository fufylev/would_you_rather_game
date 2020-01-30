export function checkIfAnswered(questions, loggedInUser) {
    const unAnsweredQuestions = Object.keys(questions)
        .map(key => questions[key])
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

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

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