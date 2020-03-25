import React, { useState } from 'react';
import classes from './Contribute.module.css';

// UI
import TextInput from '../../components/UI/TextInput/TextInput';
import Spinner from '../../components/UI/Spinner/Spinner';

// Redux
import { openSnackbar } from '../../store/actions/index';
import { connect } from 'react-redux';

import axios from '../../axios'

function Contribute(props) {

    const [videoId, setVideoId] = useState('');
    const [loading, setloading] = useState(false);

    function addVideo() {

        setloading(true);

        axios.get('/captions/add-video?videoIds=' + videoId)
        .then(res => {
            setloading(false);
            props.onOpenSnackbar('Video successfully added!');
        })
        .catch(err => {
            setloading(false);
            console.log(err.message);
            props.onOpenSnackbar(err.message)
        })
    }

    function updateVideoLinkHandler(text) {
        if (text.match('^[a-zA-Z0-9_]+$') || text === '') {
            setVideoId(text)
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
            value={videoId}/>

            <button 
            className='primary-button large full-width' 
            onClick={addVideo}
            disabled={videoId.length < 8}
            >Submit</button>
        </div>

        {loading ?
            <div className={classes.SpinnerBox}>
                <Spinner/>
            </div>
        : null}
    </div>
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenSnackbar: message => dispatch(openSnackbar(message))
    }
}

export default connect(null, mapDispatchToProps)(Contribute);
