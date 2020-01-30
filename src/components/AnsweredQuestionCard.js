import React from 'react';
import { connect } from 'react-redux';
import { FaUserGraduate } from 'react-icons/fa';
import AnswerResultProgressCard from "./AnswerResultProgressCard";

const AnsweredQuestionCard = (props) => {
    const {question, users, loggedInUser} = props;
    const user = Object.keys(users).map(key => users[key]).filter(user => user.id === question.author)[0];
    const ifOptionOneAnswered = question.optionOne.votes.includes(loggedInUser.id);
    const ifOptionTwoAnswered = question.optionTwo.votes.includes(loggedInUser.id);
    const optionOneQnt = question.optionOne.votes.length;
    const optionTwoQnt = question.optionTwo.votes.length;

    return (
        <div className='card testimonial-card mb-3'>
            <div className='card-header font-weight-bold'>Asked by {user.name}</div>
            <div className='card-body d-flex'>
                <div className="border-right border-secondary pr-3">
                    <FaUserGraduate size='4em'/>
                </div>
                <div className='ml-3 text-left'>
                    <h3 className="card-title">Results:</h3>
                    <AnswerResultProgressCard
                        onwOption={optionOneQnt}
                        secondOption={optionTwoQnt}
                        toShowYourVote={ifOptionOneAnswered}
                        text={question.optionOne.text}
                    />
                    <AnswerResultProgressCard
                        onwOption={optionTwoQnt}
                        secondOption={optionOneQnt}
                        toShowYourVote={ifOptionTwoAnswered}
                        text={question.optionTwo.text}
                    />
                </div>
            </div>
        </div>
    );
};

function mapStateToProps({loggedInUser, users}) {
    return {
        loggedInUser,
        users,
    };
}

export default connect(mapStateToProps)(AnsweredQuestionCard);