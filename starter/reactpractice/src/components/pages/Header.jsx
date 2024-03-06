import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/Header.css';
import Home from './Home';
import Project from './Project';




function Header() {
return (
    <>
        <section> 
            <nav className="navbar navbar-expand-lg     cbg-body-tertiary CustomNav">
                <div className="container-fluid">

                        <ul className="nav nav-tabs">

                            <li className="nav-item">
                                <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                                >
                                Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                to="Contact"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                                >
                                Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                to="Project"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                                >
                                Project
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                to="Resume"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                                >
                                Resume
                                </NavLink>
                            </li>
                        </ul>
                        
                </div>
            </nav>
            
        </section>                    
<<<<<<< HEAD
       
=======
        
>>>>>>> 83c95e7df60920374cdba9b82df34c3ba50cdcda
        
    </>
);
}

export default Header;
