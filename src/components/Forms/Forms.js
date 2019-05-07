import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image,  Carousel, Alert,Card,ListGroup,CardColumns } from 'react-bootstrap';
// import patient1 from '../../images/patient1.jpg';
// import patient2 from '../../images/patient2.jpg';
// import patient3 from '../../images/patient3.jpg';
// import patient4 from '../../images/patient4.jpg';
import patientinfo from '../../forms/new-patient-form.pdf';
import patienthist1 from '../../forms/all.pdf';
// import patienthist2 from '../../forms/patient-history-2.pdf';
// import patienthist3 from '../../forms/patient-history-3.pdf';
// import patienthist4 from '../../forms/patient-history-4.pdf';
import patientrecords from '../../images/medical-history.png'; 
import patientforms from '../../images/patient-forms.png'; 
class Forms extends Component {

    render() 
    {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                    <Alert  variant={"primary"} className={"remove-border"} >
                            <hr></hr>
                                <h4>  
                                    <marquee> Forms </marquee>
                                </h4>
                            <hr></hr>
                            <p> Forms available to Download and print  and bring on your scheduled Appointment with Dr. Cynthia Yango-Eugenio</p>
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-md-left">
                   <Col md={12}>
                        <Row className="justify-content-md-left">
                                <Col md={6}>
                                    <Card >
                                        <Card.Header>&raquo; Patient History 1 - 4</Card.Header>
                                        <center>
                                            <Card.Img variant="top" className="img-forms"  src={patientrecords} />
                                        </center>
                                        <Card.Body>


                                            <p>
                                                    <a target="_blank" rel="noopener noreferrer" href={patienthist1} download="patient-all.pdf">
                                                        <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                                    </a>
                                                    <br></br>      <br></br>
                                                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1QtZGx8E9BgHy3nygZJbPqmGrAOcp2olC3J7zinoVq8g/edit?usp=sharing">
                                                        <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                                    </a>
                                                </p>                   
                                        </Card.Body>
                                        
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card >
                                        <Card.Header>&raquo; New Patient Information</Card.Header>
                                        <center>
                                            <Card.Img variant="top" className="img-forms"  src={patientforms} />
                                        </center>
                                        <Card.Body>
                                            <p>

                                             <a target="_blank" rel="noopener noreferrer" href={patientinfo} download="newpatientform.pdf">
                                                 <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                            </a>    
                                            <br></br>      <br></br>
                                                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1dRa8vtUwqSeONwI8JH54K7G5ZB7s8YvkrB0P3EDF5-A/edit">
                                                        <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                                    </a>  
                                            </p>                               
                                        </Card.Body>
                                       
                                    </Card>
                                </Col>
                                
                                {/* <Col md={6}>
                                    <Card >
                                        <Card.Header>&raquo; Patient History 2</Card.Header>
                                        <Card.Footer className="text-left">
                                                <p>
                                                    <a target="_blank" rel="noopener noreferrer" href={patienthist2} download="patient-history-2.pdf">
                                                        <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                                    </a>
                                                    <br></br>      <br></br>
                                                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1I7KEE7BYd_0C20MePzFo6lHN3nMW0cUq9KyPui24YuU/edit">
                                                        <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                                    </a>
                                                </p>
                                       
                                        </Card.Footer>
                                    </Card>
                                </Col> */}
                        </Row> 
                        {/* <Row className="justify-content-md-left">
                                <Col md={6}>
                                    <Card >
                                        <Card.Header>&raquo; Patient History 3</Card.Header>
                                        <Card.Footer className="text-left">
                                                <p>
                                                    <a target="_blank" rel="noopener noreferrer" href={patienthist3} download="patient-history-3.pdf">
                                                        <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                                    </a>
                                                    <br></br>      <br></br>
                                                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1nmWs1fipoTMmKz2Z48f71vUfZikJFq0dpLybFJRKJGM/edit?usp=sharing">
                                                        <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                                    </a>
                                                </p>
                                       
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card >
                                        <Card.Header>&raquo; Patient History 4</Card.Header>
                                       
                                        <Card.Footer className="text-left">
                                        <p>
                                                     <a target="_blank" rel="noopener noreferrer" href={patienthist4} download="patient-history-4.pdf">
                                                        <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                                    </a>
                                                    <br></br>      <br></br>
                                                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1Zqw-CvY6c58vlArljvFOKFs8y9pZseZ99qiqYGhOEgo/edit?usp=sharing">
                                                        <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                                    </a>
                                                </p>
                                        
                                        </Card.Footer>
                                    </Card>
                                </Col> 
                        </Row>*/}
                        {/* <Row className="justify-content-md-left"> 
                                <Col md={12}>
                                    <Card >
                                        <Card.Header>&raquo; New Patient Information</Card.Header>
                                        <Card.Body>
                                            <p>

                                             <a target="_blank" rel="noopener noreferrer" href={patientinfo} download="newpatientform.pdf">
                                                 <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                            </a>    
                                            <br></br>      <br></br>
                                                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1dRa8vtUwqSeONwI8JH54K7G5ZB7s8YvkrB0P3EDF5-A/edit">
                                                        <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                                    </a>  
                                            </p>                               
                                        </Card.Body>
                                       
                                    </Card>
                                </Col>
                        </Row>
                */}
                   </Col>
                </Row>
          </Container>
        );
    }
}
export default Forms;