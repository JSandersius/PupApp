import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
 
//these components will only be rendered if the path is exactly matched
//if we were to leave out the exact property, the component will render at the path starting
//at the suggested path
//if we don't add a path, we can chooese to render a component on no match whatsoever
//this gives us the option to add a 404 page 

const App = () => (

  <Router>
    <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          </Wrapper> 
          <Footer /> 
      </div>
      </Router>   
      );
    

export default App;
