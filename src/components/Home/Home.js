import React, { Component } from 'react';
import { Container, Row, Col,  Carousel, Alert,Card,CardDeck } from 'react-bootstrap';
// import Marquee from 'react-text-marquee';
import chest from '../../images/chest2.png';
import eyes from '../../images/eye2.png';
import food from '../../images/food.png';
import generalsymptom from '../../images/generalsymptom.png';
import gastro from '../../images/gastro.png'; 
import A1 from '../../images/1.jpg'; 
import A2 from '../../images/2.jpg'; 
import A3 from '../../images/3.jpg'; 
import A4 from '../../images/4.jpg'; 
import A5 from '../../images/5.jpg'; 
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
                                    src={A5}
                                    alt="First slide"
                                    
                                />
                                <Carousel.Caption>
                                    <h3>Care Center for Allergy and Asthma</h3>
                                    <h4>Dr. Cynthia Yango-Eugenio</h4>
                                     {/* <p>We provide high quality, compassionate, and competent care to all patients, aimed at awareness, prevention and management of allergic, asthmatic and immunologic diseases.</p> 
                              */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A2}
                                    alt="Third slide"
                                    
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A3}
                                    
                                     />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    {/* //<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A4}
                                    
                                     />

                                <Carousel.Caption>
                                    <h3>Fourth slide label</h3>
                                    {/* //<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A1}
                                    
                                     />

                                <Carousel.Caption>
                                    <h3>Fifth slide label</h3>
                                    {/* //<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <Alert  variant={"danger"} className={"text-center remove-border"} >
                          <hr></hr>
                            <h4>   <marquee> Welcome to our new homepage! </marquee>
                            </h4>
                            <hr></hr>
                            <p>
                            We provide high quality, compassionate, and competent care to all patients, aimed at awareness, prevention and management of allergic, asthmatic and immunologic diseases for all ages. Check them out below!
                            </p>
                       </Alert>
                    </Col>
                    {/* <Col md={11}>
                    
                    <Alert  variant={"danger"}>
                    <hr></hr>
                            &raquo;We provide high quality, compassionate, and competent care to all patients, aimed at awareness, prevention and management of allergic, asthmatic and immunologic diseases for all ages.Check them out below! 
                    
                            <hr></hr>
                    
                        </Alert>
                    </Col> */}
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
                                Food allergy, gluten sensitivity, nut allergy,<span className="filler">-</span>aspirin<span className="filler">-</span>allergy,<span className="filler">-</span>smoke<span className="filler">-</span>al-lergy,wheat allergy, spring allergy, mold allergy, dust mite allergy, animal dander allergy.
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