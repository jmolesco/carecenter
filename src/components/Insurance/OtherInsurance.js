import React, { Component } from 'react';
import { Container, Row, Col,  Alert, Card, ListGroup } from 'react-bootstrap';
import { isNullOrUndefined } from 'util';
import { Redirect } from 'react-router-dom' 

class OtherInsurance extends Component {

    render() {
        //console.log(this.props.location.data);
        var value = this.props.location.data;
        var logo=this.props.location.logo;
        console.log(this.props.location);
        if(isNullOrUndefined(value))
        {
            return(
                <Redirect to="/insurance"/>
            )
        }
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
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-md-center 2nd-col-BlueCross">
                    <Col md={7}>
                        <Card>
                            <center className="image">
                                <Card.Img variant="top" src={logo} />
                            </center>
                            <Card.Footer>
                                 <small className="text-center"><center>Company Logo</center></small> 
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={5}>

                        <Card>
                            <Card.Header> 
                                List of Insurance
                            </Card.Header>
                            <ListGroup variant="flush">
                                {
                                    value.map((item,i)=>{
                                        console.log(item);
                                        return (
                                            <ListGroup.Item key={i}>{item}</ListGroup.Item>
                                        )
                                    })
                                }
                                {/* <ListGroup.Item>Phone: 847-821-1071</ListGroup.Item>
                                <ListGroup.Item>Fax: 847-821-1077</ListGroup.Item> */}
                            </ListGroup>
                            <Card.Footer className="text-left">

                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default OtherInsurance;