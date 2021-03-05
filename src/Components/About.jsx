import React from 'react'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import 'bootstrap/dist/css/bootstrap.min.css'
import about from '../dy_avatar.jpeg'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'


const About = () => {
    return (
        <>

<Container className="aboutFig">
    <Media>
    <img
        className="mr-3 aboutImg"
        src={about}
        alt="Generic placeholder"
    />
    <Media.Body className="figCap">
        <h2>About Me</h2>
        <p>
            Latinx American Wed Developer, I enjoy creating beautiful applications that are responsive dynamic and feature rich. 
            I have past experience in Audio Engineering. As an Audio Engineer and Web Developer, 
            I see both careers intertwined bringing creativity and technology together. I am ready to keep expanding my skills, as opportunities arrive, and I am opened
            to gain a role as Developer 
        </p>
    </Media.Body>
    </Media>
</Container>

        </>
    )
}

export default About
