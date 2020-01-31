let users = {
    sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'https://tylermcginnis.com/would-you-rather/tyler.jpg',
        answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'https://pickaface.net/gallery/avatar/Garret22785730d3a8d5525.png',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    },
    anonymous: {
        id: 'anonymous',
        name: 'Steve Jobs',
        avatarURL: 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
        },
        questions: ['taqtzrmpxle76hyay30pel', 'd7sluwx7gjnz1lp5pydf6',
            'cys0qr7em3vsyz627ptux', 'tfldpyxtixicfklhwccxet',
            'eykr1n4hu5nd0ngrb5eq8', 'r78ue5rjghyxvpm0g1hw', 'ustb0wasmo430o7sy0tm9'],
    }
};

let questions = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
        },
        optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
        }
    },
    "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'become a superhero',
        },
        optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillain'
        }
    },
    "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'be telekinetic',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic'
        }
    },
    "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
            votes: [],
            text: 'be a front-end developer',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be a back-end developer'
        }
    },
    "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
            votes: ['tylermcginnis'],
            text: 'find $50 yourself',
        },
        optionTwo: {
            votes: ['johndoe'],
            text: 'have your best friend find $500'
        }
    },
    "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['johndoe', 'anonymous'],
            text: 'write JavaScript',
        },
        optionTwo: {
            votes: ['tylermcginnis'],
            text: 'write Swift'
        }
    },
    "taqtzrmpxle76hyay30pel": {
        id: 'taqtzrmpxle76hyay30pel',
        author: 'anonymous',
        timestamp: 1580389914446,
        optionOne: {
            votes: [],
            text: 'eat no candy at Halloween',
        },
        optionTwo: {
            votes: [],
            text: 'no turkey at Thanksgiving'
        }
    },
    "d7sluwx7gjnz1lp5pydf6": {
        id: 'd7sluwx7gjnz1lp5pydf6',
        author: 'anonymous',
        timestamp: 1580390006482,
        optionOne: {
            votes: [],
            text: 'date someone you love',
        },
        optionTwo: {
            votes: [],
            text: 'date someone who loves you'
        }
    },
    "cys0qr7em3vsyz627ptux": {
        id: 'cys0qr7em3vsyz627ptux',
        author: 'anonymous',
        timestamp: 1580390219758,
        optionOne: {
            votes: [],
            text: 'be married',
        },
        optionTwo: {
            votes: [],
            text: 'be single'
        }
    },
    "tfldpyxtixicfklhwccxet": {
        id: 'tfldpyxtixicfklhwccxet',
        author: 'anonymous',
        timestamp: 1580390208465,
        optionOne: {
            votes: [],
            text: 'lose the ability to lie',
        },
        optionTwo: {
            votes: [],
            text: 'believe everything you’re told'
        }
    },
    "eykr1n4hu5nd0ngrb5eq8": {
        id: 'eykr1n4hu5nd0ngrb5eq8',
        author: 'anonymous',
        timestamp: 1580390198066,
        optionOne: {
            votes: [],
            text: 'be free',
        },
        optionTwo: {
            votes: [],
            text: 'totally safe'
        }
    },
    "r78ue5rjghyxvpm0g1hw": {
        id: 'r78ue5rjghyxvpm0g1hw',
        author: 'anonymous',
        timestamp: 1580390187388,
        optionOne: {
            votes: [],
            text: 'eat shit that tasted like chocolate',
        },
        optionTwo: {
            votes: [],
            text: 'eat chocolate that tasted like crap'
        }
    },
    "ustb0wasmo430o7sy0tm9": {
        id: 'ustb0wasmo430o7sy0tm9',
        author: 'anonymous',
        timestamp: 1580390177471,
        optionOne: {
            votes: [],
            text: 'look 10 years older from the neck up',
        },
        optionTwo: {
            votes: [],
            text: 'the neck down'
        }
    },
};

export function _getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 1000)
    })
}

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

