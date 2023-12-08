import React,{useState} from 'react';
import classes from '../SkillsSet.module.css';
import Performance from './Performance';

export default function PerformanceAccordion(){
    const[isOpen,setisOpen]=useState(false);
    return (
      <>
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className={`${classes["accordion-button"]} ${
              !isOpen ? classes.collapsed : ""
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded={isOpen}
            aria-controls="flush-collapseFour"
          >
            Performance
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <Performance />
        </div>
      </>
    );
}