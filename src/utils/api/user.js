//for API calls
import axios from 'axios';
const API_URL = "http://localhost:8080";

/*
req: id, passwd
res: id: [user의 id값], name: [user 성명]
*/

export const login = async ( uid, password ) => {
  return axios
  .post(API_URL+'/login', { uid: uid, password: password })
  .then((response) => {
    console.log(response.data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    return response.data;
  });
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

/*
req: name, id, passwd
res: id: [user의 id값], name: [user 성명]
*/
export const register = async ({ name, id, passwd }) => {
  return axios
  .post(API_URL+'/register', { name: name, id: id, passwd: passwd })
  .then((response) => {
    console.log(response);
    return response;
  });
}


const UserService = {
  register,
  login,
  getCurrentUser,
}

export default UserService;
