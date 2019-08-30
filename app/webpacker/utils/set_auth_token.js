import axios from 'axios'
import Cookies from 'js-cookie'
import getToken from './csrf_helper'

export default function setAuthorizationToken() {
  if (Cookies.get('Authorization')) {
    const token = Cookies.get('Authorization')
    axios.defaults.headers.common.Authorization = token
  } else {
    delete axios.defaults.headers.common.Authorization
    axios({
      method: 'DELETE',
      url: '/users/sign_out.json',
      headers: { 'X-CSRF-Token': getToken() },
    })
  }
}
