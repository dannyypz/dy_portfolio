import React from 'react'
import { Container,Form, Button, Row, Col } from 'react-bootstrap'

const Contact = () => {
    return (
            <Form className="contactForm">
                
            <Container className="formContainer">
            <h1 className="contactHead" id="contact">Contact Me</h1>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                <Form.Label>Name</Form.Label><Form.Control style={{ boxShadow:'0 0.25em 0.5em 0 rgb(0,0,0,0.25)' }} type="email" placeholder="Name" />
                </Col>
                <Col xs lg="4">
                <Form.Label>Email address</Form.Label>
                <Form.Control style={{ boxShadow:'0 0.25em 0.5em 0 rgb(0,0,0,0.25)' }} type="email" placeholder="name@example.com" />
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                <Form.Label>Comments</Form.Label>
                <Form.Control  style={{ boxShadow:'0 0.25em 0.5em 0 rgb(0,0,0,0.25)' }} as="textarea" rows={7} placeholder="Tell me how we can work together..." />
                </Col>
            </Row>
            </Container>
            </Form>
    )
}

export default Contact
