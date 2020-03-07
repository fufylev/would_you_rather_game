import React from 'react';
import { connect } from 'react-redux';
import Auth from '../modules/Authorization/Auth.js';
import { withRouter } from "react-router-dom";

export default function (ComposedComponent) {
    class Authenticate extends React.Component {
        componentDidMount() {
            this._checkAndRedirect();
        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        _checkAndRedirect() {
            const { loggedInUser } = this.props;

            if (!loggedInUser.id) {
                this.props.history.push(`/auth`);
            }
        }

        render() {
            return (
                <>
                    { this.props.loggedInUser.id ? <ComposedComponent {...this.props} /> : <Auth/> }
                </>
            );
        }
    }

    const mapStateToProps = ({loggedInUser}) => {
        return {
            loggedInUser
        };
    };

    return withRouter(connect(
        mapStateToProps
    )(Authenticate));
}