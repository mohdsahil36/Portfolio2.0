import React from 'react';
import classes from '../SkillsSet.module.css'

export default function BackendSkills(){
    return(
        <div class={classes.skillUL}>
            <ul className={classes.skillLI}>
                <li className="skillLI">Express Js</li>
                <li className="skillLI">Node js</li>
            </ul>
        </div>
    )
}