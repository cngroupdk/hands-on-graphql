import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import { Col, Grid, PageHeader } from 'react-bootstrap';

import { PlanetsTableContainer } from '../Planets/PlanetsTable.js';
import { InfoList } from '../InfoList/InfoList.js';

export class FilmDetail extends Component {
  static propTypes = {
    film: PropTypes.object.isRequired,
  };

  render() {
    const { film } = this.props;
    const safeFilm = film || {};
    const { rawId, title, openingCrawl, planetsConnection: planets } = safeFilm;

    const infoItems = [
      { key: 'director', header: 'Director'},
      { key: 'releaseDate', header: 'Release Date'},
    ];

    return (
      <div>
        <PageHeader>{title} <small>ID: {rawId}</small></PageHeader>
        <Grid>
          <Col xs={6}>
            <h2>Film Info</h2>
            <InfoList
              data={film}
              items={infoItems}
            />
            <h2>Opening Crawl</h2>
            <pre>{openingCrawl}</pre>
          </Col>
          <Col xs={6}>
            <h2>Planets</h2>
            <PlanetsTableContainer planets={planets}/>
          </Col>
        </Grid>
      </div>
    );
  }
}

export const FilmDetailContainer = Relay.createContainer(FilmDetail, {
  fragments: {
    film: () => Relay.QL`
      fragment on Film {
        rawId
        title

        director
        openingCrawl
        releaseDate

        planetsConnection(first:100) {
          ${PlanetsTableContainer.getFragment('planets')}
        }
      }
    `
  },
});
