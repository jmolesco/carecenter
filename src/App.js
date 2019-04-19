import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
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
            {/* </Route> */}
        </div>
      </Router>
    );
  }
}

export default App;
