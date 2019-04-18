import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image,  Carousel, Alert,Card,CardDeck,CardColumns } from 'react-bootstrap';
import whatweoffer from '../../images/whatweoffer.png';
import chest from '../../images/chest2.png';
import eyes from '../../images/eye2.png';
import food from '../../images/food.png';
import generalsymptom from '../../images/generalsymptom.png';
import gastro from '../../images/gastro.png'; 
class Home extends Component {

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm="12">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a297a68a3%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a297a68a3%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a297a68a6%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a297a68a6%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a297a68a9%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a297a68a9%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%2320232a%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={11}>
                        <Alert  variant={"danger"}>
                            &raquo; Welcome to our new homepage!<br />
                            &raquo; We provide management for the following symptoms for all ages  
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={eyes} />
                                </center>
                                <Card.Body>
                                <Card.Title >Eyes Allergy</Card.Title>
                                <hr />
                                <Card.Text>
                                Eyes sensitive to light, itchy eyes, red eyes, burning of eyes, blurring of eyes, crusting of eyes, pink eyes, under eye puffiness, dark circles under the eyes, swelling of the eyes, pain eye 
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={food} />
                                </center>
                                <Card.Body>
                                <Card.Title>Food Allergy</Card.Title>
                                <hr />
                                <Card.Text>
                                Food allergy, gluten sensitivity, nut allergy, aspirin allergy, smoke allergy, wheat allergy, spring allergy, mold allergy, dust mite allergy, animal dander allergy.
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={generalsymptom} />
                                </center>
                                <Card.Body>
                                <Card.Title >General Symptoms</Card.Title>
                                <hr/>
                                <Card.Text>
                                Malaise, flu like symptoms, fatigue, “mood in the cloud” feeling, sleepiness, not sleeping well, anaphylaxis, itching/swelling or tingling or itching of the mouth, swelling of the lips, face, tongue or other parts of the body
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col md={10}>
                        <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={chest} />
                                </center>
                                <Card.Body>
                                <Card.Title>Chest and Lung Problem</Card.Title>
                                <hr />
                                <Card.Text>
                                    Chronic bronchitis, wheezing, shortness of breath, difficulty breathing, hyperactive airways, nighttime cough, chest tightness, exercise intolerance, chest pain or pressure,failure to take full breath, rapid breathing, bronchitis, productive cough,cold air intolerance, exercise induced asthma, work related asthma, nighttime asthma, cough variant asthma,allergy induced asthma, animal dander induced asthma, coughing when laughing or talking, frequent wet cough, blood tinged cough, chest discomfort, discolored mucus from nose or cough</Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={gastro} />
                                </center>
                                <Card.Body>
                                <Card.Title >Gastro/Intestinal</Card.Title>
                                <hr/>
                                <Card.Text>
                                Abdominal pain, diarrhea, nausea or vomiting,dizziness or lightheadedness, constriction of airway, rapid pulse, low bloodpressure, food intolerance, stomach cramp, rectal bleeding(in children) colic,constipation, bloating, abdominal cramps, gassiness,difficulty swallowing       </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>);
    }
}
export default Home;