import React from 'react';
import classes from './TextInput.module.css';

// Material UI
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const materialTheme = createMuiTheme({
    palette: {
        primary: {
            500: '#00BFBF'
        }
    }
});

export default function TextInput({label, onChange, onSubmit, disableSubmit}) {
    return <ThemeProvider theme={materialTheme}>
        <div className={classes.TextInput}>
        
            <Input 
            className={classes.Input} 
            label={label}
            onChange={onChange}
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
