import React from 'react';
import { Container,Form, Button, Row, Col } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import swal from 'sweetalert';


const Contact = () => {
      const [state, handleSubmit] = useForm("mgereyrn");
      if (state.succeeded){
      swal({
        title: "Contact",
        text: "Thank You! I'll be in touch soon!",
        icon: "success",
        dangerMode: false,
        })
    }
    return (
            <Form className="contactForm" onSubmit={handleSubmit}>
                
            <Container className="formContainer">
            <h1 className="contactHead" id="contact">Contact Me</h1>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control style={{ boxShadow:'0 0.25em 0.5em 0 rgb(0,0,0,0.25)' }} type="name" placeholder="Name" id="name" name="name" />
                <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                 />
                </Col>
                <Col xs lg="4">
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control style={{ boxShadow:'0 0.25em 0.5em 0 rgb(0,0,0,0.25)' }} type="email" placeholder="Email"id="email" name="email"  />
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                 />
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                <Form.Label id="message" name="message">Comments</Form.Label>
                <Form.Control  style={{ boxShadow:'0 0.25em 0.5em 0 rgb(0,0,0,0.25)' }} as="textarea" rows={7} placeholder="Tell me how we can work together..." id="message" type="message" name="message"  />
                <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                <Button 
                    className="subButton"
                    type="submit" 
                    >Contact Me</Button>
                </Col>
            </Row>
            </Container>
            </Form>
    )
}
export default Contact;
// export default Contact
// import { useForm, ValidationError } from '@formspree/react';

// function ContactForm() {
//   const [state, handleSubmit] = useForm("mgereyrn");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <ContactForm />
//   );
// }
// 

