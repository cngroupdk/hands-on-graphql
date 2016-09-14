import React, { Component, PropTypes } from 'react';

import { Col, Grid, PageHeader } from 'react-bootstrap';

import { InfoList } from '../InfoList/InfoList.js';
import { PlanetsTable } from '../Planets/PlanetsTable.js';

export class FilmDetail extends Component {
  static propTypes = {
    film: PropTypes.object.isRequired,
  };

  render() {
    const { film } = this.props;
    const safeFilm = film || {};
    const { rawId, title, openingCrawl, planets } = safeFilm;

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
            <PlanetsTable planets={planets}/>
          </Col>
        </Grid>
      </div>
    );
  }
}
