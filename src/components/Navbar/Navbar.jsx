import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <ul className={classes['navbar-navigation']}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `page-link ${isActive ? classes.active : ''}`
            }
            data-after='Home'
            end
            >
            <span>Home</span>
          </NavLink>
        </li>
        <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
              `page-link ${isActive ? classes.active : ''}`  
              }
              data-after='About'
              end
            >
              <span>About</span>
            </NavLink>
        </li>
        <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
              `page-link ${isActive ? classes.active : ''}`
              }
              data-after='Skills'
              end
            >
              <span>Skills</span>
            </NavLink>
        </li>
        <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
              `page-link ${isActive ? classes.active : ''}`
              }
              data-after='Work'
              end
            >
              <span>Work</span>
            </NavLink>
        </li>
        <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
              `page-link ${isActive ? classes.active : ''}`
              }
              data-after='Contact'
              end
            >
              <span>Contact</span>
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
