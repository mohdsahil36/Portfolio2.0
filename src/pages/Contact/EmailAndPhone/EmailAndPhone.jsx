import React from 'react';
import classes from './EmailAndPhone.module.css';

export default function EmailAndPhone(){
    return(
        <div className='emailAndPhone'>
            <ul>
                <li className={classes['connect-list']}>
                    <div className={`${classes.email} mb-2`}>
                        <span className={classes.emailVal}>Email</span>
                        <a href="mailto:mohdsahilsiddiqui36@gmail.com" className={classes.emailID}>mohdsahilsiddiqui36@gmail.com</a>
                    </div>
                </li>
                <li className={classes['connect-list']}>
                    <div className={`${classes.phone} mb-2`}>
                        <span className={`${classes.phoneVal}`}>Phone</span>
                        <a href="tel:+91 7398010954" className={classes.phoneNumber}>+91 7398010954</a>
                    </div>
                </li>
            </ul>
            
            
        </div>
    )
}