import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JobService from '../api/JobService';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ToastComponent from './ToastComponent'
// import Job from './Job';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allJobs: []
        }
    }

    componentDidMount() {
        console.log('component did mount');

        this.refresh();
    }

    refresh() {
        console.log('refresh');
        JobService.getAllJobs().then(result => {
            console.log(result.data);
            this.setState({
                allJobs: result.data
            })
        });
        console.log('welcome method');
    }
    render() {
        console.log('render');
        return (
            <div>
                <ToastComponent />
                <div className="text-center p-3">
                    <Link to="/jobDetails"> <button className="btn btn-danger">Add New Job</button> </Link>
                </div>
                
                <div className="container">
                    {
                        this.state.allJobs.map((job) => {
                            return <div key={job.id} className="card m-4 " style={{ width: 300, display: 'inline-block' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{job.position}</h5>
                                    <p className="card-text">Job Id : {job.jobId}</p>
                                    <a href="#" className="btn btn-primary">Apply</a>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Welcome;