import React from 'react';
import classes from '../SkillsSet.module.css';

export default function Performance(){
    return(
        <div class={classes.skillUL}>
            <ul className={classes.skillLI}>
                <li className="skillLI">Google Lighthouse</li>
                <li className="skillLI">Google Developer Tools</li>
                <li className="skillLI">AXE Dev Tools</li>
                <li className="skillLI">React and Redux Developer tools</li>
            </ul>
        </div>
    )
}