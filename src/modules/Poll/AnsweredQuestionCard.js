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
            <div className='card-header font-weight-bold text-left p-1'>
                {user.avatarURL && user.avatarURL.length !==0 &&
                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar'/>}
                {(!user.avatarURL || user.avatarURL.length ===0) &&
                <FaUserGraduate size='4em' className='mx-3'/>}
                <span>Asked by {user.name}</span>
            </div>
            <div className='card-body d-flex'>
                <div className='ml-2 text-left'>
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