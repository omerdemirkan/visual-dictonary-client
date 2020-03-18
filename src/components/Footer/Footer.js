import React from 'react';
import classes from './Footer.module.css';

export default function Footer() {
    return <div className={classes.Footer}>
        <h3>Konsappt Inc. {new Date().getFullYear()}</h3>
    </div>
}
