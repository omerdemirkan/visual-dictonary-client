import React, {useEffect, useRef, useState} from 'react';
import classes from './Header.module.css';

import { NavLink } from 'react-router-dom';

export default function Header() {

    const [minimizeHeader, setMinimizeHeader] = useState(false);

    const headerRef = useRef();
    headerRef.current = minimizeHeader;

    useEffect(() => {
        const handleScroll = () => {
          const show = window.scrollY > 70
          if (headerRef.current !== show) {
            setMinimizeHeader(show)
          }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
          document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return <div className={classes.Header} style={minimizeHeader ? {height: '60px', backgroundColor: 'var(--background-accent)', borderColor: 'rgb(195, 214, 214)'} : null}>
        <span className={classes.Logo}>
            <NavLink to='/'>
                <span className='accented-text'>.</span>konsappt
            </NavLink>
        </span>

        <ul className={classes.NavList}>
            <li>
                <NavLink to='/' exact activeClassName={classes.ActiveLink}>
                    home

                    {/* Spans within NavLinks serve as underline styling. */}
                    <span></span>
                </NavLink>
            </li>

            <li>
                <NavLink to='/search' activeClassName={classes.ActiveLink}>
                    search
                    <span></span>
            
                </NavLink>
            </li>

            <li>
                <NavLink to='/about' activeClassName={classes.ActiveLink}>
                    about
                    <span></span>
                    
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
