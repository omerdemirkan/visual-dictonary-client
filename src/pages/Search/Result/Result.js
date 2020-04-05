import React from 'react';
import classes from './Result.module.css';

// UI
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Spinner from '../../../components/UI/Spinner/Spinner';

//Utils
import {applyAccent} from '../../../utils/helpers';

function Result(props) {
  if (props.loading === true) {
    return (
      <div className={classes.SpinnerBox}>
        <Spinner />
      </div>
    );
  } else if (!props.video) {
    return null;
  }

  function renderPagination() {
    return (
      <div className={classes.NodeBox}>
        {new Array(props.numVideos).fill(null).map((_, idx) => (
          <span
            key={idx}
            className={classes.Node}
            style={idx === props.videoIndex ? { opacity: '.9' } : null}
            onClick={() => props.setVideoIndex(idx)}
            role='button'
          />
        ))}
      </div>
    );
  }
  
  return (
    <div className={classes.Result}>
      <div className={classes.VideoBox}>
        <div
        className={classes.VideoWrapper}
        >
          <iframe
            title='main'
            width='100%'
            height='100%'
            src={`https://www.youtube-nocookie.com/embed/${props.video.id}?controls=0&start=${props.video.start}&end=${props.video.end}&autoplay=true`}
            frameBorder={0}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Navigation Elements:  */}
        {props.numVideos > 1 ? (
          <>
            <span
              className={classes.PreviousVideoButton}
              onClick={props.decrementVideoIndex}
            >
              <ArrowBackIosRoundedIcon fontSize='large' />
            </span>

            <span
              className={classes.NextVideoButton}
              onClick={props.incrementVideoIndex}
            >
              <ArrowForwardIosRoundedIcon fontSize='large' />
            </span>
          </>
        ) : null}
      </div>

      <h2>
        "
        {applyAccent(props.video.sentence, props.word, {
          color: 'var(--accent)',
          fontWeight: '700'
        })}
        "
      </h2>

      {renderPagination()}
    </div>
  );
}

export default Result;
