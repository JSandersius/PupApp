import React  from 'react';
import from { BroweserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

cont App = () => 
  <Router>
    <div>
        <Navbar />
        <Wrapper>
          </Wrapper> 
          <Footer /> 
      </div>
      </Router> 
    

export default App;
