import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './features/NavBar';
import CreateBook from './features/CreateBook';
import ViewArticles from './features/ViewArticles';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/view-articles' component={ViewArticles} />
        </div>
      </Router>
    );
  }
}

export default App;