import React from 'react'
import {Container, Card, Button, ProgressBar, Typography} from 'react-bootstrap'
import backstage from '../Backstage_home.png'
import album from '../Albumology.png'


const Work = () => {
    return (
        <>
        <h1 className="workHead" id="work">Work</h1>
        <Container className="workCont">
            
            <Card style={{ width: '32rem', boxShadow:'0 0.25em 0.5em 0 rgb(0,0,0,0.25)' }}>
                <Card.Img variant="top" src={backstage} />
                <Card.Body>
                    <Card.Title>Backstage</Card.Title>
                    <Card.Text>
                    Web application designed to assist musicians and venues communicate what they will need on their day of the show.
                    Allows musicing to create a stage plot where they can drag and drop the instruments and send them to the venue, alternatively, 
                    the venues can see the stage plot and show the equipment they can provide so the show goes on.
                    </Card.Text>
                    
                    <br/>
                    <Button variant="primary" href="http://welcome-backstage.herokuapp.com/" target="_blank">Visit</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '32rem', boxShadow:'0 0.25em 0.5em 0 rgb(0,0,0,0.25)' }}>
                <Card.Img variant="top" src={album} />
                <Card.Body>
                    <Card.Title>Albumology</Card.Title>
                    <Card.Text>
                    Web application for music lovers that provides some history into songs albums and artists.
                    You can search your favorite artists and once you do you can find their entire discography 
                    and their process for recording some of your favorite songs. the main page features the 50 most loved albums, 
                    where you can everything from Daft Punk to Alanis Morissette.
                    </Card.Text>
                    <br/>
                    <Button variant="primary" href="http://albumology.herokuapp.com/" target="_blank">Visit</Button>
                </Card.Body>
                </Card>
        </Container>
                    
                    <Container className="techUse">
                    <h4>Technologies</h4>
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
