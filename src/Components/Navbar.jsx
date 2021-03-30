import React from 'react'
import logo from '../De.png'
//React FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

        <div className="container">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="devpez"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
                </li> */}
                <li className="nav-item">
                <a className="nav-link" href="#">experience</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">work</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
