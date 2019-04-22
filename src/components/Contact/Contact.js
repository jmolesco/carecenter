import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Card,Form,Button,Image,Alert } from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Contact extends Component {

    render() 
    {
        return (
            <Container>
                 <Row className="justify-content-md-center">
                    <Col md={12}>
                    <Alert  variant={"danger"} className={"remove-border"} >
                            <hr></hr>
                                <h4>  
                                    <marquee> Contact Us </marquee>
                                </h4>
                            <hr></hr>
                            <p> To know more about our services you may contact us below or email us in the form provided!</p>
                        </Alert>
                    </Col>
                </Row>
                <Row className="justify-content-md-left">
                    <Col md={4}>
                        <Row className="justify-content-md-left">
                            <Col md={12}>
                                <Card >
                                    <Card.Header>
                                    <i className="fa fa-phone-square">
                                        &nbsp;Contact Number - Buffalo Grove</i>
                                        </Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Phone: 847-821-1071</ListGroup.Item>
                                        <ListGroup.Item>Fax: 847-821-1077</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Footer className="text-left">
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <p style={{color:'white'}}>---- </p>
                            <Col md={12}>
                                <Card >
                                    <Card.Header>
                                    <i className="fa fa-phone-square">
                                        &nbsp;Contact Number - Algonquin</i>
                                        </Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Phone: 847-821-7073</ListGroup.Item>
                                        <ListGroup.Item>Fax: 847-821-1077 <br /></ListGroup.Item>
                                    </ListGroup>
                                    <Card.Footer className="text-left">
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <p style={{color:'white'}}>---- </p>
                            <Col md={12}>
                            <Card >
                                <Card.Header>
                                <i className="fa fa-phone-square">
                                    &nbsp;Contact Number - Billing Office</i>
                                    </Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Phone:  815-312-8074</ListGroup.Item>
                                    <ListGroup.Item>Fax: 847-613-1044</ListGroup.Item>
                                </ListGroup>
                                <Card.Footer className="text-left">
                                </Card.Footer>
                            </Card>
                        </Col>
                            <p style={{color:'white'}}>---- </p>
                            <Col md={12}>
                            <Card>
                                <Card.Header><i className="fa  fa-home">&nbsp;Office Hours - Buffalo Grove</i></Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Monday - 11:00AM - 07:00PM</ListGroup.Item>
                                    <ListGroup.Item>Wednesday -  11:00AM - 08:00PM</ListGroup.Item>
                                    <ListGroup.Item>Friday - 09:00AM - 06:00PM</ListGroup.Item>
                                    <ListGroup.Item>Saturday -  08:00AM - 02:00PM</ListGroup.Item>
                                </ListGroup>
                                <Card.Footer className="text-left">
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <p style={{color:'white'}}>---- </p>
                            <Col md={12}>
                            <Card>
                                <Card.Header><i className="fa  fa-home">&nbsp;Office Hours - Algonquin</i></Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Thursday - 02:00PM - 07:00PM</ListGroup.Item>
                                    <ListGroup.Item>Every Other Saturday - 09:00AM - 12:00PM</ListGroup.Item>
                                </ListGroup>
                                <Card.Footer className="text-left">
                                </Card.Footer>
                            </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                         <Row className="justify-content-md-right">
                           <Col md={12}>
                            <Card>
                                <Card.Header>
                                <i className="fa fa-check-circle">
                                         &nbsp;Send Us An Inquiry </i> 
                                    </Card.Header>
                                <Card.Body>
                                <Form>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={3}>
                                            Name
                                            </Form.Label>
                                            <Col sm={9}>
                                            <Form.Control type="text" placeholder="Enter your Name" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={3}>
                                            Email Address
                                            </Form.Label>
                                            <Col sm={9}>
                                            <Form.Control type="email" placeholder="Enter your Email Address" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={3}>
                                            Message
                                            </Form.Label>
                                            <Col sm={9}>
                                            <Form.Control as="textarea" rows="3" placeholder="Enter your Message" />
                                            </Col>
                                        </Form.Group>
                                        </Form>

                                </Card.Body>
                                <Card.Footer className="text-left">
                                    <Button variant="outline-danger" style={{width:'100%'}}>Send Message</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        </Row>
                         <Row className="justify-content-md-right">
                            <Col md={12}>
                                <Card style={{height:'398px'}}>
                                        <Card.Header>
                                        <i className="fa fa-location-arrow">
                                            &nbsp;Location - 1411 North McHenry Rd Ste Buffalo Grove, IL 60089</i>
                                            </Card.Header>
                                        <Card.Body >
                                             <Map google={this.props.google} 
                                                style={{width:'97%',height:'76%'}}
                                                initialCenter={{
                                                    lat: 40.854885,
                                                    lng: -88.081807
                                                  }}
                                             zoom={14}>
                                                <Marker onClick={this.onMarkerClick}
                                                        name={'1411 North McHenry Rd Ste Buffalo Grove, IL 60089'} />
                                                <InfoWindow onClose={this.onInfoWindowClose}>
                                                    <div>
                                                    {/* <h1>{this.state.selectedPlace.name}</h1> */}
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </Card.Body>
                                        <Card.Footer className="text-left">

                                        </Card.Footer>
                                </Card>
                            </Col>
                         </Row>
                         <Row className="justify-content-md-right">
                            <Col md={12}>
                                <Card style={{height:'398px'}}>
                                        <Card.Header>
                                        <i className="fa fa-location-arrow">
                                            &nbsp;Location - 600 Randall Rd Ste 230 IL 60089 Alongonquin, IL 60102</i>
                                            </Card.Header>
                                        <Card.Body >
                                             <Map google={this.props.google} 
                                                style={{width:'97%',height:'76%'}}
                                                initialCenter={{
                                                    lat: 40.854885,
                                                    lng: -88.081807
                                                  }}
                                             zoom={14}>
                                                <Marker onClick={this.onMarkerClick}
                                                        name={'600 S Randall Rd Ste 230 Algonquin, IL 60102'} />
                                                <InfoWindow onClose={this.onInfoWindowClose}>
                                                    <div>
                                                   
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </Card.Body>
                                        <Card.Footer className="text-left">

                                        </Card.Footer>
                                </Card>
                            </Col>
                         </Row>
                    </Col>
                 </Row>
                
          </Container>
        );
    }
}
// export default Contact;
export default GoogleApiWrapper({
    apiKey: ('AIzaSyC3Is-W3lSolWDV8bwxtCMBfnYvREOEa3w')
  })(Contact)