import React from 'react';
import ThemeProvider from '../ThemeProvider/ThemeProvider';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner() {
    return <ThemeProvider>
        <CircularProgress/>
    </ThemeProvider>
}
