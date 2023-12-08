import React from 'react';
import classes from './Skills.module.css';
import {motion} from 'framer-motion';
import { textVariants } from '../../transitions/Entrace';
import SkillsSet from './Skills/SkillsSet';

export default function Skills(){
    const newtextVariants= textVariants;
    return (
      <motion.div
        className={classes.skills}
        variants={newtextVariants}
        initial="initial"
        animate="animate"
      >
        <motion.p className={classes["skillsTitle"]}>
          Skillset
        </motion.p>
        <motion.div>
            <SkillsSet/>
            <motion.p className={classes.quote} variants={newtextVariants}>Continue to study and learn new skills - Edie McClurg</motion.p>
        </motion.div>
      </motion.div>
    );
}