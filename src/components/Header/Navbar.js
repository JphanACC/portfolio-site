import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (     
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/demo">Demo</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resume
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">PDF file</a>
                            <a className="dropdown-item" href="#">Word file</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact Me</NavLink>
                    </li>
                    </ul>            
                </div>
            </nav>
    )
}
