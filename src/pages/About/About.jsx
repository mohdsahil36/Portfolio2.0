import React from 'react';
import classes from './About.module.css';
import { textVariants } from '../../transitions/Entrace';
import { motion } from 'framer-motion';

function About(){
    const newtextVariants= textVariants;
    return(
        <motion.div variants={newtextVariants} initial='initial' animate='animate' className={classes.about}>
            <motion.p className={classes['aboutME-title']} variants={newtextVariants}>about me</motion.p>
            <div>
                <div>
                    <div>
                        <motion.p className={classes['aboutME-text']} variants={newtextVariants}>I'm a <span className={classes.UIDev}>UI developer</span> with strong focus on producing high quality and impactful digital experience to the user.</motion.p>
                    </div>
                    <div className='mt-2'>
                        <motion.p className={classes.goTO} variants={newtextVariants}>I'm always up for <span className={classes.learn}>learning and improving</span>, both in my personal and professional life. </motion.p>
                        <motion.p className={classes.impr} variants={newtextVariants}>Whether it's picking up new skills , learning from my experiences, or making intentional choices, I've <span className={classes.dedicate}>shaped my career path with dedication.</span></motion.p>
                    </div>
                </div>
                <div>
                    <motion.p className={classes.quote} variants={newtextVariants}>If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it’s not - ELON musk</motion.p>
                </div>
            </div>
        </motion.div>
    )
}

export default About
