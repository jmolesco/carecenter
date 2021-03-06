import React, { Component  } from 'react';
import { Container, Row, Col, Carousel, Alert, Card, CardDeck } from 'react-bootstrap';
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
import skin from '../../images/skin.png';
import announcement from '../../images/bullhorn.png';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Blink from 'react-blink-text';
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
                                    alt="Dr. Cynthia Yango-Eugenio posing in her office.She is an allergist in Buffalo Grove, Algonquin Illinois
                                        Arlington Heights and Wheeling
                                    "

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
                                    alt="The looks of Allergist Cynthia Yango-Eugenio office in Buffalo Grove, Algonquin Illinois
                                    Arlington Heights and Wheeling"

                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A3}
                                    alt="Office in Buffalo Grove, Algonquin Illinois
                                    Arlington Heights and Wheeling"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A4}
                                    alt="Allergist in Buffalo Grove,Allergist in Algonquin Illinois
                                    Allergist in Arlington Heights and Allergist in Wheeling"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={A1}
                                    alt="Allergist in Buffalo Grove,Allergist in Algonquin Illinois
                                    Allergist in Arlington Heights and Allergist in Wheeling"
                                />
                                     />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <Alert variant={"primary"} className={"text-center remove-border"} >
                            <hr></hr>
                            <h4>   <marquee> Welcome to our new homepage! </marquee>
                            </h4>
                            <hr></hr>
                            <p>
                                We provide high quality, compassionate, and competent care to all patients, aimed at awareness, prevention and management of allergic, asthmatic and immunologic diseases for all ages. Check them out below!
                            </p>
                   
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
                                </div>
                          
                        </Alert>
                    </Col>

                </Row>
                <Row className="justify-content-md-center hidden" hidden={this.isClose}>
                    <Col md={12}>
                        <Alert variant={"primary"} className={"text-center remove-border"} >
                            <hr></hr>
                            <h5>
                                <Blink color='#e83e8c' text='We are now accepting Telemedicine! Book your appointment now!' fontSize='20'>
                                     We are now accepting Telemedicine! Book your appointment now!
                                </Blink>                                 
                            </h5>
                            <hr></hr>
                        </Alert>
                    </Col>

                </Row>
                <Row className="justify-content-md-center" >
                    <Col md={7}>
                        <CardDeck>
                            <Card style={{ marginBottom: "10px" }}>
                                <center>
                                    <Card.Img variant="top" alt="Care Center for Allergy and Asthma,Allergist in Buffalo Grove,Allergist in Algonquin Illinois,Allergist in Arlington Heights,Allergist  in Wheeling Illinois" className="card-img" src={chest} />
                                </center>
                                <Card.Body>
                                    <Card.Title>Asthma/Chest & Lung Problem
                                </Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Chronic bronchitis, wheezing, short<span className="fillers1">-</span>ness of breath, difficulty breathing, hy<span className="fillers1">-</span>peractive air<span className="fillers">-</span>ways, nighttime cough, chest tightness,
                                    exer<span className="fillers">-</span>cise intolerance, chest pain or pressure, failure to take full breath, rapid breathing, bron<span className="fillers">-</span>chitis, pro<span className="fillers1">-</span>ductive cough,
                                     cold air in<span className="fillers">-</span>tolerance, exer<span className="fillers">-</span>cise induced asthma, work related asthma, nighttime asthma, cough va<span className="fillers1">-</span>riant asthma, aller<span className="fillers">-</span>gy induced asthma,
                                     animal dander induced asthma, cough<span className="fillers1">-</span>ing when laughing or talking, frequent wet cough, blood tinged cough, chest discomfort,
                                    discolored mucus from nose or cough</Card.Text>
                                </Card.Body>

                            </Card>
                        </CardDeck>
                        <CardDeck>
                            <Card style={{ marginBottom: "10px" }}>

                                <center>
                                    <Card.Img variant="top" alt="Care Center for Allergy and Asthma,Allergist in Buffalo Grove,Allergist in Algonquin Illinois,Allergist in Arlington Heights,Allergist  in Wheeling Illinois" className="card-img" src={food} />
                                </center>
                                <Card.Body>
                                    <Card.Title>Food Allergy</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Food allergy, gluten sensitivity, nut al<span className="fillers1">-</span>lergy, aspirin allergy, vomiting and/or stomach cramps, diarrhea, hives, shortness of breath, wheezing, repe<span className="fillers1">-</span>titive cough, shock or circu<span className="fillers">-</span>latory col<span className="fillers1">-</span>\
                                lapse, tight,

                                hoarse throat, trouble swallowing, swelling of the tongue, affecting the ability to talk or breathe, weak pulse, pale or blue coloring of skin, dizziness or feeling faint, turning blue,drop in blood pressure (feeling faint, confused, weak, passing out), loss of consciousness, chest pain, a weak or “thready” pulse, sense of “im<span className="fillers1">-</span>pending doom”, itching or eczema and nasal congestion.
                                </Card.Text>
                                </Card.Body>

                            </Card>

                        </CardDeck>
                        <CardDeck>


                            <Card style={{ marginBottom: "10px" }}>

                                <center>
                                    <Card.Img variant="top" alt="Care Center for Allergy and Asthma,Allergist in Buffalo Grove,Allergist in Algonquin Illinois,Allergist in Arlington Heights,Allergist  in Wheeling Illinois" className="card-img" src={gastro} />
                                </center>
                                <Card.Body>
                                    <Card.Title >Gastro/Intestinal</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Abdominal pain, diarrhea, nausea or vomit<span className="fillers">-</span>ing,dizziness or lightheadedness, constriction of airway, rapid pulse, low blood pressure, food intolerance, sto<span className="fillers1">-</span>mach cramp, rectal bleeding(in children) colic, constipation, bloat<span className="fillers">-</span>ing, abdominal cramps, gassiness,difficulty swallowing       </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardDeck>
                        <CardDeck>
                            <Card style={{ marginBottom: "10px" }}>

                                <center>
                                    <Card.Img variant="top" alt="Care Center for Allergy and Asthma,Allergist in Buffalo Grove,Allergist in Algonquin Illinois,Allergist in Arlington Heights,Allergist  in Wheeling Illinois" className="card-img" src={skin} />
                                </center>
                                <Card.Body>
                                    <Card.Title>Skin Allergy</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Eczema, Hives, Urticaria, Angioedema, Contact Dermatitis, Food reaction, Drug
                                reaction, Pho<span className="fillers">-</span>tosensitivity, itchy, scaly, red, dry rash, weeps clear fluid, raised bumps
                                and blisters, raised, flat, itchy bumps that may also be tender
                                Skin allergy due to Latex, pet dander or poison ivy, Cold or hot temperatures, Pollen,
                                Sunlight, Water, Food, Insects, Drugs                                </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardDeck>
                        <CardDeck>

                            <Card style={{ marginBottom: "10px" }}>

                                <center>
                                    <Card.Img variant="top" alt="Care Center for Allergy and Asthma,Allergist in Buffalo Grove,Allergist in Algonquin Illinois,Allergist in Arlington Heights,Allergist  in Wheeling Illinois" className="card-img" src={eyes} />
                                </center>
                                <Card.Body>
                                    <Card.Title >Eyes Allergy</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Eyes sensitive to light, itchy eyes, red eyes, burning of eyes, blurring of eyes, crusting of eyes, pink eyes, under eye puffiness, dark cir<span className="fillers">-</span>cles under the eyes, swelling of the eyes, pain eye
                            </Card.Text>
                                </Card.Body>

                            </Card>


                        </CardDeck>
                        <CardDeck>
                            <Card style={{ marginBottom: "10px" }}>

                                <center>
                                    <Card.Img variant="top" alt="Care Center for Allergy and Asthma,Allergist in Buffalo Grove,Allergist in Algonquin Illinois,Allergist in Arlington Heights,Allergist  in Wheeling Illinois" className="card-img" src={generalsymptom} />
                                </center>
                                <Card.Body>
                                    <Card.Title >General Symptoms</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Malaise, flu like symptoms, fatigue, “mood in the cloud” feeling, sleepiness, not sleeping well, anaphylaxis, itch<span className="fillers1">-</span>ing/swelling or tingling or itching of the mouth, swelling of the lips, face, tongue or other parts of the body
                                </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardDeck>
                    </Col>
                    <Col md={5}>

                        <CardDeck>
                            <Card style={{ marginBottom: "10px" }}>
                                <center>
                                    <Card.Img variant="top" alt="Care Center for Allergy and Asthma,Allergist in Buffalo Grove,Allergist in Algonquin Illinois,Allergist in Arlington Heights,Allergist  in Wheeling Illinois" className="card-img" src={announcement} />
                                </center>
                                <Card.Body>
                                    <Card.Title>Facebook Latest Updates
                                </Card.Title>
                                    <hr />
                                    <Card.Text>
                                        <center>
                                            <div class="fb-page" data-href="https://www.facebook.com/DrCynthiaYangoEugenio/"
                                                data-tabs="timeline" data-width="380" data-height="724" data-small-header="false"
                                                data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                                <blockquote cite="https://www.facebook.com/DrCynthiaYangoEugenio/" class="fb-xfbml-parse-ignore">
                                                    <a href="https://www.facebook.com/DrCynthiaYangoEugenio/">Care Center for Allergy and Asthma</a>
                                                </blockquote>
                                            </div>
                                        </center>
                                    </Card.Text>
                                </Card.Body>

                            </Card>



                        </CardDeck>
                        <CardDeck>
                            <Card style={{ marginBottom: "10px" }}>
                                <center>
                                    <Card.Img variant="top" alt="Care Center for Allergy and Asthma,Allergist in Buffalo Grove,Allergist in Algonquin Illinois,Allergist in Arlington Heights,Allergist  in Wheeling Illinois" className="card-img" src={announcement} />
                                </center>
                                <Card.Body>
                                    <Card.Title>Twitter Latest Updates
                                </Card.Title>
                                    <hr />
                                    <Card.Text>
                                        <center>
                                           <div className="twitter-embed">
                                                <TwitterTimelineEmbed
                                                sourceType="profile"
                                                screenName="DrYangoEugenio"
                                                options={{
                                                    height: 703
                                                }}
                                                theme="light"
                                                noHeader="false"
                                                noBorders="false"
                                                noFooter="false"
                                                ></TwitterTimelineEmbed>
                                            </div>
                                        </center>
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