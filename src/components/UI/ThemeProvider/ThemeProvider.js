import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const materialTheme = createMuiTheme({
    palette: {
        primary: {
            500: '#00BFBF'
        }
    }
});

export default (props) => {
    return <ThemeProvider theme={materialTheme}>
        {props.children}
    </ThemeProvider>
}
