import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom';
import ServiceApi from '../api/ServiceApi';
import GoogleOAuth from './GoogleOAuth';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true
        }
    }
    initialValues = {
        email: '',
        password: ''
    }
    onSubmit = (values) => {
        // console.log(values);
        ServiceApi.login(values).then(res => {
            // console.log(res);
            if (res.data.id !== 0) {
                console.log(res);
                this.props.history.push(`/welcome`)
            } else {
                this.setState({
                    loggedIn: false
                })
            }

        })
    }
    render() {
        return (
            <div>
                {!this.state.loggedIn && <p className="text-danger text-center">Invalid Credentials!</p>}
                <p className="text-center text-success">Login Page</p>
                <Formik
                    initialValues={this.initialValues}
                    onSubmit={this.onSubmit}
                >

                    <Form >
                        <div className='form-control mb-1'>
                            <label htmlFor='email' className="form-label">Email address</label>
                            <Field className="form-control" type='text' id='email' name='email'></Field>
                        </div>
                        <div className='form-control mb-1'>
                            <label htmlFor='password'>Password</label>
                            <Field className="form-control" type='password' id='password' name='password'></Field>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary btn-sm mb-3" type='submit'>Login</button>
                        </div>
                    </Form>

                </Formik>
                <div className="d-flex justify-content-between">
                    <button className="btn-sm btn btn-warning">
                        <Link className="text-white text-decoration-none" to="/">Sign in</Link><br></br>
                    </button>
                    <button className="btn-sm btn btn-success">
                        <Link className="text-white text-decoration-none" to="/register">Sign up</Link><br></br>
                    </button>
                </div>
                <div className="text-center mt-3">
                    <GoogleOAuth />
                </div>
            </div>
        );
    }
}

export default Login;