export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';

export function saveQuestions(questions) {
    return {
        type: SAVE_QUESTIONS,
        questions,
    }
}

