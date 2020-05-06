import React, { Component } from 'react';
import { Container, Row, Col,  Alert, Card, ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class OtherInsurance extends Component {

    render() {
        //console.log(this.props.location.data);
        // var value = this.props.location.data;
        // var logo=this.props.location.logo;
        // console.log(this.props.location);
        var value_first = [
             'Aetna Choice POS'
            ,'Aetna Choice POS II'
            ,'Aetna HMO'
            ,'Aetna Managed Choice (MC) POS'
            ,'Aetna NAP - PPO'
            ,'Aetna Open Access POS'
            ,'Aetna Open Choice POS'
            ,'Aetna Open Choice PPO'
            ,'Aetna Select Choice EPO'
            ,'Aetna Select POS'
            ,'Aetna Signature Administrators PPO'
            ,'Blue Cross HMO Illinois'
            ,'Blue Cross Medicare Advantage HMO'
            ,'Blue Cross Medicare Advantage HMO - POS'
            ,'Blue Cross Medicare Advantage PPO'
            ,'Blue Cross PPO'
            ,'Blue Cross PPO - Advocate Associate Medical Plan'
            ,'Blue Precision Bronze HMO'
            ,'Blue Precision Gold HMO'
            ,'Blue Precision HMO'
            ,'Blue Precision Platinum HMO'
            ,'Blue Precision Silver HMO'
            ,'Cigna C - 5 POS'
            ,'Cigna Health Partners POS'
            ,'Cigna Health Partners PPO'
            ,'Cigna Open Access Plus POS'
            ,'Cigna Open Access Plus State of Illinois POS'
            ,'CIGNA Open Access POS'
            ,'Cigna POS'
            ,'Cigna PPO' 
            ,'Humana Advocate Health Care PPO'
                     
        ];
        var value_2nd = [
           'Humana Choice POS'
            ,'Humana DuPage Medical Group HMO'
            ,'Humana DuPage Medical Group HMO - HMO Select'
            ,'Humana EPO - Advocate Associate Medical Plan'
            ,'Humana HMO - Advocate Associate Medical Plan'
            ,'Humana HMO Select'
            ,'Humana Illinois Platinum HMO'
            ,'Humana Integrated Care Program of Illinois'
            ,'Humana Medicaid Managed Care Plan'
            ,'Humana National EPO'
            ,'Humana National HMO'
            ,'Humana National POS - Open Access'
            ,'Humana National PPO'
            ,'Humana POS'
            ,'Humana PPO'
            ,'Humana PPO - Advocate Associate Medical Plan'
            ,'United Healthcare Charter'
            ,'United Healthcare Choice HMO'
            ,'United Healthcare Choice Plus POS'
            ,'United Healthcare Compass HMO'
            ,'United Healthcare Core PPO'
            ,'United Healthcare Group Medicare Advantage PPO'
            ,'United Healthcare Medicare Solutions PPO'
            ,'United Healthcare MedicareComplete Plan 1 HMO'
            ,'United Healthcare Navigate HMO'
            ,'United Healthcare Navigate POS'
            ,'United Healthcare Nexus'
            ,'United Healthcare Options PPO'
            ,'United Healthcare Select EPO'
            ,'United Healthcare Select HMO'
            ,'United Healthcare Select Plus POS'
            ];
        // if(isNullOrUndefined(value))
        // {
        //     return(
        //         <Redirect to="/insurance"/>
        //     )
        // }
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <Alert variant={"primary"} className={"remove-border"} >
                            <hr></hr>
                            <h4>
                                <marquee> Network Insurance Plans </marquee>
                            </h4>
                            <hr></hr>
                            <p>This list is not inclusive of all insurance plans. Our practice accepts almost all major
insurance plans. </p>
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
                <Row className="justify-content-md-center 2nd-col-BlueCross">
                     <Col md={6}>
                        <Card>
                             <Card.Header> 
                                    List of Insurance
                            </Card.Header>
                            <ListGroup variant="flush">
                                {
                                    value_first.map((item,i)=>{
                                        console.log(item);
                                        return (
                                            <ListGroup.Item key={i}>{item}</ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                            <Card.Footer className="text-left">
                            <Link to={{
                                                    pathname:'/insurance',
                                               
                                                }}>
                                                    
                                                        <small className="text-center"><center>Go Back</center></small>
                                                    
                                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col> 
                    <Col md={6}>

                        <Card>
                            <Card.Header> 
                                List of Insurance
                            </Card.Header>
                            <ListGroup variant="flush">
                                {
                                    value_2nd.map((item,i)=>{
                                        console.log(item);
                                        return (
                                            <ListGroup.Item key={i}>{item}</ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                            <Card.Footer className="text-left">
                            <Link to={{
                                                    pathname:'/insurance',
                                               
                                                }}>
                                                    
                                                        <small className="text-center"><center>Go Back</center></small>
                                                    
                                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default OtherInsurance;