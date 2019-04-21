import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Insurance from './components/Insurance/Insurance';
class App extends Component {
  render() {
    return (
      <Router>  
        <div>  
            <Header></Header>     
             {/* <Route path="/" component={Header}>              */}
              <Route exact={true} path="/home" component={Home}/>
              <Route path="/about" component={AboutUs}/>
              <Route path="/service" component={Service}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/insurance" component={Insurance}/>
            {/* </Route> */}
        </div>
      </Router>
    );
  }
}

export default App;
