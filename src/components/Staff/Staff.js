import React, { Component } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import doc from '../../images/doc.jpg'; 
class Staff extends Component {

    render() 
    {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <Card className="text-left">
                            <Card.Header><b>&raquo; Our Doctors Staff</b></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    The Care Center for Allergy and Asthma’s doctor and staff have been providing high quality and comprehensive care for conditions relating to Allergy, Asthma, and Immunology in the Northwest suburbs of Chicago for the past 25 years. The staff is led by a board certified allergist, asthma specialist, and immunologist who believes in a holistic approach to treatment. Our physician offers state of the art allergy and asthma evaluation. She utilizes an array of treatment options suited to the needs and conditions of her individual patients. Among many of her therapeutic options are allergy contact avoidance which may include environmental control and food avoidance, nutritional counseling, dietary management, medications, and allergy immunotherapy. Our physician strives for accurate and efficient diagnosis as well as immediate and long lasting allergy relief for patients.                
                                    Our staff consists of well trained medical and office personnel who are courteous and eager to assist with patient needs. We provide quality and individual care.The billing department bills most insurance companies and assists patients with their claims. We also offer a variety of payment plans and options suited to the patients’ needs and budget.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Staff;