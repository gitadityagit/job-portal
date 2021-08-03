import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom';
import ServiceApi from '../api/ServiceApi';
// import 'bootstrap/dist/css/bootstrap.min.css'

class Register extends Component {
    initialValues = {
        email: '',
        password: ''
    }
    onSubmit = (values) => {
        console.log(values);
        ServiceApi.register(values);
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <p className="text-center text-success">Register Page</p>
                <Formik
                    initialValues={this.initialValues}
                    onSubmit={this.onSubmit}
                >

                    <Form >
                        <div className='form-control mb-1'>
                            <label htmlFor='name'>Name</label>
                            <Field className="form-control" type='text' id='name' name='name'></Field>
                        </div>
                        <div className='form-control mb-1'>
                            <label htmlFor='email' className="form-label">Email address</label>
                            <Field className="form-control" type='text' id='email' name='email'></Field>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className='form-control mb-1'>
                            <label htmlFor='password'>Password</label>
                            <Field className="form-control" type='password' id='password' name='password'></Field>
                        </div>
                        <div className='form-control mb-2'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <Field className="form-control" type='password' id='confirmPassword' name='confirmPassword'></Field>
                        </div>

                        <button className="btn btn-primary btn-sm mb-3" type='submit'>Register</button>

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
            </div>
        );
    }
}

export default Register;