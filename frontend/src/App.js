import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './features/CreateBook';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
         
          <Route path='/create-book' component={CreateBook} />
        </div>
      </Router>
    );
  }
}

export default App;