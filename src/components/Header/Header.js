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
                <NavLink to='/' exact activeClassName={classes.ActiveLink}>
                    home
                    
                    {/* Spans within NavLinks serve as underline styling. */}
                    <span className='accented-section'></span>
                </NavLink>
            </li>

            <li>
                <NavLink to='/search' activeClassName={classes.ActiveLink}>
                    search
                    <span className='accented-section'></span>
            
                </NavLink>
            </li>

            <li>
                <NavLink to='/about' activeClassName={classes.ActiveLink}>
                    about
                    <span className='accented-section'></span>
                    
                </NavLink>
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
