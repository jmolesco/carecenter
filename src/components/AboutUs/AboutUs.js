import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image,  Carousel, Alert,Card,CardDeck,CardColumns } from 'react-bootstrap';
import doc from '../../images/doc.jpg'; 
class AboutUs extends Component {

    render() 
    {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <Card className="text-left">
                            <Card.Header><b>&raquo; Our Doctors Staff</b></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    The Care Center for Allergy and Asthma’s doctor and staff have been providing high quality and comprehensive care for conditions relating to Allergy, Asthma, and Immunology in the Northwest suburbs of Chicago for the past 25 years. The staff is led by a board certified allergist, asthma specialist, and immunologist who believes in a holistic approach to treatment. Our physician offers state of the art allergy and asthma evaluation. She utilizes an array of treatment options suited to the needs and conditions of her individual patients. Among many of her therapeutic options are allergy contact avoidance which may include environmental control and food avoidance, nutritional counseling, dietary management, medications, and allergy immunotherapy. Our physician strives for accurate and efficient diagnosis as well as immediate and long lasting allergy relief for patients.                
                                    Our staff consists of well trained medical and office personnel who are courteous and eager to assist with patient needs. We provide quality and individual care.The billing department bills most insurance companies and assists patients with their claims. We also offer a variety of payment plans and options suited to the patients’ needs and budget.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </Col>
                </Row>
                <Row className="justify-content-md-left">
                    <Col md={4}>
                        <Card className="text-left">
                            <center>
                              <Card.Img variant="top" src={doc} />
                            </center>
                            <Card.Footer className="text-center">
                                <small className="text-muted text-center">Doctor Cynthia Yango-Eugenio</small>
                            </Card.Footer>
                       </Card>
                    </Col>
                    <Col md={8}>
                        <Card className="text-center">
                            <Card.Header>About her</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    Dr. Cynthia Yango-Eugenio is certified by the American Board of Allergy, Asthma and Immunology.   She is a solo Allergy, Asthma and Immunology practitioner for the past 21 years in Buffalo Grove, Illinois.  Dr. Yango-Eugenio recently opened up another Allergy & Asthma specialty office in Algonquin, Illinois.  
                                    <br /> <br />
                                    Cynthia Yango-Eugenio grew up in Manila and attended High School at FEU Girls High School where she was a consistent scholar.  She completed Bachelor of Science major in Zoology at the University of the Philippines College of Arts and Sciences.  Several times she made it to the Dean’s list and completed the four year course in three years and one semester. 
                                    <br /> <br />
                                    Prior to joining the Class of 1979 University of The Philippines College of Medicine, Dr. Yango-Eugenio worked at the Biomedical Division of the Philippine Atomic Energy Commission as a research scientist.  She finished Pediatric residency at UP-PGH and had to retrain in the same field at Lincoln Hospital in Bronx, New York and Cook County Medical Center in Illinois.  Dr. Yango-Eugenio was a fellow in Allergy, Asthma and Immunology at Cornell University.   She finished her fellowship at Northwestern University-Feinberg Medical Center. 
                                    <br /> <br />
                                    She was named one of the outstanding women of Style and Achievement (Prism Award) by the Philippine Times in 1997.  She has been an active member of the Chicago-Northwestern Indiana chapter of the University of the Philippines Medical Alumni Society and Academic (UPMASA) for the past 17 years.  She has served as the chapter’s PRO and most recently the chapter’s President.  
                                    <br /> <br />
                                    Cynthia Yango-Eugenio resides in South Barrington, Illinois with her husband Rene Eugenio.  The couple has two sons, Ryneal and Roelle graduates of Northwestern University, Ryneal attending Kansas City University of Medicine and Biosciences.    </Card.Text>
                                    <br />
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default AboutUs;