import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
import ServiceApi from '../api/ServiceApi';

class GoogleOAuth extends Component {
    responseGoogle=(response)=>{
        // console.log(response);
        if(response.error){
            console.log('account does not exist');
        }else{
            console.log(response.profileObj);
            const obj={
                name:response.profileObj.name,
                email:response.profileObj.email,
                password:response.profileObj.googleId,
                confirmPassword:response.profileObj.googleId
            }
            ServiceApi.register(obj);
            console.log('before url');
            // this.props.history.push(`/welcome`);smz ni aara
            console.log('after url');
        }
    }
    render() {
        return (
            <div>
                <GoogleLogin 
                    clientId="61355190260-n1oqsv5uv9og0d1ims85jpco4nd65g0u.apps.googleusercontent.com"
                    // button="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default GoogleOAuth;