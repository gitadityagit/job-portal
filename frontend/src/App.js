import React, { Component } from 'react';
import AuthForm from './components/AuthForm';
import ServiceApi from './api/ServiceApi';
import { Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Job from './components/Job';
import ToastComponent from './components/ToastComponent'

class App extends Component {
  handleClick=()=>{
    ServiceApi.home();
  }
  render() {
    return (
      <div>
          {/* <button onClick={this.handleClick}>click</button> */}
          {/* <ToastComponent /> */}
          <AuthForm />
          <Route exact path="/welcome" component={Welcome}></Route>
          <Route exact path="/jobDetails" component={Job}></Route>
      </div>
    );
  }
}

export default App;