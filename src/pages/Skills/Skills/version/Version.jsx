import React from 'react';
import classes from '../SkillsSet.module.css';

export default function Version(){
    return(
        <div class={classes.skillUL}>
            <ul className={classes.skillLI}>
                <li className="skillLI">git</li>
                <li className="skillLI">Bitbucket</li>
            </ul>
        </div>
    )
}