import React, {useEffect} from 'react';
import classes from './Search.module.css';

//Routing
import { useLocation } from 'react-router-dom';

// UI
import TextInput from '../../components/UI/TextField/TextInput';
import ScrollUpOnMount from '../../components/ScrollUpOnMount/SrollUpOnMount';

// Redux
import { connect } from 'react-redux';
import {searchVideoAsync, setSearchText, setInspectedVideoIndex, incrementInspectedVideo, decrementInspectedVideo} from '../../store/actions/index';

// Components
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

            props.onSetText(searchedWord);
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
                onChange={props.onSetText}
                onSubmit={submitButtonClickedHandler}
                disableSubmit={props.text.length === 0 || props.loading}
                />
            </div>
        </div>

        {props.lastSearchSuccessful === false ?
            <NotFound lastSearchedWord={props.lastSearchedWord}/>
        :
            <Result
            loading={props.loading}
            word={props.lastSearchedWord}
            video={props.video}
            numVideos={props.numVideos}
            videoIndex={props.videoIndex}
            setVideoIndex={props.onSetVideoIndex}
            incrementVideoIndex={() => props.onIncrementVideo(props.videoIndex, props.numVideos)}
            decrementInspectedVideo={() => props.onDecrementVideo(props.videoIndex, props.numVideos)}/>
        }
    </>
}

const mapStateToProps = state => {
    return {
        text: state.search.text,
        loading: state.search.loading,
        lastSearchedWord: state.search.lastSearchedWord,
        lastSearchSuccessful: state.search.lastSearchSuccessful,
        video: state.search.inspectedVideo,
        numVideos: state.search.videos.length,
        videoIndex: state.search.inspectedVideoIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetText: text => dispatch(setSearchText(text)),
        onSearchVideo: word => dispatch(searchVideoAsync(word)),
        onSetVideoIndex: index => dispatch(setInspectedVideoIndex(index)),
        onIncrementVideo: (index, numVideos) => dispatch(incrementInspectedVideo(index, numVideos)),
        onDecrementVideo: (index, numVideos) => dispatch(decrementInspectedVideo(index, numVideos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
