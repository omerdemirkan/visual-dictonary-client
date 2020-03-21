import React from 'react';
import classes from './Result.module.css';

// UI
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Spinner from '../../../components/UI/Spinner/Spinner';

//Utils
import applyAccent from '../../../utils/applyAccent';


function Result(props) {

    if (props.loading === true) {
        return <div className={classes.SpinnerBox}>
            <Spinner/>
        </div>
    } else if (!props.video) {
        return null;
    }

    // Creates mappable array for nodes
    const nodeList = [];
    for (let i = 0; i < props.numVideos; i++) {
        nodeList.push({
            active: i === props.videoIndex,
            clicked: () => props.setVideoIndex(i)
        });
    }

    return <div className={classes.Result}>
        <h2>"{applyAccent(props.video.sentence, props.word, {color: 'var(--accent)', fontWeight: '700'})}"</h2>
        <div className={classes.VideoBox}>
            <div style={{borderRadius: '10px', overflow: 'hidden', height: '100%'}}>
                <iframe 
                title='main' 
                width="100%" 
                height="100%" 
                src={`https://www.youtube-nocookie.com/embed/${props.video.id}?controls=0&start=${props.video.start}&end=${props.video.end}&autoplay=true`} 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </div>
            
            {/* Video Navigation Elements:  */}
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
                    <span className={classes.PreviousVideoButton} onClick={props.decrementVideoIndex}>
                        <ArrowBackIosRoundedIcon fontSize='large'/>
                    </span>

                    <span className={classes.NextVideoButton} onClick={props.incrementVideoIndex}>
                        <ArrowForwardIosRoundedIcon fontSize='large'/>
                    </span>
                </>
            : null}
            
        </div>
    </div>
}

export default Result;
