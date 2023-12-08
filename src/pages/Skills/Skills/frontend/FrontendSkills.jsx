import React from 'react';
import classes from '../SkillsSet.module.css';

export default function FrontendSkills(){
    return(
        <div class={classes.skillUL}>
            <ul className={classes.skillLI}>
            <li className="skillLI">HTML</li>
            <li className="skillLI">CSS3</li>
            <li className="skillLI">SCSS</li>
            <li className="skillLI">BOOTSTRAP</li>
            <li className="skillLI">JAVASCRIPT</li>
            <li className="skillLI">JQUERY</li>
            <li className="skillLI">REACT JS</li>
            <li className="skillLI">NEXT JS</li>
            <li className="skillLI">GATSBY JS</li>
            </ul>
        </div>
    )
}