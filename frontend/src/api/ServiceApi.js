
import axios from 'axios'

class ServiceApi{
    home=()=>{
        // console.log('button clicked');
        axios.get('http://localhost:8888/users').then(res=>{
            console.log('users');
        })     
    }
    register=(user)=>{
        // console.log('button clicked');
        axios.post('http://localhost:8888/register',user).then(res=>{
            console.log('register response :'+res);
        })
        console.log("user successfully registered");
    }
    login=(user)=>{
        // console.log('button clicked');
        return axios.post('http://localhost:8888/login',user)
    }
}

export default new ServiceApi();