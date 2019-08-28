import axios from 'axios';
import Cookies from 'js-cookie';

export default function setAuthorizationToken() {
    if(Cookies.get('Authorization')) {
        var token = Cookies.get('Authorization')
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}