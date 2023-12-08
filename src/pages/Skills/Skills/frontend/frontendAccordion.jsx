import React,{useState} from 'react';
import classes from '../SkillsSet.module.css';
import FrontendSkills from './FrontendSkills';

export default function FrontendAccordion(){
    const [isOpen, setisOpen] = useState(false);
    return (
      <>
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`${classes["accordion-button"]} ${
              !isOpen ? classes.collapsed : ""
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded={isOpen}
            aria-controls="flush-collapseOne"
          >
            frontend
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <FrontendSkills />
        </div>
      </>
    );   
}