import axios from 'axios'
import getToken from './csrf_helper'

const MakeRequest = (method, url, data, callback) => (
  axios({
    url,
    method,
    headers: { 'X-CSRF-Token': getToken() },
    data,
  }).then(response => callback(response))
)

export const axiosPostRequest = (url, data, callback) => {
  MakeRequest('POST', url, data, callback)
}

export const axiosGetRequest = (url, data, callback) => {
  MakeRequest('GET', url, data, callback)
}

export const axiosDeleteRequest = (url, data, callback) => {
  MakeRequest('DELETE', url, data, callback)
}
