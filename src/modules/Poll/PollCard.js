import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { checkIfAnswered } from '../../utils/helper';
import PollCardAnswered from "./AnsweredQuestionCard";
import PollCardUnAnswered from "./UnAnsweredQuestionCard";

class PollCard extends Component {
    render() {
        const {id} = this.props.match.params;
        const {loggedInUser, questions} = this.props;
        const {unAnsweredQuestions, answeredQuestions} = checkIfAnswered(questions, loggedInUser);
        const isAnswered = answeredQuestions.map(el => el.id).includes(id);

        /*if (!questions[id]) {
            this.props.history.push('/page404');
            return
        }*/

        // console.log(questions[id]);

        return (
            <div className='container text-center questions-container '>
                {isAnswered
                    ? <PollCardAnswered
                        question={answeredQuestions.filter(item => item.id === id)[0]}
                    />
                    : <PollCardUnAnswered
                        question={unAnsweredQuestions.filter(item => item.id === id)[0]}
                    />}
            </div>
        );
    }
}

function mapStateToProps({loggedInUser, questions}) {
    return {
        loggedInUser,
        questions,
    };
}

export default withRouter(connect(mapStateToProps)(PollCard));