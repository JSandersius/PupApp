import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search"
import Navabar from "./components/Navabar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => 
  <Router>
    <div>
      <Navar />
      <Wrapper>
        <Route exact path="/" component={About} /> 
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component= {Discover} /> 
        <Route exact path="/search" component={Search} />
      </Wrapper> 
      <Footer />
      </div>
  </Router>


export default App;
