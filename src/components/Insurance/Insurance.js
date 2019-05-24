import React, { Component } from 'react';
import { Container, Row, Col, CardDeck, Button, Image,  Carousel, Alert,Card,ListGroup,CardColumns } from 'react-bootstrap';
import cigna from  '../../images/cigna.PNG';
import coresource from  '../../images/coresource.png';
import cc from  '../../images/cc.png';
import multiplan from '../../images/mutltiplan.png';
import beech from '../../images/beech.png';
import ufc from '../../images/ufc.png';
import first from '../../images/first.png';
import aarp from '../../images/aarp.jpg';
import adventist from '../../images/adventist.jpg';
import phcs from '../../images/phcs.jpg';
import blueprecision from '../../images/blueprecision.jpg';
import greatwest from '../../images/greatwest.png';
import coventry from '../../images/coventry.png';
import meridian from '../../images/meridian.png';
import {Link} from 'react-router-dom';

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
insurance plans.  <Link to={{
                                                    pathname:'/otherinsurance',
                                                }} >
                                                    Check our list of insurance here.
                                        </Link> </p>
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-md-center 2nd-col-BlueCross">
                   <Col md={12}>
                   <CardDeck>
                 
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={beech} />
                                </center>
                                {/* <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>
                                            
                                            <small className="text-center text-black" >Beech Street Network PPO</small>
                                        </ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    
                                    </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.bcbstx.com/images/logo_bcbstx.jpg"  />
                                </center>
                                {/* <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item><small className="text-center text-black" >Blue Advantage HMO</small></ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    
                                    </Card.Footer> */}
                            </Card>
                            <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" src={ufc} />
                                    </center>
                                    {/* <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                            <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item><small className="text-center text-black" >UFCW Local 1546 Health and Welfare Fund</small></ListGroup.Item>
                                    </ListGroup>
                                    </Card.Body>
                                    <Card.Footer>
                                                                           </Card.Footer> */}
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
                                {/* <Card.Body className="text-center">
                                <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item><small className="text-center text-black" >BlueCare Direct</small></ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    
                                    </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.cofinity.net/Cofinity/Images/Logo/CofinityLogo.gif" />
                                </center>
                                {/* <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item><small className="text-center text-black" >Cofinity PPO</small></ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    
                                    </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src="https://www.healthlink.com/assets/images/header_logo.png" />
                                </center>
                                {/* <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item><small className="text-center text-black" >Healthlink PPO</small></ListGroup.Item>                                      
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    
                                    </Card.Footer> */}
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
                                {/* <Card.Body className="text-center">
                                <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item><small className="text-center text-black" >HST Care Connect HMO</small></ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    
                                    </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={meridian} />
                                </center>
                                {/* <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item><small className="text-center text-black" >Meridian</small></ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    
                                    </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src="https://www.meritain.com/Media/Default/images/logo.png" />
                                </center>
                                {/* <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item><small className="text-center text-black" >Meritain Health PPO</small></ListGroup.Item>                                      
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    
                                    </Card.Footer> */}
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
                                    {/* <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                            <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item><small className="text-center text-black" >MultiPlan PPO</small></ListGroup.Item>
                                    </ListGroup>
                                    </Card.Body>
                                    <Card.Footer>
                                    
                                    </Card.Footer> */}
                                </Card>
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" src="https://www.nalchbp.org/theme/img/logo.png" />
                                    </center>
                                    {/* <Card.Body className="text-center">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item><small className="text-center text-black" >NALC(Natl Assn of Letter Carriers) Health Benefit</small></ListGroup.Item>
                                    </ListGroup>
                                    </Card.Body>
                                    <Card.Footer>
                                    
                                    </Card.Footer> */}
                                </Card>
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" src="http://www.seiuhcilin.org/files/2011/05/locals2011_01.jpg" />
                                    </center>
                                    {/* <Card.Body className="text-center">

                                        <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item><small className="text-center text-black" >SEIU HCII</small></ListGroup.Item>                                      
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer>
                                    
                                    </Card.Footer> */}
                                </Card>
                            </CardDeck>
                
                    </Col>
                    </Row>             
                <Row className="justify-content-md-center 2nd-col-BlueCross">
                    <Col md={12}>
                    <CardDeck>
                    <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.humana.com/dist/hcom/static/icons/humana-logo.svg"}  />
                                </center>
                                {/* <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Humana Advocate Health Care PPO</ListGroup.Item>
                             </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                            <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['Humana Advocate Health Care PPO', 'Humana Choice POS','Humana DuPage Medical Group HMO',
                                                    'Humana DuPage Medical Group HMO - HMO Select','Humana EPO - Advocate Associate Medical Plan','Humana HMO - Advocate Associate Medical Plan',
                                                    'Humana HMO Select','Humana Illinois Platinum HMO','Humana Integrated Care Program of Illinois','Humana Medicaid Managed Care Plan',
                                                    'Humana National EPO','Humana National PPO','Humana POS','Humana PPO','Humana PPO - Advocate Associate Medical Plan'
                                                ],
                                                    logo:"https://www.humana.com/dist/hcom/static/icons/humana-logo.svg"
                                                }}><small className="text-center"><center>Check More Insurance</center></small>
                                                </Link>
                                </Card.Footer> */}
                            </Card>
                                
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" src={phcs} />
                                    </center>
                                    {/* <Card.Body className="text-center">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item><small className="text-center text-black">PHCS PPO</small></ListGroup.Item>
                                          
                                    </ListGroup>
                                    </Card.Body>
                                    <Card.Footer>
                                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['PHCS PPO', 'PHCS Savility PPO'],
                                                    logo:phcs
                                                }}>
                                                    
                                                        <small className="text-center"><center>Check More Insurance</center></small>
                                                    
                                                </Link>
                                     </Card.Footer> */}
                                </Card>
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-insurance" src={aarp}  />
                                    </center>
                                    {/* <Card.Body className="text-center">

                                        <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item><small className="text-center text-black">UHC/AARP MedicareComplete Focus HMO</small></ListGroup.Item>
                                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['UHC/AARP MedicareComplete Focus HMO', 'UHC/AARP MedicareComplete (Secure Horizons) HMO','AARP Medicar complete Plus HMO-POS '],
                                                    logo:aarp
                                                }}>
                                                    <small className="text-center"><center>Check More Insurance</center></small>
                                        </Link>
                                    </Card.Footer> */}
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
                                {/* <Card.Body className="text-center">
                                <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item><small className="text-center text-black">First Health Network EPO</small></ListGroup.Item>
                                      
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['First Health Network EPO', 'First Health Network PPO'],
                                                    logo:first
                                                }}>
                                                <small className="text-center"><center>Check More Insurance</center></small>
                                    </Link>
                                </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={greatwest} />
                                </center>
                                {/* <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Great West Healthcare - Cigna HMO</ListGroup.Item>
                                        
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['Great West Healthcare - Cigna HMO', 'Great West Healthcare - Cigna Open Access Plus HMO','Great West Healthcare - Cigna PPO'],
                                                    logo:greatwest
                                                }}>
                                                <small className="text-center"><center>Check More Insurance</center></small>
                                </Link>
                                </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={coventry}  />
                                </center>
                                {/* <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Coventry HMO</ListGroup.Item>
                                       
                                </Card.Body>
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['Coventry HMO', 'Coventry One Select PPO','Coventry PPO'],
                                                    logo:coventry
                                                }}><small className="text-center"><center>Check More Insurance</center></small>
                                </Link>
                                </Card.Footer> */}
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
                                {/* <Card.Body className="text-center">
                                <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>HFN Platinum EPO</ListGroup.Item>
                                       
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['HFN Platinum EPO', 'HFN PPO','HFN Total Care PPO'],
                                                    logo:"http://www.hfnllc.com/assets/img/logo.png"
                                                }}><small className="text-center"><center>Check More Insurance</center></small></Link>
                                </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={adventist}/>
                                </center>
                                {/* <Card.Body className="text-center">
                                     <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>LLH Adventist Silver PPO 3000</ListGroup.Item>
                                        
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['LLH Adventist Silver PPO 3000', 'LLH Family Health Network Silver PPO 3100','LLH Swedish Covenant Silver PPO'],
                                                    logo:adventist
                                                }}><small className="text-center"><center>Check More Insurance</center></small></Link>
                                </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={blueprecision} />
                                </center>
                                {/* <Card.Body className="text-center">

                                     <ListGroup variant="flush">
                                     <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Blue Precision Bronze HMO</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['Blue Precision Bronze HMO', 'Blue Precision Gold HMO','Blue Precision HMO','Blue Precision Silver HMO'],
                                                    logo:blueprecision
                                                }}><small className="text-center"><center>Check More Insurance</center></small></Link>
                                </Card.Footer> */}
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
                                {/* <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Aetna Choice POS</ListGroup.Item>
                                      
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['Aetna Choice POS', 'Aetna Choice POS II','Aetna HMO',
                                                    'Aetna Managed Choice (MC) POS','Aetna NAP - PPO','Aetna Open Access POS','Aetna Open Choice POS',
                                                    'Aetna Open Choice PPO','Aetna Select Choice EPO','Aetna Select POS','Aetna Signature Administrators PPO'
                                                    ],
                                                    logo:"https://www.aetna.com/content/dam/aetna/images/logos/1_Heart_Aetna_logo_sm_rgb_violet.png"
                                                }}><small className="text-center"><center>Check More Insurance</center></small></Link>
                                </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"}/>
                                </center>
                                {/* <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                    <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Blue Cross HMO Illinois</ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['Blue Cross HMO Illinois', 'Blue Cross Medicare Advantage HMO',
                                                    'Blue Cross Medicare Advantage HMO - POS','Blue Cross Medicare Advantage PPO',
                                                    'Blue Cross PPO','Blue Cross PPO - Advocate Associate Medical Plan'
                                                    ],
                                                    logo:"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"
                                                }}><small className="text-center"><center>Check More Insurance</center></small></Link>
                                </Card.Footer> */}
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={cigna}/>
                                </center>
                                {/* <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                    <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Cigna C - 5 POS</ListGroup.Item>
                                       
                                </ListGroup>
                                </Card.Body> 
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['Cigna C - 5 POS', 'Cigna Health Partners POS','Cigna Open Access Plus POS',
                                                    'Cigna Open Access Plus State of Illinois POS','CIGNA Open Access POS','Cigna POS','Cigna PPO'],
                                                    logo:cigna
                                                }}><small className="text-center"><center>Check More Insurance</center></small></Link>
                                </Card.Footer>                              */}
                            </Card>
                    </CardDeck>
             
                   </Col>
                </Row>
                <Row className="justify-content-md-center 1st-col-AETNA-1">
                   <Col md={12}>
                   <CardDeck>
                            
                 
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"}/>
                                </center>
                                {/* <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                    <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>United Healthcare Charter</ListGroup.Item>
                                        
                                   </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                <Link to={{
                                                    pathname:'/otherinsurance',
                                                    data:['United Healthcare Charter', 'United Healthcare Choice HMO','United Healthcare Choice Plus POS',
                                                    'United Healthcare Compass HMO','United Healthcare Core PPO','United Healthcare Group Medicare Advantage PPO',
                                                    'United Healthcare MedicareComplete Plan 1 HMO','United Healthcare Navigate HMO','United Healthcare Navigate POS',
                                                    'United Healthcare Nexus','United Healthcare Options PPO','United Healthcare Select EPO','United Healthcare Select HMO',
                                                    'United Healthcare Select Plus POS'
                                                    ],
                                                    logo:"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"
                                                }}><small className="text-center"><center>Check More Insurance</center></small></Link>
                                </Card.Footer> */}
                            </Card>
                            <Card style={{visibility:'hidden'}}>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={cigna}/>
                                </center>
                                {/* <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Cigna C - 5 POS</ListGroup.Item>
                                     
                                </ListGroup>
                                </Card.Body>       
                                <Card.Footer>
                                            <Card.Link href="#" ><small className="text-center"><center>Check More Insurance</center></small></Card.Link>
                                </Card.Footer>                        */}
                            </Card>
                            <Card style={{visibility:'hidden'}}>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance"  src={cigna}/>
                                </center>
                                {/* <Card.Body className="text-center">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Cigna C - 5 POS</ListGroup.Item>
                                     
                                </ListGroup>
                                </Card.Body>       
                                <Card.Footer>
                                            <Card.Link href="#" ><small className="text-center"><center>Check More Insurance</center></small></Card.Link>
                                </Card.Footer>                        */}
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
                                    <small classNameName="text-muted text-center">Assurant</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">Blue Cross Blue Shield PPO</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">Blue Cross Blue Shield HMO W/ Referral</small>
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
                                    <small classNameName="text-muted text-center">Blue Cross Community Family Health Plan Cigna</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.bcbsil.com/bcchp/img/bcbsil-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">Blue Cross Medicare Advantage</small>
                                </Card.Footer>                                
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={cigna}  />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">Cigna PPO & Open Access Plans</small>
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
                                    <small classNameName="text-muted text-center">CoreSource</small>
                                </Card.Footer>                                
                            </Card>

                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.geha.com/images/default-source/geha-logos/geha.png?sfvrsn=bcf8cb8b_2"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">Coventry Geha</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://arrowheadcenter.nmsu.edu/wp-content/uploads/2018/08/HealthSprint-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">HealthSprint</small>
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
                                    <small classNameName="text-muted text-center">Humana</small>
                                </Card.Footer>                                
                            </Card>

                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.illinois.gov/hfs/PublishingImages/HFSLogoCurveV2.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">Illinois Medicaid</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">Meridian</small>
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
                                    <small classNameName="text-muted text-center">Meritain Health</small>
                                </Card.Footer>                                
                            </Card>

                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://static.wixstatic.com/media/b1032a_5c45308387f94e048bc42a00611b49f0~mv2.png/v1/fill/w_224,h_84,al_c,q_80,usm_0.66_1.00_0.01/logo-for-web.webp"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">PHCS(Private Healthcare Systems)</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src="https://www.humanamilitary.com/media/Sites/HumanaMilitary/logo/hum_tricare_logo_rgb_pos.png" />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">Tricare East</small>
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
                                    <small classNameName="text-muted text-center">Unified Physiciams Network W/ Referral</small>
                                </Card.Footer>                                
                            </Card>

                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">United Healthcare</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <center>
                                    <Card.Img variant="top" className="card-img-insurance" src={"https://www.uhc.com/content/dam/uhcdotcom/en/responsive/header-logo.png"} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small classNameName="text-muted text-center">United Healthcare Medicare Advantage</small>
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