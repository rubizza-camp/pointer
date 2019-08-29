import axios from 'axios'
import getToken from './csrf_helper'

const axiosPostRequest = (url, data, callback) => {
  axios({
    url,
    method: 'POST',
    headers: { 'X-CSRF-Token': getToken() },
    data,
  }).then(response => callback(response))
}

export default axiosPostRequest
