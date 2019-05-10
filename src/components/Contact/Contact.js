import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Card,Form,Button,Image,Alert } from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Contact.css';
import * as emailjs from 'emailjs-com';
class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            Name:'',
            EmailAddress:'',
            Message:'',
            EmailSentSuccessful:true,
            SenderEmail:'olescojohnmark@gmail.com',
            TemplateID:'carecenterforallergy',
            TemplateUserID:'usercarecenterforallergy',
            UserID:'user_LECJPVdzpYOS1hL1S7P3p',
            ServiceID:'gmail',
            error:{
                Name:'',
                EmailAddress:'',
                Message:''
            },
            validationClass:{
                Name:'',
                EmailAddress:'',
                Message:''
            },
            EmailMsgUponSending:'',
            EmailTypeVariant:'',
            Sent:false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    validateEmailContent(){
        //console.log('open');
        let errors = {};
        let validationClass ={}
        let formIsValid = true;
        var msg_input = 'Minimum of 3 symbols or characters';
        let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        let classerror = 'invalid-feedback-error';
        if(!this.state.Name||this.state.Name.length < 3){
            errors.Name = msg_input;
            validationClass.Name=classerror;
            formIsValid = false;
        }

        if(!this.state.Message||this.state.Message.length < 3){
            errors.Message = msg_input;
            validationClass.Message=classerror;
            formIsValid = false;
        }

        if(!this.state.EmailAddress||this.state.EmailAddress.length < 3){
            errors.EmailAddress = msg_input;        
            validationClass.EmailAddress=classerror;
            formIsValid = false;
        }
        else if(!pattern.test(this.state.EmailAddress)){
            errors.EmailAddress = 'This is not a valid email address';
            validationClass.EmailAddress=classerror;
            formIsValid=false;
        }
        this.setState({
            error:errors,
            validationClass:validationClass
        });
        console.log(this.state.error);
        return formIsValid;
        
    }
    SendEmail(e)
    {
        e.preventDefault();
        if(!this.validateEmailContent()){
            console.log(this.state.error);
            return;
        }


        var template_params = {
            "Name": this.state.Name,
            "feedback": this.state.Message,
            "from_email":this.state.SenderEmail,
            "to_email":this.state.SenderEmail,
            "subject":'Email Inquiry',
            "EmailAddress":this.state.EmailAddress
        }; 

         emailjs.send(this.state.ServiceID, this.state.TemplateID, template_params,this.state.UserID).then(res => 
         {
            this.setState({
                Name:'',
                EmailAddress:'',
                Message:'',
                EmailSentSuccessful:false,
                EmailMsgUponSending:'You have successfully sent an email.',
                EmailTypeVariant:'success',
            });
        }).catch(err => this.setState({        
                EmailMsgUponSending:'Failed to send feedback. Error: '+err,
                EmailTypeVariant:'danger',
                Sent:false
        }));

        var template_user_params = {
                "Name": this.state.Name,
                "feedback": this.state.Message,
                "to_email_user":this.state.EmailAddress,
                "from_email_user":this.state.SenderEmail,
                "subject_user":'Email Receipt',
                "EmailAddress":this.state.EmailAddress,
        };
        emailjs.send(this.state.ServiceID, this.state.TemplateUserID, template_user_params,this.state.UserID).then(res => 
            {
                this.setState({
                    Name:'',
                    EmailAddress:'',
                    Message:'',
                    EmailSentSuccessful:false,
                    EmailMsgUponSending:'You have successfully sent an email.',
                    EmailTypeVariant:'success',
                });
           }).catch(err => this.setState({        
                   EmailMsgUponSending:'Failed to send feedback. Error: '+err,
                   EmailTypeVariant:'danger',
                   Sent:false
           }));

           this.setState({
            Name:'',
            EmailAddress:'',
            Message:'',
        });
    }
    render() 
    {
        return (
            <Container>
                 <Row className="justify-content-md-center">
                    <Col md={12}>
                    <Alert  variant={"primary"} className={"remove-border"} >
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
                                        <Form.Group as={Row} controlId="formHorizontalName">
                                             <Form.Label column sm={12} hidden={this.state.EmailSentSuccessful}>
                                                <Alert  variant={this.state.EmailTypeVariant} className={"remove-border text-center"} >
                                                    {this.state.EmailMsgUponSending}
                                                </Alert>
                                             </Form.Label>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalName">
                                            <Form.Label column sm={3} className={'label-'+this.state.validationClass.Name}>
                                            Name
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="text" placeholder="Enter your Name" 
                                                    name="Name"
                                                    className={'has-error-'+this.state.validationClass.Name}
                                                    onChange={this.handleChange}
                                                />
                                                 <div className={this.state.validationClass.Name}>
                                                     {this.state.error.Name}
                                                 </div>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalEmailAddress">
                                            <Form.Label column sm={3} className={'label-'+this.state.validationClass.EmailAddress}>
                                            Email Address
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="email" placeholder="Enter your Email Address" 
                                                    name="EmailAddress"
                                                    className={'has-error-'+this.state.validationClass.EmailAddress}
                                                    onChange={this.handleChange}
                                                />
                                                 <div className={this.state.validationClass.EmailAddress}>
                                                     {this.state.error.EmailAddress}
                                                 </div>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalMessage">
                                            <Form.Label column sm={3} className={'label-'+this.state.validationClass.Message}>
                                            Message
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control as="textarea" rows="3" placeholder="Enter your Message"
                                                    name="Message"
                                                    className={'has-error-'+this.state.validationClass.Message}
                                                    onChange={this.handleChange}
                                                />
                                                 <div className={this.state.validationClass.Message}>
                                                     {this.state.error.Message}
                                                 </div>
                                            </Col>
                                           
                                        </Form.Group>
                                        </Form>

                                </Card.Body>
                                <Card.Footer className="text-left">
                                    <Button variant="outline-danger" style={{width:'100%'}} onClick={this.SendEmail.bind(this)}>Send Message</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        </Row>
                         <Row className="justify-content-md-right">
                            <Col md={12}>
                                <Card style={{height:'398px'}}>
                                        <Card.Header>
                                        <i className="fa fa-location-arrow">
                                            &nbsp;Location - 1411 North McHenry Rd Ste 126 Buffalo Grove, IL 60089</i>
                                            </Card.Header>
                                        <Card.Body >
                                             <Map google={this.props.google} 
                                                style={{width:'97%',height:'76%'}}
                                                zoom={17}
                                                initialCenter={{
                                                    lat: 42.175343,
                                                    lng: -87.985829
                                                }}>
                                                <Marker onClick={this.onMarkerClick}
                                                     name={'SM Megamall'}
                                                     position={{lat: 42.175343, lng: -87.985829}}
                                                     initialCenter={{lat: 42.175343, lng: -87.985829}}

                                                />
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
                         <Row className="justify-content-md-right">
                            <Col md={12}>
                                <Card style={{height:'398px'}}>
                                        <Card.Header>
                                        <i className="fa fa-location-arrow">
                                            &nbsp;Location - 600 Randall Rd Ste 230  Alongonquin, IL 60102</i>
                                            </Card.Header>
                                        <Card.Body >
                                        <Map google={this.props.google} 
                                                style={{width:'97%',height:'76%'}}
                                                zoom={17}
                                                initialCenter={{
                                                    lat: 42.167983, 
                                                    lng: -88.336326
                                                }}>
                                                <Marker onClick={this.onMarkerClick}
                                                     name={'SM Megamall'}
                                                     position={{
                                                        lat: 42.167983, 
                                                        lng: -88.336326
                                                    }}
                                                    

                                                />
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