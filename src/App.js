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
            <Helmet
                encodeSpecialCharacters={true}

                titleTemplate="https://jmolesco.github.io/carecenter/#/home"
              //onChangeClientState={(newState, addedTags, removedTags) => console.log(newState, addedTags, removedTags)}
              >

              <meta name="google-site-verification" content="dHposX6tXZ0hCOcg4aM04RRJeEg56ki7hohBlaDTc" />
              <meta name="description" content="Care Center for Allergy and Asthma,Dr. Cynthia Yango-Eugenio,CareCenter,Allergy,Asthma,Allergy & Asthma,Algonquin Illinois" />
              <meta name="keywords" 
                  content="Care Center for Allergy and Asthma,
                  Allergy & Asthma,
                    Algonquin Illinois,
                    Dr. Cynthia Yango-Eugenio,
                    Care Center for Allergy and Asthma Buffalo Grove,
                    CareCenter Buffalo Grove,
                    Care Center for Allergy and Asthma Algonquin,
                    CareCenter Algonquin,
                    Care Center for Allergy and Asthma,
                    Care Center for Allergy and Asthma Wheeling,
                    CareCenter Wheeling,
                    Care Center for Allergy and Asthma Prospect Heights,
                    CareCenter Prospect Heights,
                    Care Center for Allergy and Asthma Arlington Heights,
                    CareCenter Arlington Heights,
                    Care Center for Allergy and Asthma  Palatine,
                    CareCenter Palatine,
                    Care Center for Allergy and Asthma Vernon Hls,
                    CareCenter Vernon Hls, 
                    Care Center for Allergy and Asthma Rolling Meadows,
                    CareCenter Rolling Meadows, 
                    Care Center for Allergy and Asthma Mount Prospect,
                    CareCenter Mount Prospect, 
                    Care Center for Allergy and Asthma Deerfield,
                    CareCenter Deerfield, 
                    Care Center for Allergy and Asthma Northbrook,
                    CareCenter Northbrook, 
                    Care Center for Allergy and Asthma Lake Zurich,
                    CareCenter Lake Zurich,
                    Care Center for Allergy and Asthma Mundelein, 
                    CareCenter Mundelein, 
                    Care Center for Allergy and Asthma Highland Park, 
                    CareCenter Highland Park, 
                    Care Center for Allergy and Asthma Barrington,
                    CareCenter Barrington, 
                    Care Center for Allergy and Asthma Des Plaines, 
                    CareCenter Des Plaines,
                    Care Center for Allergy and Asthma Libertyvle, 
                    CareCenter Libertyvle,  
                    Care Center for Allergy and Asthma Lake in the Hls, 
                    CareCenter Lake in the Hls, 
                    Care Center for Allergy and Asthma Carpentersvle, 
                    CareCenter Cary, 
                    Care Center for Allergy and Asthma Crystal Lake,
                    CareCenter Crystal Lake, 
                    Care Center for Allergy and Asthma Huntley,
                    CareCenter Huntley,
                    Care Center for Allergy and Asthma Barrington,
                    CareCenter Barrington,
                    Care Center for Allergy and Asthma Elgin,
                    CareCenter Elgin,
                    Care Center for Allergy and Asthma Wauconda,
                    CareCenter Wauconda,
                    Care Center for Allergy and Asthma Lake Zurich,
                    CareCenter Lake Zurich,
                    Care Center for Allergy and Asthma Streamwood,
                    CareCenter Streamwood,
                    Care Center for Allergy and Asthma South Elgin,
                    CareCenter South Elgin,
                    Care Center for Allergy and Asthma Woodstock,
                    CareCenter Woodstock,
                    Care Center for Allergy and Asthma Bartlett,
                    CareCenter Bartlett,
                    Care Center for Allergy and Asthma Hanover Park,
                    CareCenter Hanover Park,
                    Care Center for Allergy and Asthma Hanover Park,
                    CareCenter Hanover Park,
                    Care,
                    Caring,
                    CareCenter,
                    Allergy,
                    Allergist,
                    Asthma,
                    carecenter md
                    
                    "/>
               
            </Helmet>
            <Header></Header>     
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
        </div>
      </Router>
    );
  }
}

export default App;
