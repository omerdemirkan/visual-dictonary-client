import React, {useState} from 'react';
import classes from './LogIn.module.css';

// UI
import TextInput from '../../components/UI/TextInput/TextInput';

export default function LogIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    function usernameChangedHandler(text) {
        setUsername(text)
    }

    function passwordChangedHandler(text) {
        setPassword(text)
    }

    return <div className={classes.LogIn}>
        <h1 className='page-header'>Log In</h1>
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