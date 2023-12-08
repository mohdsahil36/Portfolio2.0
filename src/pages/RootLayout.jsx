import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import classes from './RootLayout.module.css'

function RootLayout() {
    return (
      <div className={classes.rootLayout}>
          <Navbar />          
          <Outlet />
          <Footer />
      </div>
    );
  }

export default RootLayout