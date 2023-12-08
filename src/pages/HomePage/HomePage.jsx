import React from 'react';
import classes from './HomePage.module.css';
// import Particles from 'react-tsparticles';
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";
import { motion } from 'framer-motion';
import { textVariants } from '../../transitions/Entrace';

function HomePage() {

    // const options = {
    //     particles: {
    //       number: {
    //         value: 80,
    //         density: {
    //           enable: true,
    //           area: 800
    //         }
    //       },
    //       color: {
    //         value: ["#FFAC1C", "#CD7F32", "#DAA06D", "#CC5500"]
    //       },
    //       shape: {
    //         type: "circle"
    //       },
    //       opacity: {
    //         value: 0.5
    //       },
    //       size: {
    //         value: { min: 1, max: 8 }
    //       },
    //       links: {
    //         enable: true,
    //         distance: 150,
    //         color: "#808080",
    //         opacity: 0.4,
    //         width: 1
    //       },
    //       move: {
    //         enable: true,
    //         speed: 5,
    //         direction: "none",
    //         random: false,
    //         straight: false,
    //         outModes: "out"
    //       }
    //     },
    //     interactivity: {
    //       events: {
    //         onHover: {
    //           enable: true,
    //           mode: "grab"
    //         },
    //         onClick: {
    //           enable: true,
    //           mode: "push"
    //         }
    //       },
    //       modes: {
    //         grab: {
    //           distance: 140,
    //           links: {
    //             opacity: 1
    //           }
    //         },
    //         push: {
    //           quantity: 4
    //         }
    //       }
    //     }
    //   };
    
    //   const particlesInit = useCallback(async (engine) => {
    //     await loadFull(engine);
    //   }, []);

    const newtextVariants = textVariants;

    return (
        <div className={classes.profileHomePage}>
            {/* <Particles options={options} init={particlesInit} /> */}
            <motion.div className='wrapper' variants={newtextVariants} initial='initial' animate='animate'>
                <motion.p className={classes.name} variants={newtextVariants}>Mohd Sahil Siddiqui</motion.p>
                <motion.p className={classes.degn} variants={newtextVariants}>UI Developer</motion.p>
                <motion.p className={classes.work} variants={newtextVariants}>transforming designs into experiences</motion.p>
            </motion.div>
        </div>
    );
}

export default HomePage;
