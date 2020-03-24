import React, { useState } from 'react';
import classes from './Contribute.module.css';

// UI
import TextInput from '../../components/UI/TextInput/TextInput'
// import axios from '../../axios'

export default function Contribute() {

    const [youtubeLink, setYoutubeLink] = useState('');

    function addVideo() {
        // axios.get('/captions/add-video?videoId=' + youtubeLink)
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }

    function updateVideoLinkHandler(text) {
        if (text.match('^[a-zA-Z0-9_]+$') || text === '') {
            setYoutubeLink(text)
        }
    }

    return <div className={classes.Contribute}>
        <h1 className='page-header'>Contribute</h1>

        <div className='form-box'>
            <p>Have a video that you think would be helpful to other learners? Share it here!</p>
            <TextInput
            label='Youtube Video ID'
            onChange={updateVideoLinkHandler}
            autoFocus
            value={youtubeLink}/>

            <button 
            className='primary-button large full-width' 
            onClick={addVideo}
            disabled={youtubeLink.length < 8}
            >Submit</button>
        </div>
    </div>
}
