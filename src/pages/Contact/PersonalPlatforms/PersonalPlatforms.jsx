import React from 'react';
import { Link } from 'react-router-dom';
import classes from './PersonalPlatforms.module.css'

export default function PersonalPlatforms(){
    return(
        <div className='personalConnect'>
            <ul>
                <li className={classes['connect-list']}>
                    <Link to='https://www.instagram.com/_.sleeping_head._/'
                    target="_blank"
                    className={classes.link}>
                    Instagram
                    </Link>
                </li>
            </ul>
        </div>
    )
}