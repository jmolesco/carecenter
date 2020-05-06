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
// import { Helmet } from "react-helmet";
//import Map from './components/MapSample/Map';
class App extends Component {
  render() {
    return (
      <Router>  
        <div>  
            {/* <Helmet
                encodeSpecialCharacters={true}
                titleTemplate="http://carecenterforallergy.com/"
               >

              <meta name="google-site-verification" content="JYnTJH5iValo1JnZw8OFGJ26BTWFcsOFC0UvzpJ_X3Q" />
              <meta 
                 content="Dr. Cynthia Yango Eugenio is an allergist in Buffalo Grove Illinois,allergist Algonquin Illinois,allergist Wheeling Illinois and allergist Arlington Heights. 
                 She's been allergist in Buffalo Grove Illinois,allergist Algonquin Illinois,allergist Wheeling Illinois and allergist Arlington Heights for many years."
                  name="description" />
                  <meta name="keywords" 
                  content="Care Center for Allergy and Asthma,
                  Allergist in Buffalo Grove Allergist in Algonquin Allergist in Wheeling  Allergist in Prospect Heights Allergist in Arlington Heights Allergist in  Palatine Allergist in Vernon Hls Allergist in Rolling Meadows Allergist in Mount Prospect Allergist in Deerfield Allergist in Northbrook Allergist in Lake Zurich Allergist in Mundelein Allergist in Highland Park Allergist in Barrington Allergist in Des Plaines Allergist in Libertyvle Allergist in Lake in the Hls Allergist in Carpentersvle Allergist in Crystal Lake Allergist in Huntley Allergist in Barrington Allergist in Elgin Allergist in Wauconda Allergist in Lake Zurich Allergist in Streamwood Allergist in South Elgin Allergist in Woodstock Allergist in Bartlett Allergist in Hanover Park Allergist in Hanover Park
                    Allergy & Asthma,
                    Algonquin Illinois,
                    Dr. Cynthia Yango-Eugenio,
                    Allergy doctor in Buffalo Grove,
                    CareCenter Buffalo Grove,
                    Allergy doctor in Algonquin,
                    CareCenter Algonquin,
                    Allergy doctor in,
                    Allergy doctor in Wheeling,
                    CareCenter Wheeling,
                    Allergy doctor in Prospect Heights,
                    CareCenter Prospect Heights,
                    Allergy doctor in Arlington Heights,
                    CareCenter Arlington Heights,
                    Allergy doctor in  Palatine,
                    CareCenter Palatine,
                    Allergy doctor in Vernon Hls,
                    CareCenter Vernon Hls, 
                    Allergy doctor in Rolling Meadows,
                    CareCenter Rolling Meadows, 
                    Allergy doctor in Mount Prospect,
                    CareCenter Mount Prospect, 
                    Allergy doctor in Deerfield,
                    CareCenter Deerfield, 
                    Allergy doctor in Northbrook,
                    CareCenter Northbrook, 
                    Allergy doctor in Lake Zurich,
                    CareCenter Lake Zurich,
                    Allergy doctor in Mundelein, 
                    CareCenter Mundelein, 
                    Allergy doctor in Highland Park, 
                    CareCenter Highland Park, 
                    Allergy doctor in Barrington,
                    CareCenter Barrington, 
                    Allergy doctor in Des Plaines, 
                    CareCenter Des Plaines,
                    Allergy doctor in Libertyvle, 
                    CareCenter Libertyvle,  
                    Allergy doctor in Lake in the Hls, 
                    CareCenter Lake in the Hls, 
                    Allergy doctor in Carpentersvle, 
                    CareCenter Cary, 
                    Allergy doctor in Crystal Lake,
                    CareCenter Crystal Lake, 
                    Allergy doctor in Huntley,
                    CareCenter Huntley,
                    Allergy doctor in Barrington,
                    CareCenter Barrington,
                    Allergy doctor in Elgin,
                    CareCenter Elgin,
                    Allergy doctor in Wauconda,
                    CareCenter Wauconda,
                    Allergy doctor in Lake Zurich,
                    CareCenter Lake Zurich,
                    Allergy doctor in Streamwood,
                    CareCenter Streamwood,
                    Allergy doctor in South Elgin,
                    CareCenter South Elgin,
                    Allergy doctor in Woodstock,
                    CareCenter Woodstock,
                    Allergy doctor in Bartlett,
                    CareCenter Bartlett,
                    Allergy doctor in Hanover Park,
                    CareCenter Hanover Park,
                    Allergy doctor in Hanover Park,
                    CareCenter Hanover Park,
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
                    carecenter md,
                    Care Center,
                    care center,
                    Buffalo Grove,
                    Algonquin
                    difficulty breathing,
                    exercise intolerance, 
                    Persistent cough,
                    work related asthma, 
                    Animal/pollen/dust/mold allergy,
                    Itchy and red eyes,
                    eye puffiness,
                    dark circles under the eyes,
                    swelling of the eyes,
                    food allergy, 
                    gluten sensitivity, 
                    nut allergy, 
                    aspirin allergy 
                    abdominal pain, 
                    diarrhea, 
                    nausea 
                    vomiting 
                    constipation, 
                    bloating, 
                    abdominal cramps,
                    Malaise, 
                    flu like symptoms, 
                    fatigue, 
                    anaphylaxis, 
                    itching/swelling or tingling of the mouth, 
                    swelling of the lips, face, tongue or other parts of the body,
                    Eczema, 
                    Hives/Urticaria/ Angioedema, 
                    Contact Dermatitis/poison ivy
                    Food reaction/Drug reaction, 
                    Photosensitivity, 
                    Skin allergy due to Latex, pet dander,  Sunlight, Insects, Drugs " />
               
            </Helmet> */}
            <Header></Header>     
              <Route exact={true} path="/" component={Home}/>
              <Route path="/home" component={Home}/>
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
