import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import logo from './logo.svg';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        </Wrapper>
        <Footer />
        </div>
        </Router>


export default App;
