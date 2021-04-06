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
            <h4>My name is Daniel Yepez</h4> I'm a Colombian-American Web Developer, who is passionate about creating websites and applications that are beautiful, responsive, dynamic, and feature rich. 
            My past experience in event production as an Audio Engineer, along with my Web Development skills, bridges my creativity and love of technology. I am ready  and eager to work hard, as well 
            as continuing to expand my skill set and connections as opportunities arrive. In my downtime, I enjoy spending quality time with my loved ones, exploring as well as curating music (follow me on Spotify) 
            and vibing with my Frenchie, Sancho, eating tacos. Excited about the prospects to gain a role as a Developer or freelancer
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
