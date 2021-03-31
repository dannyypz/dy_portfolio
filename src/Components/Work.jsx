import React from 'react'
import {Container, Card, Button, ProgressBar, Typography} from 'react-bootstrap'
import backstage from '../Backstage_home.png'
import album from '../Albumology.png'


const Work = () => {
    return (
        <>
        <h1 className="contactHead" id="work">Work</h1>
        <Container className="workCont">
            
            <Card style={{ width: '32rem', boxShadow:'0 0.25em 0.5em 0 rgb(0,0,0,0.25)' }}>
                <Card.Img variant="top" src={backstage} />
                <Card.Body>
                    <Card.Title>Backstage</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
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
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <br/>
                    <Button variant="primary" href="http://albumology.herokuapp.com/" target="_blank">Visit</Button>
                </Card.Body>
                </Card>
        </Container>
                    
                    <Container className="techUse">
                    <h4>Technologies</h4>
                        JavaScript
                        <ProgressBar variant="info" animated now={70} />
                        NodeJS
                        <ProgressBar variant="info" animated now={70} />
                        Express
                        <ProgressBar variant="info" animated now={60} />
                        React.JS
                        <ProgressBar variant="info" animated now={80} />
                        React bootstrap
                        <ProgressBar variant="info" animated now={80} />
                        MaterialUI
                        <ProgressBar variant="info" animated now={70} />
                    </Container>
                    </>
    )
}

export default Work
