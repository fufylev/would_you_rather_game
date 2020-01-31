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
        <div className='card mb-3 leader-board-card'>
            <div className='card-header p-1'>
                <div className='d-flex justify-content-between align-items-center '>
                    <div>
                        {user.avatarURL && user.avatarURL.length !== 0 &&
                        <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar'/>}
                        {(!user.avatarURL || user.avatarURL.length === 0) &&
                        <FaUserGraduate size='4em' className='mx-3'/>}
                    </div>
                    <h5>{user.userName}</h5>
                    <div className='mr-2'>
                        {index <= 2 && <FaAward color={iconColor(index)} size='3em'/>}
                        {index > 2 && <FaReact color={iconColor(index)} size='3em'/>}
                    </div>
                </div>
            </div>
            <div className='card-body p-2 font-weight-bold'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='text-secondary pr-2'>
                        <div className='mb-3 pb-2'>Answered question</div>
                        <div>Created question</div>
                    </div>
                    <div className='text-success'>
                        <div className='mb-3 pb-2'>{user.answeredQuestionsQnt} </div>
                        <div>{user.createdQuestions}</div>
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