import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaUserGraduate } from 'react-icons/fa';
import { MDBBtn } from 'mdbreact';
import { saveQuestionAnswer } from '../actions/shared';

class UnAnsweredQuestionCard extends Component {
    state = {
        selectedOption: 'optionOne'
    };

    handleOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value,
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        const {question, loggedInUser} = this.props;
        const answer = this.state.selectedOption;
        const qid = question.id;
        const authedUser = loggedInUser.id;
        this.props.dispatch(saveQuestionAnswer({authedUser, qid, answer}));
    };

    render() {
        const {question, users} = this.props;
        const user = Object.keys(users).map(key => users[key]).filter(user => user.id === question.author)[0];

        return (
            <div className='card testimonial-card mb-3'>
                <div className='card-header font-weight-bold'>{user.name} asks:</div>
                <div className='card-body d-flex'>
                    <div className='border-right border-secondary pr-3'>
                        <FaUserGraduate size='4em'/>
                    </div>
                    <div className='ml-3 text-left'>
                        <h5 className='card-title'>Would You Rather....</h5>
                        <form onSubmit={this.submitHandler}>
                            <div className='form-check'>
                                <label>
                                    <input
                                        type='radio'
                                        name='optionOne'
                                        value='optionOne'
                                        checked={this.state.selectedOption === 'optionOne'}
                                        onChange={this.handleOptionChange}
                                        className='form-check-input'
                                    />
                                    {question.optionOne.text}
                                </label>
                            </div>
                            <div className='form-check'>
                                <label>
                                    <input
                                        type='radio'
                                        name='optionTwo'
                                        value='optionTwo'
                                        checked={this.state.selectedOption === 'optionTwo'}
                                        onChange={this.handleOptionChange}
                                        className='form-check-input'
                                    />
                                    {question.optionTwo.text}
                                </label>
                            </div>
                            <MDBBtn
                                className='btn btn-default border border-success text-success px-5'
                                type='submit'>
                                SUBMIT
                            </MDBBtn>
                        </form>
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

export default connect(mapStateToProps)(UnAnsweredQuestionCard);