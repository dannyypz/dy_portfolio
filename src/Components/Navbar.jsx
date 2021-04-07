import React from 'react'
import logo from '../De.png'
import { Link} from 'react-scroll'
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
                <Link className="nav-link" aria-current="page"
                    to="home"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"
                    to="about"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"
                    to="experience"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>experience</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"
                    to="work"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>work</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"
                    to="contact"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
