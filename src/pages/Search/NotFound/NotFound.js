import React from 'react';
import classes from './NotFound.module.css';

// Images
import lost from '../../../images/lost.svg';

export default function NotFound({lastSearchedWord}) {
    return <div className={classes.NotFound}>
        <h2>Hmm, I can't find a video for <span className='accented-text'>{lastSearchedWord}</span></h2>
        <img src={lost} alt='lost'/>
    </div>
}
