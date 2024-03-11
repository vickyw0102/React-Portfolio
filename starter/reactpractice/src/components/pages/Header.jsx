import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/Header.css';
import Home from './Home';
import Project from './Project';




function Header() {
return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary customNav">
            <div className="container-fluid">
                <div className="navbar-brand "><img src="../images/logo4.png" /> Vicky's Portfolio

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <NavLink to="/"end>
                        Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="Project"end>
                        Project List
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="Contact"end>
                        Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="Resume"end>
                        Resume
                        </NavLink>
                    </li>
                </ul>
            </div>
                </div>
            </div>   
                
        </nav>
    </>
);
}

export default Header;
