import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import about from '../dy_avatar.jpeg'
import linkedin from '../icons8-linkedin-50.png'
import github from '../icons8-github-50.png'
import spotify from '../icons8-spotify-50.png'
import { Container, Media } from 'react-bootstrap'



const About = () => {
    return (
        <>
<Container className="aboutFig" >
<h1 className="contactHead" id="about">About Me</h1>
    <Media>
    <img
        className="aboutImg"
        src={about}
        alt="Dy portfolio"
    />
    </Media>
    <Media.Body className="figCap">
        <p>
            <h5>I am Daniel Yepez</h5>  A Colombian American Web Developer, who enjoys creating beautiful websites and applications that are responsive, dynamic and feature rich. With past experience in event production,
             as an Audio Engineer with a passion for Web Development, I see both careers intertwined bridging creativity and technology. I am ready to put in the hard work and keep expanding my skills set and connections as 
             opportunities arrive. In my downtime I enjoy spending time with my loved ones and celebrating life, I am a music lover of all kinds, follow me on Spotify, you can catch me and my Frenchie Sancho vibing, eating
             fish tacos! Opened to gain a role as Developer or contract freelancer.
        </p>
    </Media.Body>
    <Media className="social">
        <a href="https://www.linkedin.com/in/dannyypz/" target="_blank" ><img src={linkedin} alt="linkedin link"/></a>
        <a href="https://github.com/dannyypz" target="_blank" ><img src={github} alt="github link"/></a>
        <a href="https://open.spotify.com/user/dannyypez?si=6b46a70d26074ba2" target="_blank" ><img src={spotify} alt="github link"/></a>
    </Media>
</Container>

        </>
    )
}

export default About
