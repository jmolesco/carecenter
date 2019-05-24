import React, { Component } from 'react';
import { Container, Row, Col, Card,Button} from 'react-bootstrap';
import doc from '../../images/doc.jpg'; 
import {Link} from 'react-router-dom';
class AboutUs extends Component {

    render() 
    {
        return (
            <Container>
                 <Row className="justify-content-md-left">
                    <Col md={4}>
                        <Card className="text-left">
                            <center>
                              <Card.Img variant="top" src={doc} />
                            </center>
                            <Card.Footer className="text-center">
                                <small className="text-muted text-center">Dr. Cynthia Yango-Eugenio, MD</small>
                            </Card.Footer>
                       </Card>
                    </Col>
                    <Col md={8}>
                        <Card className="text-center">
                            <Card.Header>About the Doctor</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    Dr. Cynthia Yango-Eugenio,MD is certified by the American Board of Allergy, Asthma
                                    and Immunology. She is a solo Allergy, Asthma and Immunology practitioner for
                                    the past 30 years in Buffalo Grove, Illinois.Dr. Yango-Eugenio recently opened
                                    up another Allergy & Asthma specialty office in Algonquin, Illinois.
                                    <br /> <br />
                                    
                                    Cynthia Yango-Eugenio grew up in Manila and attended High School at FEU Girls
                                    High School where she was a consistent scholar. She completed Bachelor of
                                    Science major in Zoology at the University of the Philippines College of Arts and
                                    Sciences. Several times she made it to the Deanʼs list and completed the four
                                    year course in three years and one semester. 
                                      <br /> <br />
                                      Prior to joining the Class of 1979 University of The Philippines College of
                                    Medicine, Dr. Yango-Eugenio worked at the Biomedical Division of the Philippine
                                    Atomic Energy Commission as a research scientist. She finished Pediatric
                                    residency at UP-PGH and had to retrain in the same field at Lincoln Hospital in
                                    Bronx, New York and Cook County Medical Center in Illinois. Dr. Yango-Eugenio
                                    was a fellow in Allergy, Asthma and Immunology at Cornell University. She
                                    finished her fellowship at Northwestern University-Feinberg Medical Center. She has done several researches as a fellow particularly on drug allergy.
                                   <br /> <br />
                                   She was named one of the outstanding women of Style and Achievement (Prism
                                    Award) by the Philippine Times in 1997. She has been an active member of the
                                    Chicago-Northwestern Indiana chapter of the University of the Philippines
                                    Medical Alumni Society and Academic (UPMASA) for the past 24 years. She has
                                    served as the chapterʼs PRO and most recently the chapterʼs President.
                                    She is an active member of the Illinois Society of Allergy, Asthma and Immunology. She is on staff at Alexian Brothers Medical Center, AMITA Health St. Alexius Medical
                                    Center, Northwest Community Hospital, Advocate Condell Medical Center, Advocate
                                    Sherman Medical Center <br /> <br />
                                    Cynthia Yango-Eugenio resides in South Barrington, Illinois with her husband
Rene Eugenio. The couple has two sons, Ryneal and Roelle both graduates of
Northwestern University. Ryneal is a doctor training in General Surgery. Roelle is
also a physician training in Anesthesiology.
                                    </Card.Text>
                                    <br />
                                </Card.Body>
                                <Card.Footer>
                                                    <Link  to="/staff">
                                                        <Button variant="outline-danger" style={{ width: '100%' }} ><i className="fa fa-users"> &nbsp;Check our Staff</i></Button>
                                                    </Link>
                                </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default AboutUs;