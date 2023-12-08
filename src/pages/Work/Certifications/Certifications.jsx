import React from 'react';
import classes from './Certifications.module.css';
import { textVariants } from '../../../transitions/Entrace';
import { motion } from 'framer-motion';

export default function Certifications(){
    const newtextVariants= textVariants;
    return(
        <div className='certifications'>
            <motion.p className={classes.certTitle} variants={newtextVariants}>Certifications</motion.p>
            <div className={classes.cert}>
                <div className='row first'>
                    <p className={`col-xs-4 col-4 ${classes.certDomain}`}>Javascript</p>
                    <div className={`col-xs-8 col-8 ${classes.certAndorg}`}>
                        <a className={classes['certificate-details']} target='_blank' href='https://drive.google.com/file/d/1ad6j1jSpCwEXVpZCJIozJ2avDskEG_Ur/view?usp=drivesdk'rel="noopener noreferrer">Salesforce Javascript Developer I</a>
                        <p className={classes.issueingOrg}>Udemy</p>
                    </div>
                </div>
                <div className='row my-4 second'>
                    <p className={`col-xs-4 col-4 ${classes.certDomain}`}>Data Analysis</p>
                    <div className={`col-xs-8 col-8 ${classes.certAndorg}`}>
                        <a className={classes['certificate-details']} target='_blank' href='https://drive.google.com/file/d/1WLfh4q00kho_n3Ji9P65fNxuLImeMclz/view?usp=drivesdk'rel="noopener noreferrer">Apache Spark TM (SQL)</a>
                        <p className={classes.issueingOrg}>Coursera</p>
                    </div>
                </div>
                <div className='row my-3 third'>
                    <p className={`col-xs-4 col-4 ${classes.certDomain}`}>Cloud</p>
                    <div className={`col-xs-8 col-8 ${classes.certAndorg}`}>
                        <a className={classes['certificate-details']} target='_blank' href='https://drive.google.com/file/d/1dhNNOknGEadRS-42R2ExQlWl_FJYI60x/view?usp=drivesdk'rel="noopener noreferrer">Cloud Computing</a>
                        <p className={classes.issueingOrg}>NPTEL</p>
                    </div>
                </div>
                <div className='row my-4 fourth'>
                    <p className={`col-xs-4 col-4 ${classes.certDomain}`}>Essential Trainings</p>
                    <div className={`col-xs-8 col-8 ${classes.certAndorg}`}>
                        <a className={classes['certificate-details']} target='_blank' href='https://drive.google.com/file/d/106gyEa3iYYkR7t-6jVJOlGRT1DzQdtYZ/view?usp=drive_link'rel="noopener noreferrer">React JS</a>
                        <a className={`mx-2 ${classes['certificate-details']}`} target='_blank' href='https://drive.google.com/file/d/103HNUjoarhrzT0ZPmPVPBLcza64j6NdG/view?usp=drive_link'rel="noopener noreferrer">Gatsby JS</a>
                        <a className={classes['certificate-details']} target='_blank' href='https://drive.google.com/file/d/10Gqtc2kn23KI6vlYfO1nelk3mnMPYNDx/view?usp=sharing' rel="noopener noreferrer">Express JS</a>
                        <p className={classes.issueingOrg}>Linkedin Learning</p>
                    </div>
                </div>
            </div>
        </div>
    )
}