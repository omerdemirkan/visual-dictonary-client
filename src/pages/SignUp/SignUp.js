import React, {useState} from 'react';
import classes from './SignUp.module.css';

// UI
import TextInput from '../../components/UI/TextInput/TextInput';

export default function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    function usernameChangedHandler(text) {
        setUsername(text)
    }

    function passwordChangedHandler(text) {
        setPassword(text)
    }

    function signUpButtonClickesHandler() {

    }

    return <div className={classes.SignUp}>
        <h1 className='page-header'>Sign Up</h1>
        <div className='form-box'>
            <TextInput
            label='Username'
            onChange={usernameChangedHandler}
            value={username}
            autoFocus
            />

            <TextInput
            label='Password'
            onChange={passwordChangedHandler}
            value={password}
            />

            <button 
            className='primary-button large full-width'
            >
                Sign Up
            </button>
        </div>
    </div>
}