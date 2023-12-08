import React from 'react';
import { textVariants } from '../../transitions/Entrace';
import { motion } from 'framer-motion';
import classes from './Connect.module.css'
import ProfessionalPlatforms from './ProfessionalPlatforms/ProfessionalPlatforms';
import PersonalPlatforms from './PersonalPlatforms/PersonalPlatforms';
import EmailAndPhone from './EmailAndPhone/EmailAndPhone';
import Image from '../../assets/walk.jpg'

export default function Contact(){
    const newtextVariants= textVariants;
    return(
        <motion.div className={classes.contactME} variants={newtextVariants} initial='initial' animate='animate' >
            <motion.p className={classes['contactME-title']} variants={newtextVariants}>let's connect</motion.p>
            <div className='container-fluid row'>
                <div className='col-sm-12 col-md-4 ps-0'>
                    <ProfessionalPlatforms/>
                </div>
                <div className='col-sm-12 col-md-4 ps-0'>
                    <PersonalPlatforms/>
                </div>
                <div className='col-sm-12 col-md-4 ps-0'>
                    <EmailAndPhone/>
                </div>
            </div>
            <div className='text-center'>
                <img src={Image} alt="" className={classes.image}/>
            </div>  
            <motion.div className={classes.pageQuote}>
                <motion.p className={classes.quote}>Friendship is based on the oldest and most intrinsic human awareness that there is more to life than just ourselves. -Christopher Hansard</motion.p>
            </motion.div>
        </motion.div>
    )
}