import React, { useState } from 'react';
import classes from './Contribute.module.css';

// UI
import TextInput from '../../components/UI/TextInput/TextInput'

export default function Contribute() {

    const [youtubeLink, setYoutubeLink] = useState(null);

    return <div className={classes.Contribute}>
        <h1 className='page-header'>Contribute</h1>

        <div className='form-box'>
            <p>Have a video that you think would be helpful to other learners? Share it here!</p>
            <TextInput
            label='Youtube Video ID'
            onChange={setYoutubeLink}/>
            <button className='primary-button large full-width'>Submit</button>
        </div>
    </div>
}
