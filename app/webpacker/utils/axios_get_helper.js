import axios from 'axios'
import getToken from './csrf_helper'

const axiosGetRequest = (url, data, callback) => {
  axios({
    url,
    method: 'GET',
    headers: { 'X-CSRF-Token': getToken() },
    data,
  }).then(response => callback(response))
}
export default axiosGetRequest
