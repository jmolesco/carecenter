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
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">AARP MedicareComplete Plus HMO-POS</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Aetna Choice POS</small>
                                </Card.Footer>
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
                <Row className="justify-content-md-center 1st-col-AETNA-2">
                   <Col md={12}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"} />
                                </center>
                                <Card.Footer className="text-center" >
                                    <small className="text-muted text-center">Aetna HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Aetna Managed Choice (MC) POS</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"}/>
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Aetna NAP - PPO</small>
                                </Card.Footer>                                
                            </Card>
                    </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-AETNA-3">
                   <Col md={12}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"} />
                                </center>
                                <Card.Footer className="text-center" >
                                    <small className="text-muted text-center">Aetna Open Access POS</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Aetna Open Choice POS</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"}/>
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Aetna Open Choice PPO</small>
                                </Card.Footer>                                
                            </Card>
                    </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-AETNA-4">
                   <Col md={12}>
                   <CardDeck>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"} />
                                </center>
                                <Card.Footer className="text-center" >
                                    <small className="text-muted text-center">Aetna Select Choice EPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Aetna Select POS</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"}/>
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Aetna Signature Administrators PPO</small>
                                </Card.Footer>                                
                            </Card>
                    </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-BlueCross-1">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Beech Street Network PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Advantage HMO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross HMO Illinois</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-BlueCross-2">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross Medicare Advantage HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross Medicare Advantage HMO - POS</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross Medicare Advantage PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-BlueCross-3">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Cross PPO - Advocate Associate Medical Plan</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Precision Bronze HMO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-BlueCross-4">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Precision Gold HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Precision HMO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Precision Platinum HMO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Cigna-1">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Blue Precision Silver HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">BlueCare Direct</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna C - 5 POS</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Cigna-2">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna Health Partners POS</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna Health Partners PPO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna Open Access Plus POS</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Cigna-3">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna Open Access Plus State of Illinois POS</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">CIGNA Open Access POS</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna POS</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-1">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">CIGNA Open Access POS</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna POS</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-2">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">CIGNA Open Access POS</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cigna POS</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-3">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Cofinity PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Coventry HMO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Coventry One Select PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-4">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Coventry PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">First Health Network EPO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">First Health Network PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-5">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Great West Healthcare - Cigna HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Great West Healthcare - Cigna Open Access Plus HMO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Great West Healthcare - Cigna PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-6">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Healthlink PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">HFN Platinum EPO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">HFN PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-7">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">HFN Total Care PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">HST Care Connect HMO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana Advocate Health Care PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Humana-1">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana Choice POS</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana DuPage Medical Group HMO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana DuPage Medical Group HMO - HMO Select</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Humana-2">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana EPO - Advocate Associate Medical Plan</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana HMO - Advocate Associate Medical Plan</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana HMO Select</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Humana-3">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana Illinois Platinum HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana Integrated Care Program of Illinois</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana Medicaid Managed Care Plan</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Humana-4">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana National EPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana National HMO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana National POS - Open Access</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Humana-5">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana National PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana POS</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Humana-6">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humana.com/dist/hcom/static/icons/humana-logo.svg" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Humana PPO - Advocate Associate Medical Plan</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">LLH Adventist Silver PPO 3000</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">LLH Family Health Network Silver PPO 3100</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-A-1">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">LLH Swedish Covenant Silver PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Meridian</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.meritain.com/Media/Default/images/logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Meritain Health PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-B-2">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">MultiPlan PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">NALC (Natl Assn of Letter Carriers) Health Benefit</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">PHCS PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-Other-C-3">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">PHCS Savility PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">SEIU HCII</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">UFCW Local 1546 Health and Welfare Fund (UMC)</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-UHC-1">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">UHC / AARP MedicareComplete (Secure Horizons) HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">UHC / AARP MedicareComplete Focus HMO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Charter</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-UHC-2">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Choice HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Choice Plus POS</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Compass HMO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-UHC-3">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Core PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Group Medicare Advantage PPO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Medicare Solutions PPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-UHC-4">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare MedicareComplete Plan 1 HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Navigate HMO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Navigate POS</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-UHC-5">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Nexus</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Options PPO</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Select EPO</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>            
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-UHC-5">
                   <Col md={12}>
                   <CardDeck>
                           <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Select HMO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Select Plus POS</small>
                                </Card.Footer>                                
                            </Card>
                            <Card style={{visibility:'hidden'}}>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">United Healthcare Select Plus POS</small>
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