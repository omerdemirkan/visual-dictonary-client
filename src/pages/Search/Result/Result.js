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

    // Creates mappable array for nodes
    const nodeList = [];
    for (let i = 0; i < props.numVideos; i++) {
        nodeList.push({
            active: i === props.videoIndex,
            clicked: () => props.onSetVideoIndex(i)
        });
    }

    function incrementVideo() {
        props.onSetVideoIndex(props.videoIndex < (props.numVideos - 1) ? props.videoIndex + 1 : 0)
    }

    function decrementVideo() {
        props.onSetVideoIndex(props.videoIndex > 0 ? props.videoIndex - 1 : (props.numVideos - 1))
    }

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
                    <div className={classes.NodeBox}>
                        {nodeList.map(node => {
                            return <div 
                            className={classes.Node} 
                            style={node.active ? {opacity: '.9'} : null}
                            onClick={node.clicked}></div>
                        })}
                    </div>
                    <span className={classes.PreviousVideoButton} onClick={decrementVideo}>
                        <ArrowBackIosRoundedIcon fontSize='large'/>
                    </span>

                    <span className={classes.NextVideoButton} onClick={incrementVideo}>
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
        videoIndex: state.search.inspectedVideoIndex,
        word: state.search.lastSearchedWord
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetVideoIndex: index => dispatch({type: actionTypes.SET_INSPECTED_VIDEO_INDEX, index})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
