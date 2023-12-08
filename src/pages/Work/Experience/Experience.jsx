import React from 'react';
import { textVariants } from '../../../transitions/Entrace';
import { motion } from 'framer-motion';
import classes from './Experience.module.css';

export default function Experience(){
    const newtextVariants= textVariants;
    return(
        <div className='experience'>
            <motion.p className={classes.expTitle} variants={newtextVariants}>experience</motion.p>
            <div className={classes.exp}>
                <div className={`row ${classes.current}`}>
                    <p className={`col-xs-4 col-4 ${classes.currentYear}`}>Now</p>
                    <div className={`col-xs-8 col-8 ${classes.currentOrg}`}>
                        <p className={classes['work-designation']}>Associate FrontEnd Developer</p>
                        <p className={classes.company}>Merkle Inspire</p>
                    </div>
                </div>
                <div className={`row my-4  ${classes['prevYearOne-sec']}`}>
                    <p className={`col-xs-4 col-4 ${classes.prevYearOne}`}>2021-2022</p>
                    <div className={`col-xs-8 col-8 ${classes.internship}`}>
                        <p className={classes['work-designation']}>UI Automation Team Intern</p>
                        <p className={classes.company}>Highradius Technologies Pvt Ltd</p>
                    </div>
                </div>
            </div>
        </div>
    )
}