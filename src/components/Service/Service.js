import React, { Component } from 'react';
import { Container, Row, Col,  Alert,Card,CardDeck } from 'react-bootstrap';
import medical from  '../../images/medical.png';
import detailedcons from  '../../images/detailedcons.png';
import skin from  '../../images/skin.png';
import asthma from  '../../images/asthma.png';
import pulmon from  '../../images/pulmon.png';
import chemicalandfood from  '../../images/chemicalandfood.png';
import environment from  '../../images/environment.png';
import contact from  '../../images/contact.png';
import intolerance from  '../../images/intolerance.png';
import ask from  '../../images/ask.png';
import patient from  '../../images/patien.png';
import dietary from  '../../images/dietary.png';
import writer from  '../../images/writer.png';
import injection from  '../../images/injection.png';
import followup from  '../../images/followup.png';
import appointment from  '../../images/appointment.png';
import freindly from  '../../images/freindly.png';
import phonecall from  '../../images/24phonecall.png';
class Service extends Component {

    render() 
    {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                    <Alert  variant={"danger"} className={"remove-border"} >
                            <hr></hr>
                                <h4>  
                                    <marquee> Services </marquee>
                                </h4>
                            <hr></hr>
                            <p> Services offered.</p>
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col">
                   <Col md={11}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={medical} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Medical</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={detailedcons} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Detailed Initial Consult</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={skin} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Allergy Skin Testing</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 2nd-col">
                   <Col md={11}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={asthma} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Comprehensive Asthma Evaluation and Treatment</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={pulmon} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            Pulmonary Function Test
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={chemicalandfood} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Food and Chemical Allergy Diagnosis and Treatment</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 3rd-col">
                   <Col md={11}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={environment} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Environmental and Allergy Evaluation and Management</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={contact} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Contact Sensitive Evaluation and Treatment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={intolerance} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Occupational Allergy/Intolerance Diagnosis and Management</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 4th-col">
                   <Col md={11}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={ask} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Preventive Approach to Allergic 
                                    Problems&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={patient} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Patient and Family Education in Allergy/Asthma Conditions</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={dietary} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Nutritional and Dietary Counseling Relating to Allergic Problems</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 5th-col">
                   <Col md={11}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={writer} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Individualized Written Treatment Plans</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={injection} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Immunotherapy/Allergy Injections</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={followup} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Follow Up Care</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 6th-col">
                   <Col md={11}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={phonecall} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24 hour physician phone call coverage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={appointment} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Immediate, morning, evening, and medical appointments</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={freindly} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Friendly appointment and allergy injection reminders</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
        </Container>
        );
    }
}
export default Service;