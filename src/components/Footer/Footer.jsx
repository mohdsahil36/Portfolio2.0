import React from 'react';
import classes from './Footer.module.css';
import {motion} from 'framer-motion';


export default function Footer(){
    return(
        <div className='footer text-center'>
            <motion.p className={classes.copyright}>&copy; Mohd Sahil Siddiqui . All rights reserved</motion.p>
        </div>
    )
}