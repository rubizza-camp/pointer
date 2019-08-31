import axios from 'axios'
import Cookies from 'js-cookie'
import { axiosDeleteRequest } from './axios_helper'

export default function setAuthorizationToken() {
  if (Cookies.get('Authorization')) {
    const token = Cookies.get('Authorization')
    axios.defaults.headers.common.Authorization = token
  } else {
    delete axios.defaults.headers.common.Authorization
    axiosDeleteRequest('/users/sign_out', '', '')
  }
}
