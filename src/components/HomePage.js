import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FaUserGraduate } from 'react-icons/fa';

class HomePage extends Component {
    state = {
        activeTab: 'unanswered'
    };

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            }, () => console.log(this.state.activeTab));
        }
    };

    showCard = (id) => {

    };

    render() {
        const {loggedInUser, questions, users} = this.props;
        const {activeTab} = this.state;
        /*if (!loggedInUser) {
            return <div className='container'><h3>You aren't logged in. Please Log In</h3></div>
        }*/
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

        const toShow = activeTab === 'unanswered' ? unAnsweredQuestions : answeredQuestions;
        console.log(toShow);

        return (
            <div className='container'>
                <div className='card text-center questions-container'>
                    <div className='d-flex justify-content-between'>
                        <div className='card tab-custom' onClick={() => this.toggle('unanswered')}>
                            <div className={activeTab === 'unanswered'
                                ? 'font-weight-bold text-success card-header tab-custom-content'
                                : 'card-header tab-custom-content'}>
                                Unanswered Questions
                            </div>
                        </div>
                        <div className='card tab-custom' onClick={() => this.toggle('answered')}>
                            <div className={activeTab === 'answered'
                                ? 'font-weight-bold text-success card-header tab-custom-content'
                                : 'card-header tab-custom-content'}>
                                Answered Questions
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='card testimonial-card'>
                            <div className='card-header'>User asks:</div>
                            <div className='card-body d-flex'>
                                <div className="border-right border-secondary pr-3">
                                    <FaUserGraduate size='4em'/>
                                </div>
                                <div className='ml-3 text-left'>
                                    <h5 className="card-title">Would You Rather:</h5>
                                    <p>text</p>
                                    <button
                                        className='btn btn-default border border-success text-success'
                                        onClick={() => this.showCard('')}
                                    >
                                        View Poll
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({loggedInUser, questions, users}) {
    return {
        loggedInUser,
        questions,
        users
    };
}

export default connect(mapStateToProps)(HomePage);