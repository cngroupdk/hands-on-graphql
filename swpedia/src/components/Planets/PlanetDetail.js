import React, { Component, PropTypes } from 'react';

import { Button, Col, Grid, Image, PageHeader, Row } from 'react-bootstrap';

import { FilmsTable } from '../Films/FilmsTable.js';
import { InfoList } from '../InfoList/InfoList.js';

export class PlanetDetail extends Component {
  static propTypes = {
    planet: PropTypes.object.isRequired,
  };

  render() {
    const { planet } = this.props;
    const safePlanet = planet || {};
    const {
      rawId,
      name,
      films,
      frontImage,
      backImage,
    } = safePlanet;

    const infoItems = [
      { key: 'population', header: 'Population'},
      { key: 'diameter', header: 'Diameter', suffix: ' km'},
      { key: 'climate', header: 'Climate'},
      { key: 'surfaceWater', header: 'Surface Water', suffix: '%'},
    ];

    return (
      <div>
        <PageHeader>{name} <small>ID: {rawId}</small></PageHeader>
        <Grid>
          <Col xs={6}>
            <h2>Planet Info</h2>
            <InfoList
              data={safePlanet}
              items={infoItems}
            />
          </Col>
          <Col xs={6}>
            <p>
              <Button>
                toggle size
              </Button>
            </p>
            <Row>
              <Col xs={6}>
                <Image thumbnail src={(frontImage || {}).url}/>
              </Col>
              <Col xs={6}>
                <Image thumbnail src={(backImage || {}).url}/>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h2>Films</h2>
                <FilmsTable films={films}/>
              </Col>
            </Row>
          </Col>
        </Grid>
      </div>
    );
  }
}
