import React from 'react';
import classes from './TextInput.module.css';

// Material UI
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import ThemeProvider from '../ThemeProvider/ThemeProvider';

export default function TextInput({label, value, onChange, onSubmit, disableSubmit, onKeyPress, autoFocus, hidden}) {
    return <ThemeProvider>
        <div className={classes.TextInput}>
            <Input 
            className={classes.Input} 
            value={value}
            onChange={onChange ? e => onChange(e.target.value) : null}
            onKeyPress={onKeyPress ? e => onKeyPress(e.key) : null}
            autoFocus={autoFocus}
            type={hidden ? 'password' : 'text'}
            />
            <h3>{label}</h3>
            {onSubmit ? 
                <button className={classes.SearchButton} onClick={onSubmit} disabled={disableSubmit}>
                    <SearchIcon/>
                </button>
            :
                null
            }
        </div>
    </ThemeProvider>
}
