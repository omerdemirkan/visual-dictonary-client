import React from 'react';
import classes from './Search.module.css';

import TextInput from '../../components/UI/TextField/TextInput';

import Spinner from '../../components/UI/Spinner/Spinner';

// Redux
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import searchVideoAsync from '../../store/actions/searchVideoAsync';

function Search(props) {
    return <>
        <div className={classes.SearchSection} style={props.lastSearchedWord ? {height: '30vh', transition: 'height 0.5s ease'} : null}>
            <div className={classes.SearchBox}>
                <TextInput
                label='search for the konsappt'
                variant='filled'
                value={props.text}
                onChange={props.onUpdateText}
                onSubmit={() => props.onSearchVideo(props.text)}
                disableSubmit={props.text.length < 3}
                />

                {props.loading ? 
                    <div className={classes.SpinnerBox}>
                        <Spinner/>
                    </div>
                : null}
                
            </div>
        </div>

        {props.lastSearchedWord ?
        
            <div className={classes.ResultsSection}>
                <h2>Results for <span className='accented-text'>{props.lastSearchedWord}</span></h2>
                <iframe title='main' width="560" height="315" src={`https://www.youtube.com/embed/${props.video.id}?start=${props.video.start}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        : null}
    </>
}

const mapStateToProps = state => {
    return {
        text: state.search.text,
        video: state.search.video,
        loading: state.search.loading,
        lastSearchedWord: state.search.lastSearchedWord
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateText: text => dispatch({type: actionTypes.UPDATE_SEARCH_TEXT, text}),
        onSearchVideo: word => dispatch(searchVideoAsync(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
