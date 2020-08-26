import React from 'react';
import './App.css';
import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './Containers/ContactUs/ContactUs';
import Post from './Containers/Post/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post" component={Post} />
      </div>
    </Router>    
  );
}

export default App;
