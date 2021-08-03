
import axios from 'axios'

class JobService{
    addJob=(job)=>{
        // console.log('button clicked');
        axios.post('http://localhost:8888/addJob',job);
    }
    getAllJobs=()=>{
        return axios.get('http://localhost:8888/jobs');
    }
}

export default new JobService();