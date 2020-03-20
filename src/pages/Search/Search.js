import React, {useEffect} from 'react';
import classes from './Search.module.css';

//Routing
import { useLocation } from 'react-router-dom';

// UI
import TextInput from '../../components/UI/TextField/TextInput';
import Spinner from '../../components/UI/Spinner/Spinner';
import ScrollUpOnMount from '../../components/ScrollUpOnMount/SrollUpOnMount';
import lost from '../../images/lost.svg';

// Redux
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import searchVideoAsync from '../../store/actions/searchVideoAsync';

import Result from './Result/Result';

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
        : 
            props.lastSearchSuccessful ?

                <Result/>

            : 
                <div className={classes.NotFoundBox}>
                    <h2>Hmm, I can't find a video for <span className='accented-text'>{props.lastSearchedWord}</span></h2>
                    <img src={lost} alt='lost'/>
                </div>
        }
    </>
}

const mapStateToProps = state => {
    return {
        text: state.search.text,
        loading: state.search.loading,
        lastSearchedWord: state.search.lastSearchedWord,
        lastSearchSuccessful: state.search.lastSearchSuccessful
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateText: text => dispatch({type: actionTypes.UPDATE_SEARCH_TEXT, text}),
        onSearchVideo: word => dispatch(searchVideoAsync(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
