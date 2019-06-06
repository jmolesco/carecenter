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
          {/* <Helmet>
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
          </Helmet> */}
            <Helmet
                encodeSpecialCharacters={true}

                titleTemplate="https://jmolesco.github.io/carecenter/"

                defaultTitle="My Care Center Title"

                onChangeClientState={(newState, addedTags, removedTags) => console.log(newState, addedTags, removedTags)}
              >
              <meta name="google-site-verification" content="dHposX6tXZ0hCOcg4aM04RRJeIlEg56ki7hohBlaDTc" />
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
              <meta name="description" content="Care Center Application" />
              <meta name="keywords" content="
              Care Center for Allergy and Asthma,
              Wheeling, IL
              Prospect Heights, IL
              Arlington Heights, IL
              Palatine, IL
              Vernon Hills, IL
              Rolling Meadows, IL
              Mount Prospect, IL
              Deerfield, IL
              Northbrook, IL
              Lake Zurich, IL
              Mundelein, IL
              Highland Park, IL
              Barrington, IL
              Des Plaines, IL
              Libertyville, IL
              Lake in the Hills, IL
              Carpentersville, IL
              Cary, IL
              Crystal Lake, IL
              Huntley, IL
              Barrington, IL
              Elgin, IL
              Wauconda, IL
              Lake Zurich, IL
              Streamwood, IL
              South Elgin, IL
              Woodstock, IL
              Bartlett, IL
              Hanover Park, IL
              Palatine, IL
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
