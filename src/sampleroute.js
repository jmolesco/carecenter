import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
             <Route exact={true} path="/home" component={Home}/>
              <Route path="/about" component={AboutUs}/>
              <Route path="/staff" component={Staff}/>
              <Route path="/service" component={Service}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/insurance" component={Insurance}/>        
              <Route path="/otherinsurance" component={OtherInsurance}/>
              <Route path="/insurance1" component={Insurance1}/>
              <Route path="/forms" component={Forms}/>
    </Route>
);