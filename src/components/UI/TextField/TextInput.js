import React from 'react';
import classes from './TextInput.module.css';

// Material UI
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const materialTheme = createMuiTheme({
    palette: {
        primary: {
            500: '#00BFBF'
        }
    }
});

export default function TextInput({label, onChange}) {
    return <div>
        <ThemeProvider theme={materialTheme}>
            <TextField 
            className={classes.Input} 
            label={label}
            style={{margin: '15px 0'}}
            onChange={onChange}
            />
        </ThemeProvider>
    </div>
}
