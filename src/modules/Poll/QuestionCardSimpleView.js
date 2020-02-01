import React, { Component } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { MDBLink} from "mdbreact";

class QuestionCardSimpleView extends Component {
    render() {
        const {id, optionOne} = this.props.question;
        const {user} = this.props;

        return (
            <div className='card testimonial-card mb-3'>
                <div className='card-header font-weight-bold text-left p-1'>
                    {user.avatarURL && user.avatarURL.length !==0 &&
                    <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar'/>}
                    {(!user.avatarURL || user.avatarURL.length ===0) &&
                    <FaUserGraduate size='4em' className='mx-3'/>}
                    <span>{user.name} asks:</span>
                </div>
                <div className='card-body d-flex'>
                    <div className='ml-3 text-left'>
                        <h5 className="card-title">Would You Rather:</h5>
                        <div className="row mb-2">
                            <div className="col-8 text-truncate">
                                {optionOne.text}
                            </div>
                        </div>
                        <MDBLink to={`/question/${id}`}>
                            <button
                                className='btn btn-default border border-success text-success'
                                onClick={() => this.props.onBtnPressed()}
                            >
                                View Poll
                            </button>
                        </MDBLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionCardSimpleView;