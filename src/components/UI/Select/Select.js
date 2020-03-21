import React from 'react';
import classes from './Select.module.css';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function StylizedSelect({ label, value, onChange, options }) {
    return <div className={classes.SelectBox}>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={null}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={classes.Select}
        >
            {options.map(option => {
                return <MenuItem value={option.value}>{option.display}</MenuItem>
            })}
          
        </Select>
        
        <h3>{label}</h3>
    </div>
}
