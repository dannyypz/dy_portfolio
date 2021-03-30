import React from 'react'
import { Container,Form, Button, Row, Col } from 'react-bootstrap'

const Contact = () => {
    return (
            <Form className="contactForm">
                
            <Container className="formContainer">
            <h1 className="contactHead">Contact Me</h1>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                <Form.Label>Name</Form.Label><Form.Control type="email" placeholder="Name" />
                </Col>
                <Col xs lg="4">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={7} />
                </Col>
            </Row>
            </Container>
            </Form>
    )
}

export default Contact
