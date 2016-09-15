import React, { Component } from 'react';
import Relay from 'react-relay';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

import { AboutPage } from './components/Pages/AboutPage.js';
import { HomePage } from './components/Pages/HomePage.js';
import { AppWrapper } from './components/AppWrapper.js';
import { FilmsPageRenderer } from './components/Pages/FilmsPage.js';
import { FilmDetailPageRenderer } from './components/Pages/FilmDetailPage.js';
import { NotFoundPage } from './components/Pages/NotFoundPage.js';
import { PlanetDetailPageRenderer } from './components/Pages/PlanetDetailPage.js';
import { PlanetsPageRenderer } from './components/Pages/PlanetsPage.js';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8844/graphql')
);

export class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppWrapper}>
          <IndexRoute component={HomePage}/>
          <Route path="films">
            <IndexRoute component={FilmsPageRenderer}/>
            <Route path=":filmId" component={FilmDetailPageRenderer}/>
          </Route>
          <Route path="planets">
            <IndexRoute component={PlanetsPageRenderer}/>
            <Route path=":planetId" component={PlanetDetailPageRenderer}/>
          </Route>
          <Route path="about" component={AboutPage}/>
          <Route path="*" component={NotFoundPage}/>
        </Route>
      </Router>
    );
  }
}
