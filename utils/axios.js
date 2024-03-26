import axios from 'axios';
import {store} from '../index';
import { SERVER_URL } from "../config";

const getJwt = () => {
    const { user } = store.getState().user_reducer;

    if (user && user.token) {
        return 'Bearer ' + user.token;
    }
    return '';
};



const getOptions = (isFile) => {

    let options = {
        withCredentials:true,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "getJwt()",
    
        }

    };

    if (isFile) {
        options.responseType = 'blob';
    }

    return options;

};

const prepareUrl = (api) => `${SERVER_URL}${api}`;

axios.interceptors.response.use((response) => {
    if (response && !response.status &&response.message == "AuthenticationFailure") {
        window.location.replace(`${SERVER_URL}/api/auth/openid`);
    }
    return response;
}, (error) => {
    if (error && !error.status &&  error.message == "AuthenticationFailure") {
        window.location.replace(`${SERVER_URL}/api/auth/openid`);
    }
    return Promise.reject(error.message);
});

const wrapper = {
    get: (api, isFile = false) => axios.get(prepareUrl(api), getOptions(isFile)),
    post: (api, formData = {}, isFile = false) => axios.post(prepareUrl(api), formData, getOptions(isFile)),
    put: (api, formData = {}) => axios.put(prepareUrl(api), formData, getOptions(null)),
    patch: (api, formData = {}, isFile = false) => axios.patch(prepareUrl(api), formData, getOptions(isFile)),
    delete: (api) => axios.delete(prepareUrl(api), getOptions(null)),
};

export default wrapper;