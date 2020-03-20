import React, {useEffect} from 'react';
import classes from './Search.module.css';

//Routing
import { useLocation } from 'react-router-dom';

// UI
import TextInput from '../../components/UI/TextField/TextInput';
import Spinner from '../../components/UI/Spinner/Spinner';
import ScrollUpOnMount from '../../components/ScrollUpOnMount/SrollUpOnMount';
import lost from '../../images/lost.svg';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

// Redux
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import searchVideoAsync from '../../store/actions/searchVideoAsync';

//Utils
import applyAccent from '../../utils/applyAccent';

import Result from './Result/Result';
import NotFound from './NotFound/NotFound';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Search(props) {
    
    // To read url search params
    const query = useQuery();

    useEffect(() => {
        const searchedWord = query.get('word');
        if (searchedWord) {
            // If the user loads the app with a word in the url search params (for sharable link)

            props.onUpdateText(searchedWord);
            props.onSearchVideo(searchedWord);
        } else if (props.lastSearchedWord) {

            // If the user comes back to this route with stored information for the last searched word.

            props.history.push(props.history.location.pathname + `?word=${props.lastSearchedWord}`);
        }
    }, []);

    function submitButtonClickedHandler() {
        window.scrollTo(0, 0);
        props.history.push(props.history.location.pathname + `?word=${props.text}`);
        props.onSearchVideo(props.text);
    }

    return <>
        <ScrollUpOnMount/>
        <div className={classes.SearchSection} style={query.get('word') || props.lastSearchedWord ? {height: '25vh', transition: 'height 0.3s ease'} : null}>
            <div className={classes.SearchBox}>
                <TextInput
                label='Search for a word'
                variant='filled'
                value={props.text}
                onChange={props.onUpdateText}
                onSubmit={submitButtonClickedHandler}
                disableSubmit={props.text.length === 0 || props.loading}
                />
            </div>
        </div>

        {props.loading ? 
            <div className={classes.SpinnerBox}>
                <Spinner/>
            </div>
        : null}

        {props.lastSearchSuccessful && !props.loading ?
            <div className={classes.ResultsSection}>
                <h2>"{applyAccent(props.video.sentence, props.lastSearchedWord, {color: 'var(--accent)', fontWeight: '700'})}"</h2>
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

            // <Result
            // video={props.video}
            // lastSearchedWord={props.lastSearchedWord}
            // numVideos={props.numVideos}
            // incrementVideo={props.onIncrementVideo}
            // decrementVideo={props.onDecrementVideo}
            // />
        : null}

        {props.lastSearchSuccessful === false && !props.loading ?
            <div className={classes.ResultsSection}>
                <h2>Hmm, I can't find a video for <span className='accented-text'>{props.lastSearchedWord}</span></h2>
                <img src={lost} alt='lost'/>
            </div>
        : null}
    </>
}

const mapStateToProps = state => {
    return {
        text: state.search.text,
        video: state.search.inspectedVideo,
        numVideos: state.search.videos.length,
        loading: state.search.loading,
        lastSearchedWord: state.search.lastSearchedWord,
        lastSearchSuccessful: state.search.lastSearchSuccessful
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateText: text => dispatch({type: actionTypes.UPDATE_SEARCH_TEXT, text}),
        onSearchVideo: word => dispatch(searchVideoAsync(word)),
        onIncrementVideo: () => dispatch({type: actionTypes.INCREMENT_INSPECTED_VIDEO}),
        onDecrementVideo: () => dispatch({type: actionTypes.DECREMENT_INSPECTED_VIDEO})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
