import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import about from '../dy_avatar.jpeg'
import linkedin from '../icons8-linkedin-50.png'
import github from '../icons8-github-50.png'
import { Container, Media } from 'react-bootstrap'



const About = () => {
    return (
        <>
<Container className="aboutFig" >
<h1 className="contactHead">About Me</h1>
    <Media>
    <img
        className="aboutImg"
        src={about}
        alt="Dy portfolio"
    />
    </Media>
    <Media.Body className="figCap">
        <p>
            <h5>I am Daniel Yepez</h5> a Latinx American Web Developer, who enjoys creating beautiful applications that are responsive dynamic and feature rich. 
            With past experience in event production, as an Audio Engineer along with Web Development, I see
            both careers are intertwined bridging creativity and technology. I am ready to keep expanding my skills set, and connections as opportunities arrive. Opened
            to gain a role as Developer or contract freelancer.
        </p>
    </Media.Body>
    <Media className="social">
        <a href="https://www.linkedin.com/in/dannyypz/" target="_blank" ><img src={linkedin} alt="linkedin link"/></a>
        <a href="https://github.com/dannyypz" target="_blank" ><img src={github} alt="github link"/></a>
    </Media>
</Container>

        </>
    )
}

export default About
