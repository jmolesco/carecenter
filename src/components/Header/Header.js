import React, { Component } from 'react';
import { Navbar, Nav, Container,Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import logos from '../../images/logos.png';
// import fb from '../../images/fb.png';
// import ig from '../../images/ig.png';
// import twitter from '../../images/twitter.png';
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
              <div className="nav-link" ><Link  to="/home" activeclassname="active"><i className="fa  fa-home">&nbsp;Home</i></Link></div>   
              <div className="nav-link" ><Link  to="/about" activeclassname="active"><i className="fa fa-file"> &nbsp;About Us</i></Link></div> 
              {/* <div className="nav-link" ><Link  to="/staff" activeclassname="active"><i className="fa fa-user"> &nbsp;Staff</i></Link></div>  */}
              <div className="nav-link"><Link  to="/service" activeclassname="active"><i className="fa fa-file"> &nbsp;Service</i></Link></div> 
              <div className="nav-link"><Link   to="/contact" activeclassname="active"><i className="fa fa-phone-square"> &nbsp;Contact Us</i></Link></div>  
              <div className="nav-link"><Link   to="/insurance" activeclassname="active"><i className="fa fa-phone-square"> &nbsp;Insurance</i></Link></div>
              <div className="nav-link"><Link   to="/forms" activeclassname="active"><i className="fa fa-edit"> &nbsp;Forms</i></Link></div>
           </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {/* <Navbar.Text>
                <span clas="navbartext" style={{color:"white"}}>&raquo; Care Center for Allergy & Asthma</span>
            </Navbar.Text> 
             <Nav className="mr-auto">
              <div className="nav-link">
                  <a href="">
                   <Image src={fb} />
                   </a>
              </div>  
              <div className="nav-link">
                <a href=""><Image src={ig} />
                </a>
              </div>
              <div className="nav-link">
                <a href=""><Image src={twitter} />
                </a>
              </div>
              
           </Nav> */}
          </Navbar.Collapse>
          {this.props.children}
        </Container>
      </Navbar>
    );
  }
}
export default Header;