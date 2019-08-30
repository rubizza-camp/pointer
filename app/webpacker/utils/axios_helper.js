import axios from 'axios'
import getToken from './csrf_helper'

const makeRequest = (method, url, data, callback) => (
  axios({
    url,
    method,
    headers: { 'X-CSRF-Token': getToken() },
    data,
  }).then(response => callback(response))
)

export const axiosPostRequest = (url, data, callback) => {
  makeRequest('POST', url, data, callback)
}

export const axiosGetRequest = (url, data, callback) => {
  makeRequest('GET', url, data, callback)
}

export const axiosDeleteRequest = (url, data, callback) => {
  makeRequest('DELETE', url, data, callback)
}
