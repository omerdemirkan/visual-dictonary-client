import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-424n3l7rpa-uw.a.run.app/'
    // baseURL: 'https:localhost:5000'
});

export default instance;
