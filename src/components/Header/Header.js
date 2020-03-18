import React from 'react';
import classes from './Header.module.css';

import { NavLink } from 'react-router-dom';

export default function Header() {
    return <div className={classes.Header}>

        <span className={classes.Logo}>
            <span className='accented-text'>.</span>konsappt
        </span>

        <ul className={classes.NavList}>
            <li>
                <NavLink to='/' exact>home</NavLink>
            </li>

            <li>
                <NavLink to='/search'>search</NavLink>
            </li>

            <li>
                <NavLink to='/about'>about</NavLink>
            </li>

            <li>
                <NavLink to='/sign-up'><button className='primary-button'>Sign Up</button></NavLink>
                
            </li>

            <li>
                <NavLink to='/log-in'><button className='secondary-button'>Log In</button></NavLink>
            </li>
        </ul>
    </div>
}
