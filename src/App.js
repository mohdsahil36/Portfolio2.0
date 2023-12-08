import './App.css';
import { RouterProvider,createBrowserRouter,Outlet } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Particles from 'react-tsparticles';
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';

function App() {
  // const options = {
  //   particles: {
  //     number: {
  //       value: 80,
  //       density: {
  //         enable: true,
  //         area: 800
  //       }
  //     },
  //     color: {
  //       value: ["#FFAC1C", "#CD7F32", "#DAA06D", "#CC5500"]
  //     },
  //     shape: {
  //       type: "circle"
  //     },
  //     opacity: {
  //       value: 1
  //     },
  //     size: {
  //       value: { min: 1, max: 8 }
  //     },
  //     links: {
  //       enable: true,
  //       distance: 150,
  //       color: "#808080",
  //       opacity: 0.4,
  //       width: 1
  //     },
  //     move: {
  //       enable: true,
  //       speed: 5,
  //       direction: "none",
  //       random: false,
  //       straight: false,
  //       outModes: "out"
  //     }
  //   },
  //   interactivity: {
  //     events: {
  //       onHover: {
  //         enable: true,
  //         mode: "grab"
  //       },
  //       onClick: {
  //         enable: true,
  //         mode: "push"
  //       }
  //     },
  //     modes: {
  //       grab: {
  //         distance: 140,
  //         links: {
  //           opacity: 1
  //         }
  //       },
  //       push: {
  //         quantity: 4
  //       }
  //     }
  //   }
  // };

  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {index:true,element:<HomePage/>},
        {path:'about',element:<About/>},
        {path:'skills',element:<Skills/>},
        {path:'work',element:<Work/>},
        {path:'contact',element:<Contact/>}
      ]
    }
  ])

  return (
    <div className="App">
      {/* <Particles options={options} init={particlesInit} /> */}
      {/* <AnimatePresence> */}
        <RouterProvider router={router}>
          <Outlet />
        </RouterProvider>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
