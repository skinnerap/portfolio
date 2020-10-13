import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/ui/Navigation/Navbar/Navbar';
import FixedBar from './components/ui/FixedBar/FixedBar';
import Home from './components/views/Home/Home';
import Contact from './components/views/Contact/Contact';
import Portfolio from './components/views/Portfolio/Portfolio';

function App() {

  return (
    <Router>
      <Navbar />
      <FixedBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  );

}

export default App;
