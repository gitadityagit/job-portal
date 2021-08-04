import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ToastComponent extends Component {
    // notify = () => toast("Wow so easy!");
    componentDidMount(){
        toast("You have successfully logged in!")
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.notify}>Notify!</button> */}
                <ToastContainer />
            </div>
        );
    }
}

export default ToastComponent;