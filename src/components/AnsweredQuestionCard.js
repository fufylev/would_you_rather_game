import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaUserGraduate } from 'react-icons/fa';

class AnsweredQuestionCard extends Component {
    render() {
        const {question, users} = this.props;
        const user = Object.keys(users).map(key => users[key]).filter(user => user.id === question.author)[0];

        return (
            <div className='card testimonial-card mb-3'>
                <div className='card-header font-weight-bold'>{user.name} asks:</div>
                <div className='card-body d-flex'>
                    <div className="border-right border-secondary pr-3">
                        <FaUserGraduate size='4em'/>
                    </div>
                    <div className='ml-3 text-left'>
                        <h4 className="card-title">Results:</h4>
                        <div>
                            <p>{question.optionOne.text}</p>
                        </div>
                        <div>
                            <p>{question.optionTwo.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({loggedInUser, users}) {
    return {
        loggedInUser,
        users,
    };
}

export default connect(mapStateToProps)(AnsweredQuestionCard);