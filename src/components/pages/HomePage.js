import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCardSimpleView from '../../modules/Poll/QuestionCardSimpleView';
import { checkIfAnswered } from '../../utils/helper';
import { currentPageHandler } from '../../actions/currentPage';

class HomePage extends Component {
    state = {
        activeTab: 'unanswered',
    };

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    handleViewPollBtn = () => {
        // the current page to be deactivated
        this.props.dispatch(currentPageHandler(''));
    };

    render() {
        const {loggedInUser, questions, users} = this.props;
        const {activeTab} = this.state;

        const {unAnsweredQuestions, answeredQuestions} = checkIfAnswered(questions, loggedInUser);
        const pollsToShow = activeTab === 'unanswered' ? unAnsweredQuestions : answeredQuestions;

        return (
            <div className='container'>
                <div className='card text-center questions-container'>
                    <div className='d-flex justify-content-between'>
                        <div className='card tab-custom' onClick={() => this.toggle('unanswered')}>
                            <div className={activeTab === 'unanswered'
                                ? 'font-weight-bold text-success card-header tab-custom-content'
                                : 'card-header tab-custom-content'}>
                                Unanswered questions
                            </div>
                        </div>
                        <div className='card tab-custom' onClick={() => this.toggle('answered')}>
                            <div className={activeTab === 'answered'
                                ? 'font-weight-bold text-success card-header tab-custom-content'
                                : 'card-header tab-custom-content'}>
                                Answered <br/>questions
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        {pollsToShow && pollsToShow.length === 0 && this.state.activeTab === 'unanswered' && (
                            <h5>No unanswered questions remain.</h5>
                        )}
                        {pollsToShow && pollsToShow.length === 0 && this.state.activeTab === 'answered' && (
                            <h5>You haven't answer any questions yet. Go to "Unanswered questions" tab</h5>
                        )}
                        {pollsToShow && pollsToShow.map(question => (
                            <QuestionCardSimpleView
                                key={question.id}
                                question={question}
                                onBtnPressed={this.handleViewPollBtn}
                                user={Object.keys(users).map(key => users[key]).filter(user => user.id === question.author)[0]}
                            />
                        ))}
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