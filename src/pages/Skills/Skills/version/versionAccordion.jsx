import React,{useState} from 'react';
import classes from '../SkillsSet.module.css';
import Version from './Version';

export default function VersionAccordion(){
    const[isOpen,setisOpen]=useState(false);
    return (
      <>
        <h2 className="accordion-header" id="flush-headingFive">
          <button
            className={`${classes["accordion-button"]} ${
              !isOpen ? classes.collapsed : ""
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded={isOpen}
            aria-controls="flush-collapseFive"
          >
            Version
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <Version />
        </div>
      </>
    );
}