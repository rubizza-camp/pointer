import axios from 'axios'
import Cookies from 'js-cookie'
import getToken from './csrf_helper'

const headers = () => {
  let token = ''
  if (Cookies.get('Authorization')) {
    token = `${Cookies.get('Authorization')}`
  }
  return token
}


const makeRequest = (method, url, data, callback) => (
  axios({
    url: `${url}.json`,
    method,
    headers: { 'X-CSRF-Token': getToken(), 'Authorization': headers() },
    data,
  }).then(response => callback(response))
)

export const axiosPostRequest = (url, data, callback) => {
  makeRequest('POST', url, data, callback)
}

export const axiosGetRequest = (url, data, callback) => {
  makeRequest('GET', url, data, callback)
}

export const axiosPatchRequest = (url, data, callback) => {
  makeRequest('PATCH', url, data, callback)
}

export const axiosDeleteRequest = (url, data, callback) => {
  makeRequest('DELETE', url, data, callback)
}
