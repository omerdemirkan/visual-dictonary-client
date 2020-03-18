import React from 'react';
import classes from './TextInput.module.css';

// Material UI
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import ThemeProvider from '../ThemeProvider/ThemeProvider';

export default function TextInput({label, value, onChange, onSubmit, disableSubmit}) {
    return <ThemeProvider>
        <div className={classes.TextInput}>
            <Input 
            className={classes.Input} 
            label={label}
            value={value}
            onChange={e => onChange(e.target.value)}
            autoFocus={true}
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
