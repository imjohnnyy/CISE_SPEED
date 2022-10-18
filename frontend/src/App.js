import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom';
import './App.css';
import Home from './features/Home';
import NavBar from './features/NavBar';
import CreateBook from './features/CreateBook';
import ViewArticles from './features/ViewArticles';
import ModView from './features/ModView';
import NotFoundPage from "./features/404";

class App extends Component {
  render() {
    return (
     
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create-book' component={CreateBook} />
          <Route exact path='/view-articles' component={ViewArticles} />
          <Route exact path='/mod-view' component={ModView} />
          <Route component={NotFoundPage}/>
      	  <Redirect to="/404"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;