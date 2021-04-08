import React from 'react'
import {Container, Card, Button, ProgressBar} from 'react-bootstrap'
import backstage from '../Backstage_home.png'
import album from '../Albumology.png'


const Work = () => {
    return (
        <>
        <h1 className="workHead" id="work">My Work</h1>
        <Container className="workCont">
            <Card className="workCard">
                <Card.Img variant="top" src={backstage} />
                <Card.Body>
                    <Card.Title>Backstage</Card.Title>
                    <Card.Text>
                    Web application designed to assist musicians and venues communicate without the hassle of coordinating back and forth. 
                    It allows musicians to plan out a stage plot, using a drag and drop feature, to place the instruments exactly where they 
                    want them to be on stage, setting the stage for the show to go on.


                    </Card.Text>
                    
                    <br/>
                    <Button variant="primary" href="http://welcome-backstage.herokuapp.com/" target="_blank">Visit</Button>
                </Card.Body>
                </Card>
                <Card className="workCard">
                <Card.Img variant="top" src={album} />
                <Card.Body>
                    <Card.Title>Albumology</Card.Title>
                    <Card.Text>
                    Web application for music lovers that provides history on songs, albums and artists. Using the  search feature, the app facilitates 
                    an artist's entire discography and backstories to your favorite songs. The main page features 50 of the most loved albums of all time, 
                    where you'll find everything from Daft Punk to Alanis Morissette.
                    </Card.Text>
                    <br/>
                    <Button variant="primary" href="http://albumology.herokuapp.com/" target="_blank">Visit</Button>
                </Card.Body>
                </Card>
        </Container>
                    
                    <Container className="techUse">
                    <h3>Technologies</h3>
                        GitHub
                        <ProgressBar variant="info" animated now={97} />
                        React.JS / Gatsby
                        <ProgressBar variant="info" animated now={95} />
                        JavaScript
                        <ProgressBar variant="info" animated now={90} />
                        NodeJS
                        <ProgressBar variant="info" animated now={85} />
                        Commerce JS / Shopify
                        <ProgressBar variant="info" animated now={90} />
                        MERN Stack
                        <ProgressBar variant="info" animated now={75} />
                        React bootstrap / MaterialUI / Tailwind CSS
                        <ProgressBar variant="info" animated now={90} />
                        Figma
                        <ProgressBar variant="info" animated now={60} />
                        Love My Dog
                        <ProgressBar variant="info" animated now={100} />
                        
                    </Container>
                    </>
    )
}

export default Work
