import React, { Component } from 'react';
import { Navbar, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { TwitterFollowButton } from "react-twitter-embed";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagename: "home"
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="bottom" className="footer-bg">
        <Container>

          <Row className="justify-content-md-center footerRow" style={{ width: '98%' }}>
            <Row style={{ width: '100%' }} className="footerRow">

              <Col md={4}>
                <ListGroup variant="flush footer-menu">
                  <ListGroup.Item className="text-center">
                    Explore
                                        </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/home"><i className="fa  fa-home">&nbsp;Home</i></Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/about" ><i className="fa fa-file"> &nbsp;About Us</i></Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/service" ><i className="fa fa-file">&nbsp;Service</i></Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/contact" ><i className="fa fa-phone-square">&nbsp;Contact Us</i></Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/insurance" ><i className="fa fa-bookmark-o">&nbsp;Insurance</i></Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/forms" ><i className="fa fa-edit">&nbsp;Forms</i></Link>
                  </ListGroup.Item>
                  <ListGroup.Item>&nbsp;</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={4}>
                <ListGroup variant="flush footer-menu2">
                  <ListGroup.Item className="text-center">
                    Visit us
                                        </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="fa fa-location-arrow"></i> 1411 North McHenry Rd Ste 126 Buffalo Grove, IL 60089
                                        </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="fa fa-location-arrow"></i> 600 Randall Rd Ste 230 Alongonquin, IL 60102
                                            </ListGroup.Item>
                                            <ListGroup.Item>&nbsp;</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={4}>

                <ListGroup variant="flush footer-menu2">
                  <ListGroup.Item className="text-center"> Follow Us</ListGroup.Item>
                  <ListGroup.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/DrCynthiaYangoEugenio/" style={{ color: '#6610f2' }}><i className="fa fa-facebook-square"></i> Facebook</a>
                                           <br />
                                           <div class="fb-like" data-href="https://www.facebook.com/DrCynthiaYangoEugenio/" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/carecenter4allergyandasthma/" style={{ color: '#6610f2' }}><i className="fa fa-instagram"></i> Instagram</a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/@DrYangoEugenio?fbclid=IwAR1jLhwWGKH_UEcxpshPFm8sBVEDKIodtuJrC0Jei_SgV_jzJBCpS-oclZ4" style={{ color: '#6610f2' }}><i className="fa fa-twitter"></i> Twitter</a>
                     <TwitterFollowButton
                      screenName={'DrYangoEugenio'}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>&nbsp;</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row className="justify-content-md-center footerRow" style={{ width: '100%', color: '#6610f2' }}>
              All Rights Reserved. &copy; 2020
                    </Row>
          </Row>
        </Container>

      </Navbar>

    );
  }
}
export default Header;