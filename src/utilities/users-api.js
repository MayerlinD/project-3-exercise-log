import sendRequest from './send-request'
import axios from 'axios'

const BASE_URL = '/api/users'

export async function signUP(userData) {
  // return sendRequest(BASE_URL, 'POST', userData)
  console.log("User data is")
  console.log(userData)
  axios.post(BASE_URL, userData)
  .then(function (response) {
    console.log(`Sign up was successful`);
    console.log(response.data)
    return response.data
  })
  .catch(function (error) {
    console.log(`There was an error in signup axios call ${error}`);
  });
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}