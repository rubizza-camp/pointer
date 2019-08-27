import axios from 'axios'
import getToken from './csrf_helper'
import Cookies from 'js-cookie';

const axiosPostRequest = (url, data, callback) => {
  if(Cookies.get('Authorization'))
    var token = {'Authorization': Cookies.get('Authorization')}
  else
    { var token = '' }
  axios({
    url,
    method: 'GET',
    headers: { 'X-CSRF-Token': getToken(), token },
    data,
  }).then(response => callback(response))
}

export default axiosPostRequest
