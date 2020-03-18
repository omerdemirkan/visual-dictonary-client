import React from 'react';
import classes from './Search.module.css';

import TextInput from '../../components/UI/TextField/TextInput';

// Redux
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import searchVideoAsync from '../../store/actions/searchVideoAsync';

function Search(props) {
    return <>
        <div className={classes.Search} style={props.video ? {height: '30vh', transition: 'height 0.5s ease'} : null}>
            <div className={classes.SearchBox}>
                <TextInput
                label='search for the konsappt'
                variant='filled'
                value={props.text}
                onChange={props.onUpdateText}
                onSubmit={() => props.onSearchVideo(props.text)}
                />
            </div>
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        text: state.search.text,
        video: state.search.video
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateText: text => dispatch({type: actionTypes.UPDATE_SEARCH_TEXT, text}),
        onSearchVideo: word => dispatch(searchVideoAsync(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
