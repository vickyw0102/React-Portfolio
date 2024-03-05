import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/Header.css';


function Header() {
return (
  <>
    
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                    <div className="Logo">
                            <img src='../public/vite.svg' className="App-logo" alt="logo>"></img>

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
                </div>
            
    
        </nav>
    
  </>
);
}

export default Header;
