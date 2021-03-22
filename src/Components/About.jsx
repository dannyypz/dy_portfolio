import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import about from '../dy_avatar.jpeg'
import linkedin from '../icons8-linkedin-50.png'
import github from '../icons8-github-50.png'
import { Container, Row, Col } from 'react-bootstrap'
import Media from 'react-bootstrap/Media'


const About = () => {
    return (
        <>
<Container className="aboutFig" >
    <Media>
    <img
        className="aboutImg"
        src={about}
        alt="Dy portfolio"
    />
    </Media>
    <Media.Body className="figCap">
        <h2>About Me</h2>
        <p>
            Latinx American Web Developer, who enjoys creating beautiful applications that are responsive dynamic and feature rich. 
            With past experience in Audio Engineering and event production, as an Audio Engineer and Web Developer, 
            both careers are intertwined bringing creativity and technology together. I am ready to keep expanding my skills set, and connections as opportunities arrive. Opened
            to gain a role as Developer or contract freelancer.
        </p>
    </Media.Body>
    <Media className="social">
        <a href="https://www.linkedin.com/in/dannyypz/"><img src={linkedin} alt="linkedin link"/></a>
        <a href="https://github.com/dannyypz"><img src={github} alt="github link"/></a>
    </Media>
</Container>

        </>
    )
}

export default About
