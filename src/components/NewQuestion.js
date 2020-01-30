import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from '../actions/shared';

class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOneText: '',
            optionTwoText: '',
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState(() => ({
            [name]: value,
        }))
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {optionOneText, optionTwoText} = this.state;
        const author = this.props.loggedInUser.id;
        this.props.dispatch(saveQuestion({ optionOneText, optionTwoText, author }));
        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
        }))
    };

    render() {
        const {optionOneText, optionTwoText} = this.state;

        return (
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'>Create New Question</h2>
                    </div>
                    <div className='card-body'>
                        <form className="text-left p-3" onSubmit={this.handleSubmit}>
                            <h5 className="text-secondary mb-3">Complete the questions:</h5>
                            <h3 className="mb-3">Would you rather ...</h3>
                            <input type="text"
                                   name="optionOneText"
                                   value={optionOneText}
                                   onChange={this.handleChange}
                                   className="form-control mb-4"
                                   placeholder="Enter Option One Text Here"/>
                            <div className='text-center my-3'>----------- OR -----------</div>
                            <input type="text"
                                   name="optionTwoText"
                                   value={optionTwoText}
                                   onChange={this.handleChange}
                                   className="form-control mb-5"
                                   placeholder="Enter Option Two Text Here"/>
                            <button className="btn btn-info btn-block" type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps({loggedInUser}) {
    return {
        loggedInUser,
    };
}

export default connect(mapStateToProps)(NewQuestion);