import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home.js';
import './app.css';
import Navbar from './navigation/Navbar'
import View2 from './navigation/View2';
import View3 from './navigation/View3';
import NoMatch from './navigation/NoMatch';

export default class App extends React.Component {
  render() {
    return (
      <div>

        <Navbar />
        <BrowserRouter>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/View2" component={View2} />
          <Route exact path ="/View3" component = {View3}/>
          <Route component = {NoMatch}/>
        </Switch>
        </BrowserRouter>
       
      </div>
    )
  }
}
