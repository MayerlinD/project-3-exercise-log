import * as usersAPI from './users-api'
import {Buffer} from 'buffer';
import axios from 'axios'
const BASE_URL = '/api/users'


export async function signUp (userData) {
  // Delete the network request code to the
  // users-api.js module which will ultimately
  // return the JWT
  console.log('email is', userData.email)
  let token = ''
  axios.post(BASE_URL, userData)
  .then(function (response) {
    console.log(`Sign up was successful`);
    console.log()
    console.log(response.data)
    token = response.data
    console.log('Token was successfully created in signUP function @users-service.js ', token)
    // Persist the token to localStorage
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', userData.email)
    return getUser()
  })
  .catch(function (error) {
    console.log(`There was an error in signup axios call ${error}`);
  });
}

export async function login (credentials) {
  let token = ''
  axios.post(`${BASE_URL}/login`, credentials)
  .then(function (response) {
    console.log(`Login was successful`);
    console.log()
    console.log(response.data)
    token = response.data
    console.log('Token was successfully created in login function @users-service.js ', token)
    // Persist the token to localStorage
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', credentials.email)
    //window.localStorage.setItem('user', userData.email)
    return getUser()
  })
  .catch(function (error) {
    console.log(`There was an error in login axios call ${error}`);
  });
  // Persist the token to window.localStorage
  window.localStorage.setItem('token', token)
  return getUser()
}

export function getToken () {
  const token = window.localStorage.getItem('token')
  // getItem will return null if no key
  if (!token) return null
  const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    window.localStorage.removeItem('token')
    return null
  }
  return token
}

export function getUser () {
  const token = getToken()
  console.log('Token received in getUser()', token)
     if (token) {
       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
       return token
   }
   else {
       delete axios.defaults.headers.common["Authorization"];
  }
}

export function logOut () {
  window.localStorage.removeItem('token')
  window.location.href = "/";
}