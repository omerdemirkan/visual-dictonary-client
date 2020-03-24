import React, { useState } from 'react';
import classes from './Contribute.module.css';

// UI
import TextInput from '../../components/UI/TextInput/TextInput'

// Redux
import { openSnackbar } from '../../store/actions/index';
import { connect } from 'react-redux';

// import axios from '../../axios'

function Contribute(props) {

    const [youtubeLink, setYoutubeLink] = useState('');

    function addVideo() {
        // axios.get('/captions/add-video?videoId=' + youtubeLink)
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
        props.onOpenSnackbar('Functionality Not Available Yet')
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

const mapDispatchToProps = dispatch => {
    return {
        onOpenSnackbar: message => dispatch(openSnackbar(message))
    }
}

export default connect(null, mapDispatchToProps)(Contribute);
