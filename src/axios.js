import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://konsappt-rest-api-424n3l7rpa-uc.a.run.app'
    // baseURL: 'https:localhost:5000'
});

export default instance;
