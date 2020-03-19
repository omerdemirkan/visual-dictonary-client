import React from 'react';
import classes from './Home.module.css';
import ScrollUpOnMount from '../../components/ScrollUpOnMount/SrollUpOnMount';

import {Link} from 'react-router-dom';

// import mountains from '../../images/mountains.svg';
import hiker from '../../images/hiker.svg';

export default function Home() {
    return <div className={classes.Home}>
        <ScrollUpOnMount/>
        <div className={classes.HeroSection}>
            <span className={classes.HeroTextSection}>
                <h1>find the <span className='accented-text'>konsappt</span></h1>
                <h3>a “show, don’t tell” approach to expanding your vocabulary</h3>
                <Link to='/search'>
                    <button className='primary-button large'>Try It For Free</button>
                </Link>
            </span>

            <img src={hiker} alt='hiker' className={classes.Hiker}/>

            {/* <img src={mountains} className={classes.Mountains} alt='mountains'/> */}
        </div>
    </div>
}
