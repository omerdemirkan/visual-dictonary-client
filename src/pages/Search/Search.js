import React from 'react';
import classes from './Search.module.css';

import TextInput from '../../components/UI/TextField/TextInput';

export default function Search() {
    return <div className='page'>
        <div className={classes.SearchBox}>
            <TextInput
            label='Search'
            variant='filled'
            />
        </div>
    </div>
}
