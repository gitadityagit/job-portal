import React, { Component } from 'react';
import Vector1 from '../images/vector1.jpg'

class LeftView extends Component {
    render() {
        return (
            <div>
                <img className="img-fluid" src={Vector1} alt="" width="100%"></img>
                {/* <img className="mt-4" src={Vector1} alt="" width="650"></img> */}
            </div>
        );
    }
}

export default LeftView;