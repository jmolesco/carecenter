import React, { Component } from 'react';
import { Navbar, Nav, Container,Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logos from '../../images/logos.png';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagename: "home"
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
              <Link  to="/home">
                 {/* <Image src={logos} />  */}
              </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <div className="nav-link" ><Link  to="/home" activeClassName="active"><i className="fa  fa-home">&nbsp;Home</i></Link></div>   
              <div className="nav-link" ><Link  to="/about" activeClassName="active"><i className="fa fa-file"> &nbsp;About Us</i></Link></div> 
              <div className="nav-link"><Link  to="/service" activeClassName="active"><i className="fa fa-file"> &nbsp;Service</i></Link></div> 
              <div className="nav-link"><Link   to="/contact" activeClassName="active"><i className="fa fa-phone-square"> &nbsp;Contact Us</i></Link></div>  
              <div className="nav-link"><Link   to="/contact" activeClassName="active"><i className="fa fa-phone-square"> &nbsp;Insurance & Forms</i></Link></div>
           </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {/* <Navbar.Text>
                <span clas="navbartext" style={{color:"white"}}>&raquo; Care Center for Allergy & Asthma</span>
            </Navbar.Text> */}
          </Navbar.Collapse>
          {this.props.children}
        </Container>
      </Navbar>
    );
  }
}
export default Header;