import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system'
import { Route } from 'react-router-dom';
import LeftView from './LeftView';
import Login from './Login';
import Register from './Register';

class AuthForm extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={8}>
                            {/* <LeftView /> */}
                            <Route exact path="/" component={LeftView} />
                            <Route exact path="/register" component={LeftView} />
                        </Col>
                        <Col sm={4}>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/register" component={Register} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AuthForm;