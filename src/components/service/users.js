import axios from'axios';

const base_url = 'http://localhost:8000/signin'

class Users{
    signin(){
        return axios.get(base_url)
    }
}
export default new Users();