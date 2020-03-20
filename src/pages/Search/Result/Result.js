import React from 'react';
import classes from './Result.module.css';

// UI
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

//Utils
import applyAccent from '../../../utils/applyAccent';

// Redux
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';


function Result(props) {

    return <div className={classes.Result}>
        <h2>"{applyAccent(props.video.sentence, props.word, {color: 'var(--accent)', fontWeight: '700'})}"</h2>
        <div className={classes.VideoBox}>

            <iframe 
            title='main' 
            width="100%" 
            height="100%" 
            src={`https://www.youtube-nocookie.com/embed/${props.video.id}?start=${props.video.start}&end=${props.video.end}&autoplay=true`} 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            
            {props.numVideos > 1 ?
                <>
                    <span className={classes.PreviousVideoButton} onClick={props.onDecrementVideo}>
                        <ArrowBackIosRoundedIcon fontSize='large'/>
                    </span>

                    <span className={classes.NextVideoButton} onClick={props.onIncrementVideo}>
                        <ArrowForwardIosRoundedIcon fontSize='large'/>
                    </span>
                </>
            : null}
            

        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        video: state.search.inspectedVideo,
        numVideos: state.search.videos.length,
        videoIndex: state.search.videos.inspectedVideoIndex,
        word: state.search.lastSearchedWord
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementVideo: () => dispatch({type: actionTypes.INCREMENT_INSPECTED_VIDEO}),
        onDecrementVideo: () => dispatch({type: actionTypes.DECREMENT_INSPECTED_VIDEO})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
