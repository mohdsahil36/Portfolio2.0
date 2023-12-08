import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProfessionalPlatforms.module.css';

export default function ProfessionalPlatforms(){
    return(
        <div className='profConnect'>
            <ul className='mb-0'>
                <li className={classes['connect-list']}>
                    <Link to='https://www.linkedin.com/in/mohd-sahil-siddiqui-021a11201/'
                    target="_blank"
                    className={classes.link}>
                    Linkedin
                    </Link>
                </li>
                <li className={classes['connect-list']}>
                    <Link to='https://github.com/mohdsahil36'
                    target="_blank"
                    className={classes.link}>
                    Github
                    </Link>
                </li>
            </ul>
        </div>
    )
}