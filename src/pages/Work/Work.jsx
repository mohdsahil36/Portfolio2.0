import React from 'react';
import { textVariants } from '../../transitions/Entrace';
import { motion } from 'framer-motion';
import classes from './Work.module.css';
import Experience from './Experience/Experience';
import Certifications from './Certifications/Certifications';

export default function Work(){
    const newtextVariants= textVariants;
    return(
        <motion.div className={classes.work} variants={newtextVariants} initial='initial' animate='animate'>
            <motion.p variants={newtextVariants} className={classes['workTitle']}>Work</motion.p>
            <Experience/>
            <Certifications/>
            <motion.p className={classes.quote} variants={newtextVariants}>Do the best you can in every task, no matter how unimportant it may seem at the time. No one learns more about a problem than the person at the bottom —Sandra Day O’Connor</motion.p>
        </motion.div>
    )
}