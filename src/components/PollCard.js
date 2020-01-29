import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { checkIfAnswered } from '../utils/helper';
import PollCardAnswered from "./PollCardAnswered";
import PollCardUnAnswered from "./PollCardUnAnswered";

class PollCard extends Component {
    render() {
        const {id} = this.props.match.params;
        const {loggedInUser, questions} = this.props;
        const {unAnsweredQuestions, answeredQuestions} = checkIfAnswered(questions, loggedInUser);
        const isAnswered = answeredQuestions.map(el => el.id).includes(id);

        return (
            <div className='container text-center'>
                {isAnswered
                    ? <PollCardAnswered/>
                    : <PollCardUnAnswered/>}
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