import React, { Component } from 'react';
import { Container, Row, Col, CardDeck,  Alert,Card,ListGroup } from 'react-bootstrap';
import cigna from  '../../images/cigna.PNG';
import cc from  '../../images/cc.png';
import multiplan from '../../images/mutltiplan.png';
import beech from '../../images/beech.png';
import ufc from '../../images/ufc.png';
import first from '../../images/first.png';


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
                <Row className="justify-content-md-center 2nd-col-BlueCross">
                   <Col md={12}>
                   <CardDeck>
                             <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Body className="text-center">
                                <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>AARP MedicareComplete Plus HMO-POS</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={beech} />
                                </center>
                                <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Beech Street Network PPO</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.bcbstx.com/images/logo_bcbstx.jpg"  />
                                </center>
                                <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Blue Advantage HMO</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 2nd-col-BlueCross">
                   <Col md={12}>
                   <CardDeck>
                          
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="http://www.ilhealthagents.com/wp-content/uploads/2015/02/slogo.png" />
                                </center>
                                <Card.Body className="text-center">
                                <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>BlueCare Direct</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.cofinity.net/Cofinity/Images/Logo/CofinityLogo.gif" />
                                </center>
                                <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Cofinity PPO</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src="https://www.healthlink.com/assets/images/header_logo.png" />
                                </center>
                                <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Healthlink PPO</ListGroup.Item>                                      
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>             
                <Row className="justify-content-md-center 2nd-col-BlueCross">
                   <Col md={12}>
                   <CardDeck>
                          
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cc} />
                                </center>
                                <Card.Body className="text-center">
                                <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>HST Care Connect HMO</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Meridian</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src="https://www.meritain.com/Media/Default/images/logo.png" />
                                </center>
                                <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Meritain Health PPO</ListGroup.Item>                                      
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>             
                <Row className="justify-content-md-center 2nd-col-BlueCross">
                    <Col md={12}>
                    <CardDeck>
                            
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" src={multiplan} />
                                    </center>
                                    <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                            <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item>MultiPlan PPO</ListGroup.Item>
                                    </ListGroup>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" src="https://www.nalchbp.org/theme/img/logo.png" />
                                    </center>
                                    <Card.Body className="text-center">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item>NALC (Natl Assn of Letter Carriers) Health Benefit</ListGroup.Item>
                                    </ListGroup>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" src="http://www.seiuhcilin.org/files/2011/05/locals2011_01.jpg" />
                                    </center>
                                    <Card.Body className="text-center">

                                        <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item>SEIU HCII</ListGroup.Item>                                      
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                
                    </Col>
                    </Row>             
                    <Row className="justify-content-md-center 2nd-col-BlueCross">
                    <Col md={12}>
                    <CardDeck>
                            
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" src={ufc} />
                                    </center>
                                    <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                            <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item>UFCW Local 1546 Health and Welfare Fund (UMC)</ListGroup.Item>
                                    </ListGroup>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" />
                                    </center>
                                    <Card.Body className="text-center">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item>PHCS PPO</ListGroup.Item>
                                            <ListGroup.Item>PHCS Savility PPO</ListGroup.Item>
                                    </ListGroup>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance"  />
                                    </center>
                                    <Card.Body className="text-center">

                                        <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item>UHC / AARP MedicareComplete (Secure Horizons) HMO</ListGroup.Item>
                                            <ListGroup.Item>UHC / AARP MedicareComplete Focus HMO</ListGroup.Item>                                        
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                
                    </Col>
                    </Row>             
                 <Row className="justify-content-md-center 2nd-col-BlueCross">
                   <Col md={12}>
                   <CardDeck>
                   <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={first}/>
                                </center>
                                <Card.Body className="text-center">
                                <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>First Health Network EPO</ListGroup.Item>
                                        <ListGroup.Item>First Health Network PPO</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Great West Healthcare - Cigna HMO</ListGroup.Item>
                                        <ListGroup.Item>Great West Healthcare - Cigna Open Access Plus HMO</ListGroup.Item>
                                        <ListGroup.Item>Great West Healthcare - Cigna PPO</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Coventry HMO</ListGroup.Item>
                                        <ListGroup.Item>Coventry One Select PPO</ListGroup.Item>
                                        <ListGroup.Item>Coventry PPO</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </CardDeck>
             
                   </Col>
                </Row>
                 <Row className="justify-content-md-center 2nd-col-BlueCross">
                   <Col md={12}>
                   <CardDeck>
                   <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="http://www.hfnllc.com/assets/img/logo.png" />
                                </center>
                                <Card.Body className="text-center">
                                <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>HFN Platinum EPO</ListGroup.Item>
                                        <ListGroup.Item>HFN PPO</ListGroup.Item>
                                        <ListGroup.Item>HFN Total Care PPO</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>LLH Adventist Silver PPO 3000</ListGroup.Item>
                                        <ListGroup.Item>LLH Family Health Network Silver PPO 3100</ListGroup.Item>
                                        <ListGroup.Item>LLH Swedish Covenant Silver PPO</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  />
                                </center>
                                <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Blue Precision Bronze HMO</ListGroup.Item>
                                        <ListGroup.Item>Blue Precision Gold HMO</ListGroup.Item>
                                        <ListGroup.Item>Blue Precision HMO</ListGroup.Item>
                                        <ListGroup.Item>Blue Precision Platinum HMO</ListGroup.Item>
                                        <ListGroup.Item>Blue Precision Silver HMO</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </CardDeck>
             
                   </Col>
                 </Row>
                 <Row className="justify-content-md-center 1st-col-AETNA-1">
                   <Col md={12}>
                   <CardDeck>
                            
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
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"}/>
                                </center>
                                <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                    <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Blue Cross HMO Illinois</ListGroup.Item>
                                        <ListGroup.Item>Blue Cross Medicare Advantage HMO</ListGroup.Item>
                                        <ListGroup.Item>Blue Cross Medicare Advantage HMO - POS</ListGroup.Item>
                                        <ListGroup.Item>Blue Cross Medicare Advantage PPO</ListGroup.Item>
                                        <ListGroup.Item>Blue Cross PPO</ListGroup.Item>
                                        <ListGroup.Item>Blue Cross PPO - Advocate Associate Medical Plan</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={cigna}/>
                                </center>
                                <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                    <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Cigna C - 5 POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna Health Partners POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna Health Partners PPO</ListGroup.Item>
                                        <ListGroup.Item>Cigna Open Access Plus POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna Open Access Plus State of Illinois POS</ListGroup.Item>
                                        <ListGroup.Item>CIGNA Open Access POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna PPO</ListGroup.Item>
                                </ListGroup>
                                </Card.Body>                              
                            </Card>
                    </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-AETNA-1">
                   <Col md={12}>
                   <CardDeck>
                            
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.humana.com/dist/hcom/static/icons/humana-logo.svg"}  />
                                </center>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Humana Advocate Health Care PPO</ListGroup.Item>
                                        <ListGroup.Item>Humana Choice POS</ListGroup.Item>
                                        <ListGroup.Item>Humana DuPage Medical Group HMO</ListGroup.Item>
                                        <ListGroup.Item>Humana DuPage Medical Group HMO - HMO Select</ListGroup.Item>
                                        <ListGroup.Item>Humana EPO - Advocate Associate Medical Plan</ListGroup.Item>
                                        <ListGroup.Item>Humana HMO - Advocate Associate Medical Plan</ListGroup.Item>
                                        <ListGroup.Item>Humana HMO Select</ListGroup.Item>
                                        <ListGroup.Item>Humana Illinois Platinum HMO</ListGroup.Item>
                                        <ListGroup.Item>Humana Integrated Care Program of Illinois</ListGroup.Item>
                                        <ListGroup.Item>Humana Medicaid Managed Care Plan</ListGroup.Item>
                                        <ListGroup.Item>Humana National EPO</ListGroup.Item>
                                        <ListGroup.Item>Humana National HMO</ListGroup.Item>
                                        <ListGroup.Item>Humana National POS - Open Access</ListGroup.Item>
                                        <ListGroup.Item>Humana National PPO</ListGroup.Item>
                                        <ListGroup.Item>Humana POS</ListGroup.Item>
                                        <ListGroup.Item>Humana PPO</ListGroup.Item>
                                        <ListGroup.Item>Humana PPO - Advocate Associate Medical Plan</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"}/>
                                </center>
                                <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                    <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Charter</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Choice HMO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Choice Plus POS</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Compass HMO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Core PPO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Group Medicare Advantage PPO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Medicare Solutions PPO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare MedicareComplete Plan 1 HMO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Navigate HMO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Navigate POS</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Nexus</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Options PPO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Select EPO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Select HMO</ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Select Plus POS</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card style={{visibility:'hidden'}}>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={cigna}/>
                                </center>
                                <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Cigna C - 5 POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna Health Partners POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna Health Partners PPO</ListGroup.Item>
                                        <ListGroup.Item>Cigna Open Access Plus POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna Open Access Plus State of Illinois POS</ListGroup.Item>
                                        <ListGroup.Item>CIGNA Open Access POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna POS</ListGroup.Item>
                                        <ListGroup.Item>Cigna PPO</ListGroup.Item>
                                </ListGroup>
                                </Card.Body>                              
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