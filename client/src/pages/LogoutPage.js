import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

import { logoutUser } from '../actions';

class LogoutPage extends Component {
    componentDidMount() {
        const { user, logoutUser } = this.props;
        if(user !== undefined) {
            logoutUser(() => setTimeout(() => this.props.history.push('/'), 2000));
        }
    }
    render() {
        return (
            <Panel bsStyle="success">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">You are logged out!</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <div>
                        <p>You will now be re-directed!</p>
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { user: auth.user };
};

export default connect(mapStateToProps, { logoutUser })(LogoutPage);