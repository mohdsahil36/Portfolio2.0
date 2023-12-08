import React,{useState} from 'react';
import classes from '../SkillsSet.module.css';
import DesignAndPrototyping from './DesignAndPrototyping';

export default function DesignAccordion(){
    const[isOpen,setisOpen]=useState(false);
    return (
      <>
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className={`${classes["accordion-button"]} ${
              !isOpen ? classes.collapsed : ""
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded={isOpen}
            aria-controls="flush-collapseThree"
          >
            Design and prototyping
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <DesignAndPrototyping />
        </div>
      </>
    );
}