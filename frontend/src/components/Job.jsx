import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik'
import JobService from '../api/JobService';

class Job extends Component {
    initialValues = {
        jobId: '',
        position: ''
    }
    onSubmit = (values) => {
        console.log(values);
        JobService.addJob(values);
        
        this.props.history.push('/welcome')
        console.log('job added successfully!');
        
    }
    render() {
        return (
            <div className="container">
                <p className="text-center text-success">Job Details</p>
                <Formik
                    initialValues={this.initialValues}
                    onSubmit={this.onSubmit}
                >

                    <Form >
                        <div className='form-control mb-1'>
                            <label htmlFor='jobId'>Job Id</label>
                            <Field className="form-control" type='text' id='jobId' name='jobId'></Field>
                        </div>
                        <div className='form-control mb-1'>
                            <label htmlFor='position' className="form-label">Job Position</label>
                            <Field className="form-control" type='text' id='position' name='position'></Field>
                        </div>

                        <button className="btn btn-primary btn-sm mb-3" type='submit'>Add</button>

                    </Form>


                </Formik>
            </div>
        );
    }
}

export default Job;