import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';

const LeaderBoardViewCard = (props) => {
    const {user, index} = props;

    const iconColor = (i) => {
        switch (i) {
            case 0:
                return 'gold';
            case 1:
                return 'green';
            case 2:
                return '#ff8a65';
            default:
                return '#cccccc';
        }
    };

    return (
        <div className='card mb-3'>
            <div className='card-header'>
                {index <= 2 && <FaAward color={iconColor(index)} size='2em' className='mr-5' />}
                {index > 2 && <FaReact color={iconColor(index)} size='2em' className='mr-5' />}
                <strong>{user.userName}</strong>
            </div>
            <div className='card-body p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='border-right border-secondary mr-2'>
                        <FaUserGraduate size='5em' className='mr-2'/>
                    </div>
                    <div className='text-right text-secondary border-right border-secondary pr-2'>
                        <div className='border-bottom border-secondary mb-3 pb-2'>
                            <span>Answered question</span>
                            <span className='ml-3'>{user.answeredQuestionsQnt}</span>
                        </div>
                        <div >
                            <span>Created question</span>
                            <span className='ml-3'>{user.createdQuestions}</span>
                        </div>
                    </div>
                    <div className='card'>
                        <strong className='card-header'>Score</strong>
                        <div className='card-body p-2 d-flex justify-content-center align-items-center'>
                            <div className='bg-success py-2 px-3 rounded-pill'>
                                <span className='text-white font-weight-bold '>{user.score}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoardViewCard;