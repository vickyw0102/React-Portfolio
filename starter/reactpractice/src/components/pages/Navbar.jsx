import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar';

function Navbar() {
return (
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
);
}

export default Navbar;
