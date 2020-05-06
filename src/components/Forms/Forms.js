import React, { Component } from 'react';
import { Container, Row, Col,  Button,   Alert, Card } from 'react-bootstrap';
// import patient1 from '../../images/patient1.jpg';
// import patient2 from '../../images/patient2.jpg';
// import patient3 from '../../images/patient3.jpg';
// import patient4 from '../../images/patient4.jpg';
import patientinfo from '../../forms/new-patient.pdf';
import patienthist1 from '../../forms/patient-history-1.pdf';
import patienthist2 from '../../forms/patient-history-2.pdf';
import patienthist3 from '../../forms/patient-history-3.pdf';
import patienthist4 from '../../forms/patient-history-4.pdf';
// import patientrecords from '../../images/medical-history.png'; 
// import patientforms from '../../images/patient-forms.png'; 
class Forms extends Component {

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <Alert variant={"primary"} className={"remove-border"} >
                            <hr></hr>
                            <h4>
                                <marquee> Forms </marquee>
                            </h4>
                            <hr></hr>
                            <p> Forms available to Download and print  and bring on your scheduled Appointment with Dr. Cynthia Yango-Eugenio</p>
                            <p>
                            <div style={{ color: 'transparent', height: ".05px" }}>
                                    <h1>
                                        allergist in Buffalo Grove Illinois
                                </h1>
                                    <h1>
                                        allergist Algonquin Illinois
                                </h1>
                                    <h1>
                                        allergist Wheeling Illinois
                                </h1>
                                    <h1>
                                        allergist Arlington Heights
                                </h1>
                                    <h2>
                                        allergist in Buffalo Grove Illinois
                                </h2>
                                    <h2>
                                        allergist Algonquin Illinois
                                </h2>
                                    <h2>
                                        allergist Wheeling Illinois
                                </h2>
                                    <h2>
                                        allergist Arlington Heights
                                </h2>
                                    <h3>
                                        allergist in Buffalo Grove Illinois
                                </h3>
                                    <h3>
                                        allergist Algonquin Illinois
                                </h3>
                                    <h3>
                                        allergist Wheeling Illinois
                                </h3>
                                    <h3>
                                        allergist Arlington Heights
                                </h3>
                                    <h4>
                                        allergist in Buffalo Grove Illinois
                                </h4>
                                    <h4>
                                        allergist Algonquin Illinois
                                </h4>
                                    <h4>
                                        allergist Wheeling Illinois
                                </h4>
                                    <h4>
                                        allergist Arlington Heights
                                </h4>
                                    <h5>
                                        allergist in Buffalo Grove Illinois
                                </h5>
                                    <h5>
                                        allergist Algonquin Illinois
                                </h5>
                                    <h5>
                                        allergist Wheeling Illinois
                                </h5>
                                    <h5>
                                        allergist Arlington Heights
                                </h5>
                                </div>       </p>
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-md-left">
                    <Col md={12}>
                        <Row className="justify-content-md-left">
                            <Col md={6}>
                                <Card >
                                    <Card.Header>&raquo; Patient History 1</Card.Header>
                                    <Card.Footer className="text-left">
                                        <p>
                                            <a target="_blank" rel="noopener noreferrer" href={patienthist4} download="patient-history-1.pdf">
                                                <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                            </a>
                                            <br></br>      <br></br>
                                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1timXgxE0zv9MeZpcgevWxiU9dftxQ4d6IYcOYipHyyY/edit?usp=sharing">
                                                <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                            </a>
                                        </p>

                                    </Card.Footer>

                                   
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card >
                                    <Card.Header>&raquo; Patient History 2</Card.Header>
                                    {/* <Card.Body>
                                            <Image src={patient2} className="image-patient"/>
                                        </Card.Body> */}
                                    <Card.Footer className="text-left">
                                        <p>
                                            <a target="_blank" rel="noopener noreferrer" href={patienthist2} download="patient-history-2.pdf">
                                                <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                            </a>
                                            <br></br>      <br></br>
                                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/18zHhRkrsPrrtpWOrEGaLp3a1F073zyPCHvXyiulAd5U/edit?usp=sharing">
                                                <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                            </a>
                                        </p>

                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col md={6}>
                                <Card >
                                    <Card.Header>&raquo; Patient History 3</Card.Header>
                                    <Card.Footer className="text-left">
                                        <p>
                                            <a target="_blank" rel="noopener noreferrer" href={patienthist1} download="patient-history-3.pdf">
                                                <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                            </a>
                                            <br></br>      <br></br>
                                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/13T2Z_e4viZlTCI5Xzinow6JYtMGsnBkE67AchIIuhP8/edit?usp=sharing">
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
                                            <a target="_blank" rel="noopener noreferrer" href={patienthist3} download="patient-history-4.pdf">
                                                <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                            </a>
                                            <br></br>      <br></br>
                                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/12NI9YQnvJtHi2Iird5zmP4ZpAUW2rpR57effZHbOvLM/edit?usp=sharing">
                                                <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                            </a>
                                        </p>

                                    </Card.Footer>
                                    
                                </Card>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col md={12}>
                                <Card >
                                    <Card.Header>&raquo; New Patient Information</Card.Header>
                                    <Card.Body>
                                        <p>

                                            <a target="_blank" rel="noopener noreferrer" href={patientinfo} download="newpatientform.pdf">
                                                <Button variant="outline-danger" style={{ width: '100%' }}>Download PDF File</Button>
                                            </a>
                                            <br></br>      <br></br>
                                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1mozeK-fiJuc3kjgMjHbiEtsXxFQRMSOZ/edit">
                                                <Button variant="outline-info" style={{ width: '100%' }} >Fill Up Online</Button>
                                            </a>
                                        </p>
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