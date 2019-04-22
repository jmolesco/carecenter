import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image,  Carousel, Alert,Card,ListGroup,CardColumns } from 'react-bootstrap';
import patient1 from '../../images/patient1.jpg';
import patient2 from '../../images/patient2.jpg';
import patient3 from '../../images/patient3.jpg';
import patient4 from '../../images/patient4.jpg';

class Forms extends Component {

    render() 
    {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                    <Alert  variant={"danger"} className={"remove-border"} >
                            <hr></hr>
                                <h4>  
                                    <marquee> Forms </marquee>
                                </h4>
                            <hr></hr>
                            <p> Below are the forms use by our business. Get them now!</p>
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-md-left">
                   <Col md={12}>
                        <Row className="justify-content-md-left">
                                <Col md={6}>
                                    <Card >
                                        <Card.Header>&raquo; Patient History 1</Card.Header>
                                        <Card.Body>
                                            <Image src={patient1} className="image-patient"/>
                                        </Card.Body>
                                        <Card.Footer className="text-left">
                                                {/* <p> */}
                                                    <Button variant="outline-danger" style={{ width: '100%' }}>View</Button>
                                                {/* </p> */}
                                                {/* <p>
                                                    <Button variant="outline-info" style={{ width: '100%' }}>Fill Up Online</Button>
                                                </p> */}
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card >
                                        <Card.Header>&raquo; Patient History 2</Card.Header>
                                        <Card.Body>
                                            <Image src={patient2} className="image-patient"/>
                                        </Card.Body>
                                        <Card.Footer className="text-left">
                                                <Button variant="outline-danger" style={{ width: '100%' }}>View</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col> 
                        </Row>
                        <Row className="justify-content-md-left">
                                <Col md={6}>
                                    <Card >
                                        <Card.Header>&raquo; Patient History 3</Card.Header>
                                        <Card.Body>
                                             <Image src={patient3} className="image-patient"/>
                                        </Card.Body>
                                        <Card.Footer className="text-left">
                                                <Button variant="outline-danger" style={{ width: '100%' }}>View</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card >
                                        <Card.Header>&raquo; Patient History 4</Card.Header>
                                        <Card.Body>
                                             <Image src={patient4} className="image-patient"/>
                                        </Card.Body>
                                        <Card.Footer className="text-left">
                                                <Button variant="outline-danger" style={{ width: '100%' }}>View</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col> 
                        </Row>
                        <Row className="justify-content-md-left">
                                <Col md={12}>
                                    <Card >
                                        <Card.Header>&raquo; New Patient Information</Card.Header>
                                        <Card.Body>
                                            <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                        </Card.Body>
                                       
                                    </Card>
                                </Col>
                        </Row>
                   </Col>
                </Row>
          </Container>
        );
    }
}
export default Forms;