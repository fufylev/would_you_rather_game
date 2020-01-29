import React, { Component } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { MDBLink} from "mdbreact";

class PollSimpleView extends Component {
    render() {
        const {id, optionOne} = this.props.question;
        const {user} = this.props;

        return (
            <div className='card testimonial-card mb-3'>
                <div className='card-header font-weight-bold'>{user.name} asks:</div>
                <div className='card-body d-flex'>
                    <div className="border-right border-secondary pr-3">
                        <FaUserGraduate size='4em'/>
                    </div>
                    <div className='ml-3 text-left'>
                        <h5 className="card-title">Would You Rather:</h5>
                        <div className="row mb-2">
                            <div className="col-7 text-truncate">
                                {optionOne.text}
                            </div>
                        </div>
                        <MDBLink to={`/poll/${id}`}>
                            <button className='btn btn-default border border-success text-success'>View Poll</button>
                        </MDBLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollSimpleView;