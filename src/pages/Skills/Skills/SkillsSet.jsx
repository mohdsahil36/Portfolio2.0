import React from "react";
import classes from './SkillsSet.module.css';
import FrontendAccordion from "./frontend/frontendAccordion";
import BackendAccordion from "./backend/backendAccordion";
import DesignAccordion from "./design/designAccordion";
import PerformanceAccordion from "./performance/performaceAccordion";
import VersionAccordion from "./version/versionAccordion";
import OthersAccordion from "./others/othersAccordion";

export default function SkillsSet() {
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className={classes["accordion-item"]}>
          <FrontendAccordion/>
        </div>  
        <div className={classes['accordion-item']}>
          <BackendAccordion/>
        </div>
        <div className={classes['accordion-item']}>
          <DesignAccordion/>
        </div>
        <div className={classes['accordion-item']}>
          <PerformanceAccordion/>
        </div>
        <div className={classes['accordion-item']}>
          <VersionAccordion/>
        </div>
        <div className={classes['accordion-item']}>
          <OthersAccordion/>
        </div>
      </div>
    </>
  );
}

