import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Insurance from './components/Insurance/Insurance';
import OtherInsurance from './components/Insurance/OtherInsurance';
import Insurance1 from './components/Insurance/Insurance1';
import Forms from './components/Forms/Forms';
import Staff from './components/Staff/Staff';
import Footer from './components/Footer/Footer';
import { Helmet } from "react-helmet";
//import Map from './components/MapSample/Map';
class App extends Component {
  render() {
    return (
      <Router>  
        <div>  
          <Helmet>
            <title>My seo app</title>
            <meta name="description" content="carecenter testing react helmet" />
            <meta name="keywords" content="react-care-center,care center seo-carecenter,helmet-carecenter" />
            <meta name="description" content="Care Center for Allergy and Asthma" />
            <meta name="keywords" 
                  content="
                    Care,
                    Caring,
                    CareCenter,
                    Allergy,
                    Asthma,
                    Dr. Cynthia Yango-Eugenio,
                    Buffalo Grove,
                    Algonquin
                  " />
          </Helmet>
            <Header></Header>     
             {/* <Route path="/" component={Header}>              */}
              <Route exact={true} path="/home" component={Home}/>
              <Route path="/about" component={AboutUs}/>
              <Route path="/staff" component={Staff}/>
              <Route path="/service" component={Service}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/insurance" component={Insurance}/>        
              <Route path="/otherinsurance" component={OtherInsurance}/>
              <Route path="/insurance1" component={Insurance1}/>
              <Route path="/forms" component={Forms}/>
              <Footer></Footer> 
              {/* <Route path="/map" component={Map}/> */}
            {/* </Route> */}

        </div>
      </Router>
    );
  }
}

export default App;
