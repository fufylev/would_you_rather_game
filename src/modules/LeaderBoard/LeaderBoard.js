import React from 'react';
import { connect } from 'react-redux';
import LeaderBoardViewCard from './LeaderBoardViewCard';

const LeaderBoard = (props) => {
    const {users, loggedInUser} = props;

    if (!loggedInUser.id) {
        return <div className='container'><h3>You are unauthorized. Please Log In</h3></div>
    }

    const sortedUser = Object.keys(users)
        .map(key => {
            const user = users[key];
            return {
                avatarURL: user.avatarURL,
                answeredQuestionsQnt: Object.keys(user.answers).length,
                createdQuestions: user.questions.length,
                userName: user.name,
                score: (Object.keys(user.answers).length + user.questions.length),
            }
        })
        .sort((a, b) => b.score - a.score);

    return (
        <div className='container'>
            {sortedUser && sortedUser.map((user, index) =>
                <LeaderBoardViewCard
                    key={index}
                    index={index}
                    user={user}
                />)}
        </div>
    );
};

function mapStateToProps({users, loggedInUser}) {
    return {
        users,
        loggedInUser
    };
}

export default connect(mapStateToProps)(LeaderBoard);