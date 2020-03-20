import React from 'react';
import classes from './NotFound.module.css';

// UI
import lost from '../../../images/lost.svg';

export default function NotFound(props) {
    return <div className={classes.ResultsSection}>
        <h2>Hmm, I can't find a video for <span className='accented-text'>{props.lastSearchedWord}</span></h2>
        <img src={lost} alt='lost'/>
    </div>
}
