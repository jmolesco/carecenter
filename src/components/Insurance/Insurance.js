import React, { Component } from 'react';
import { Container, Row, Col, CardDeck, Button, Image,  Carousel, Alert,Card,ListGroup,CardColumns } from 'react-bootstrap';
import cigna from  '../../images/cigna.PNG';
import coresource from  '../../images/coresource.png';

class Insurance extends Component {

    render() 
    {
        return (
            <Container>
                    <Row className="justify-content-md-center">
                        <Col md={12}>
                        <Alert  variant={"primary"} className={"remove-border"} >
                            <hr></hr>
                                <h4>  
                                    <marquee> Network Insurance Plans </marquee>
                                </h4>
                            <hr></hr>
                            <p>This list is not inclusive of all insurance plans. Our practice accepts almost all major
insurance plans. </p>
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-AETNA-1">
                   <Col md={12}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>AARP MedicareComplete Plus HMO-POS</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"} />
                                </center>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Aetna Choice POS</ListGroup.Item>
                                        <ListGroup.Item>Aetna Choice POS II</ListGroup.Item>
                                        <ListGroup.Item>Aetna HMO</ListGroup.Item>
                                        <ListGroup.Item>Aetna Managed Choice (MC) POS</ListGroup.Item>
                                        <ListGroup.Item>Aetna NAP - PPO</ListGroup.Item>
                                        <ListGroup.Item>Aetna Open Access POS</ListGroup.Item>
                                        <ListGroup.Item>Aetna Open Choice POS</ListGroup.Item>
                                        <ListGroup.Item>Aetna Open Choice PPO</ListGroup.Item>
                                        <ListGroup.Item>Aetna Select Choice EPO</ListGroup.Item>
                                        <ListGroup.Item>Aetna Select POS</ListGroup.Item>
                                        <ListGroup.Item>Aetna Signature Administrators PPO</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"}/>
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Aetna Choice POS II</small>
                                </Card.Footer>                                
                            </Card>
                    </CardDeck>
             
                   </Col>
                </Row>
                
 
                {/* <Row className="justify-content-md-center 2nd-col-BlueCross">
                   <Col md={12}>
                   <CardDeck>
                             <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.assurant.com/images/assurant/nextgen/assurant-logo.png?sfvrsn=2ad9be04_2"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Assurant</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross Blue Shield PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross Blue Shield HMO W/ Referral</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 3rd-col">
                   <Col md={12}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbsil.com/bcchp/img/bcbsil-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross Community Family Health Plan Cigna</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbsil.com/bcchp/img/bcbsil-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross Medicare Advantage</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna PPO & Open Access Plans</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 4th-col">
                   <Col md={12}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={coresource} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">CoreSource</small>
                                </Card.Footer>                                
                            </Card>

                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.geha.com/images/default-source/geha-logos/geha.png?sfvrsn=bcf8cb8b_2"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Coventry Geha</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://arrowheadcenter.nmsu.edu/wp-content/uploads/2018/08/HealthSprint-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">HealthSprint</small>
                                </Card.Footer>                                
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 5th-col">
                   <Col md={12}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.humana.com/dist/hcom/static/icons/humana-logo.svg"}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana</small>
                                </Card.Footer>                                
                            </Card>

                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.illinois.gov/hfs/PublishingImages/HFSLogoCurveV2.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Illinois Medicaid</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Meridian</small>
                                </Card.Footer>                                
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 6th-col">
                   <Col md={12}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.meritain.com/Media/Default/images/logo.png"}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Meritain Health</small>
                                </Card.Footer>                                
                            </Card>

                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://static.wixstatic.com/media/b1032a_5c45308387f94e048bc42a00611b49f0~mv2.png/v1/fill/w_224,h_84,al_c,q_80,usm_0.66_1.00_0.01/logo-for-web.webp"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">PHCS(Private Healthcare Systems)</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humanamilitary.com/media/Sites/HumanaMilitary/logo/hum_tricare_logo_rgb_pos.png" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Tricare East</small>
                                </Card.Footer>                                
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 7th-col">
                   <Col md={12}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="http://www.upnus.com/images/unified-physicians-network.jpg"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Unified Physiciams Network W/ Referral</small>
                                </Card.Footer>                                
                            </Card>

                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Medicare Advantage</small>
                                </Card.Footer>                                
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
 */}
         </Container>
        );
    }
}
export default Insurance;