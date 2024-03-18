import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/Header.css';
import Home from './Home';
import logo from '../../../public/images/logo4.png'





function Header() {
return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary customNav">
            <div className="container-fluid">
                <a className="navbar-brand "><img src={logo} /> Vicky's Portfolio </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink to="React-Portfolio"end>
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
                    </ul>
                </div>
            </div>
                
              
        </nav>
    </>
);
}

export default Header;
