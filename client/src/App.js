import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import Aboutus from './components/aboutus/Aboutus';
import Projects from './components/projects/Projects';
import Createproject from './components/projects/Createproject';
import Updateproject from './components/projects/Updateproject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Route exact path="/" component = {Home} />
            <Route path="/projects" component = {Projects} />
            <Route path="/newproject" component = {Createproject} />
            <Route path="/updateproject" component = {Updateproject} />
            <Route path="/aboutus" component = {Aboutus} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
