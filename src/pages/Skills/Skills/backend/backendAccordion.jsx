import React,{useState} from 'react';
import classes from '../SkillsSet.module.css';
import BackendSkills from './BackendSkills';

export default function BackendAccordion(){
    const[isOpen,setisOpen]=useState(false);
    return (
      <>
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className={`${classes["accordion-button"]} ${
              !isOpen ? classes.collapsed : ""
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded={isOpen}
            aria-controls="flush-collapseTwo"
          >
            Backend
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <BackendSkills />
        </div>
      </>
    );
}