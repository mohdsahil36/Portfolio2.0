import React,{useState} from 'react';
import classes from '../SkillsSet.module.css';
import Others from './Others';

export default function OthersAccordion(){
    const[isOpen,setisOpen]=useState(false);
    return(
        <>
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className={`${classes['accordion-button']} ${!isOpen ? classes.collapsed : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded={isOpen}
              aria-controls="flush-collapseSix"
            >
             Others
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <Others />
          </div>  
        </>
    )
}