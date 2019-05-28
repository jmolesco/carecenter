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
import A5 from '../../images/5.png'; 
import skin from  '../../images/skin.png';
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
                                    <h4>
                                        <b>
                                            Care Center for Allergy and Asthma
                                        </b>
                                    </h4>
                                    <h5>
                                        <b>
                                            Dr. Cynthia Yango-Eugenio, MD 
                                        </b>
                                    </h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A2}
                                    alt="Third slide"
                                    
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A3}
                                    
                                     />
                          </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A4}
                                    
                                     />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A1}
                                    
                                     />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <Alert  variant={"primary"} className={"text-center remove-border"} >
                          <hr></hr>
                            <h4>   <marquee> Welcome to our new homepage! </marquee>
                            </h4>
                            <hr></hr>
                            <p>
                            We provide high quality, compassionate, and competent care to all patients, aimed at awareness, prevention and management of allergic, asthmatic and immunologic diseases for all ages. Check them out below!
                            </p>
                       </Alert>
                    </Col>
                   
                </Row>
                <Row className="justify-content-md-center">
                   <Col md={12}>
                        <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={chest} />
                                </center>
                                <Card.Body>
                                <Card.Title>Asthma/Chest & Lung Problem</Card.Title>
                                <hr />
                                <Card.Text>
                                    Chronic bronchitis, wheezing, shortness of breath, difficulty breathing, hyperactive airways, nighttime cough, chest tightness,
                                    exercise intolerance, chest pain or pressure, failure to take full breath, rapid breathing, bronchitis, productive cough,
                                     cold air intolerance, exercise induced asthma, work related asthma, nighttime asthma, cough variant asthma, allergy induced asthma,
                                     animal dander induced asthma, coughing when laughing or talking, frequent wet cough, blood tinged cough, chest discomfort,
                                    discolored mucus from nose or cough</Card.Text>
                                </Card.Body>
                                
                            </Card>
                            
                        </CardDeck>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">                    
                    <Col md={12}>
                        <CardDeck>
                             <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={food} />
                                </center>
                                <Card.Body>
                                <Card.Title>Food Allergy</Card.Title>
                                <hr />
                                <Card.Text>
                                Food allergy, gluten sensitivity, nut allergy, aspirin allergy, vomiting and/or stomach cramps, diarrhea, hives, shortness of breath, wheezing, repetitive cough, shock or circulatory collapse, tight, 
                                
                                hoarse throat, trouble swallowing, swelling of the tongue, affecting the ability to talk or breathe, weak pulse, pale or blue coloring of skin, dizziness or feeling faint, turning blue,drop in blood pressure (feeling faint, confused, weak, passing out), loss of consciousness, chest pain, a weak or “thready” pulse, sense of “impending doom”, itching or eczema and nasal congestion.
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            
                        </CardDeck>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <CardDeck>
                        
                            
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={gastro} />
                                </center>
                                <Card.Body>
                                <Card.Title >Gastro/Intestinal</Card.Title>
                                <hr/>
                                <Card.Text>
                                Abdominal pain, diarrhea, nausea or vomiting,dizziness or lightheadedness, constriction of airway, rapid pulse, low blood pressure, food intolerance, stomach cramp, rectal bleeding(in children) colic,constipation, bloating, abdominal cramps, gassiness,difficulty swallowing       </Card.Text>
                                </Card.Body>
                                
                            </Card> 
                        </CardDeck>
                    </Col>
                </Row>
      
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <CardDeck>
                        <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img" src={skin} />
                                </center>
                                <Card.Body>
                                <Card.Title>Skin Allergy</Card.Title>
                                <hr />
                                <Card.Text>
                                Eczema, Hives, Urticaria, Angioedema, Contact Dermatitis, Food reaction, Drug
                                reaction, Photosensitivity, itchy, scaly, red, dry rash, weeps clear fluid, raised bumps
                                and blisters, raised, flat, itchy bumps that may also be tender
                                Skin allergy due to Latex, pet dander or poison ivy, Cold or hot temperatures, Pollen,
                                Sunlight, Water, Food, Insects, Drugs                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                      </CardDeck>  
                      </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={12}>
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
                            
                          
                        </CardDeck>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <CardDeck>
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
                </Container>);
    }
}
export default Home;