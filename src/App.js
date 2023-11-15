// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'; // Import the Header component
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopement'; // Update the import
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header /> 
      <Switch>
        <Route exact path="/" component={All} />
        <Route path="/full-stack-development" component={FullStackDevelopment} />
        <Route path="/data-science" component={DataScience} />
        <Route path="/cyber-security" component={CyberSecurity} />
      </Switch>
    </Router>
  );
};

export default App;
