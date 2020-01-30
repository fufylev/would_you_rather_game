import React from 'react';

const AnswerResultProgressCard = (props) => {
    const {onwOption, secondOption, toShowYourVote, text} = props;
    const onwOptionRate = Math.floor(onwOption / (onwOption + secondOption) * 100);

    return (
        <div
            className={onwOption > secondOption
                ? 'answer-box-win'
                : 'answer-box-default'}>
            <strong>Would you rather {text}</strong>
            <div className='my-2 bg-white border border-warning rounded text-right'>
                <div style={{
                    width: `${onwOptionRate < 12 ? 12 : onwOptionRate}%`,
                    backgroundColor: onwOptionRate < 12 ? 'white' : 'green',
                    color: onwOptionRate < 12 ? 'black' : 'white',
                    paddingRight: '3px'
                }}>
                    {onwOptionRate}%
                </div>
            </div>
            <div className='text-center'>{onwOption} out of {onwOption + secondOption} votes</div>
            {toShowYourVote && (
                <small className='vote-pill font-weight-bold'>Your <br/> vote</small>
            )}
        </div>
    );
};

export default AnswerResultProgressCard;