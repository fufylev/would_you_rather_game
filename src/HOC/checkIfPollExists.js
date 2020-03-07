import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";

export default function (ComposedComponent) {
    class CheckIfPollExists extends React.Component {
        render() {
            const { questions } = this.props;
            const {id} = this.props.match.params;

            return (
                <>
                    { questions[id] !== undefined ? <ComposedComponent {...this.props} /> : <PageNotFound/> }
                </>
            );
        }
    }

    const mapStateToProps = ({questions}) => {
        return {
            questions
        };
    };

    return withRouter(connect(mapStateToProps)(CheckIfPollExists));
}