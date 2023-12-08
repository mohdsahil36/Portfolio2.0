import React from 'react';
import classes from '../SkillsSet.module.css';

export default function DesignAndPrototyping(){
    return(
        <div class={classes.skillUL}>
            <ul className={classes.skillLI}>
                <li className="skillLI">Figma</li>
                <li className="skillLI">Page Designer</li>
            </ul>
        </div>
    )
}