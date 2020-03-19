import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://35.192.176.143:3000'
});

export default instance;