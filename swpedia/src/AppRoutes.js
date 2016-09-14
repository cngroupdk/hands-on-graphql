import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

import { AboutPage } from './components/Pages/AboutPage.js';
import { HomePage } from './components/Pages/HomePage.js';
import { AppWrapper } from './components/AppWrapper.js';
import { FilmsPage } from './components/Pages/FilmsPage.js';
import { FilmDetailPage } from './components/Pages/FilmDetailPage.js';
import { NotFoundPage } from './components/Pages/NotFoundPage.js';
import { PlanetDetailPage } from './components/Pages/PlanetDetailPage.js';
import { PlanetsPage } from './components/Pages/PlanetsPage.js';

import Relay from 'react-relay';
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(
    'http://localhost:8844/graphql'
  )
);

export class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppWrapper}>
          <IndexRoute component={HomePage}/>
          <Route path="films">
            <IndexRoute component={FilmsPage}/>
            <Route path=":filmId" component={FilmDetailPage}/>
          </Route>
          <Route path="planets">
            <IndexRoute component={PlanetsPage}/>
            <Route path=":planetId" component={PlanetDetailPage}/>
          </Route>
          <Route path="about" component={AboutPage}/>
          <Route path="*" component={NotFoundPage}/>
        </Route>
      </Router>
    );
  }
}
