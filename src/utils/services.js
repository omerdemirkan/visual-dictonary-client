import axios from '../axios';


export async function signUp(username, password) {

    const res = await axios.post('/auth/sign-up', {
        username, 
        password
    })

    console.log(res.data);
    const token = res.data.token || null;

    if (token) {
        localStorage.setItem('accessToken', token);
    }

    return token;
}

export async function logIn(username, password) {

    const res = await axios.post('/auth/log-in', {
        username, 
        password
    })
    
    console.log(res.data);
    const token = res.data.token || null;

    if (token) {
        localStorage.setItem('accessToken', token);
    }

    return token;
}