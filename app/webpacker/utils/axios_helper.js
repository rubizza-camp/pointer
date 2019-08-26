import axios from 'axios'
import getToken from './csrf_helper'

export const axiosPostRequest = (url, data, callback) => {
  axios({
    url,
    method: 'POST',
    headers: { 'X-CSRF-Token': getToken() },
    data,
  }).then(response => callback(response))
}
export const axiosPatchRequest = (url, data, callback) => {
  axios({
    url,
    method: 'PATCH',
    headers: { 'X-CSRF-Token': getToken() },
    data,
  }).then(response => callback(response))
}
export const axiosGetRequest = (url, data, callback) => {
  axios({
    url,
    method: 'GET',
    headers: { 'X-CSRF-Token': getToken() },
    data,
  }).then(response => callback(response))
}
