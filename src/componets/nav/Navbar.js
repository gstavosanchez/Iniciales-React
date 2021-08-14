import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Factuldad App
                </Link>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Carreras
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/item">
                                Features
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
