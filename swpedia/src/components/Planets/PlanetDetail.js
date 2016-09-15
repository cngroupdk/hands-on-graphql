import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import { Button, Col, Grid, Image, PageHeader, Row } from 'react-bootstrap';

import { FilmsTableContainer } from '../Films/FilmsTable.js';
import { InfoList } from '../InfoList/InfoList.js';

export class PlanetDetail extends Component {
  static propTypes = {
    planet: PropTypes.object.isRequired,
  };

  render() {
    const { planet, relay } = this.props;
    const safePlanet = planet || {};
    const {
      rawId,
      name,
      filmsConnection: films,
      frontImage,
      backImage,
    } = safePlanet;

    const infoItems = [
      { key: 'population', header: 'Population'},
      { key: 'diameter', header: 'Diameter', suffix: ' km'},
      { key: 'climate', header: 'Climate'},
      { key: 'surfaceWater', header: 'Surface Water', suffix: '%'},
    ];

    // const imageUrl = 'http://worldgen.bin.sh/worldgen.cgi?palette=Atlas&iter=5000&cmd=Create&name=PlanetName&pct_ice=0&height=250&seed=1169012608&rotate=0&projection=Spherical&pct_water=45&motif=SciFi';
    // const rotatedImageUrl = 'http://worldgen.bin.sh/worldgen.cgi?palette=Atlas&iter=5000&cmd=Create&name=PlanetName&pct_ice=0&height=250&seed=1169012608&rotate=0180&projection=Spherical&pct_water=45&motif=SciFi';

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
              <Button
                onClick={() =>
                  relay.setVariables({
                    imageSize: relay.variables.imageSize > 100 ? 100 : 250,
                  })
                }
              >
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
                <FilmsTableContainer films={films}/>
              </Col>
            </Row>
          </Col>
        </Grid>
      </div>
    );
  }
}

export const PlanetDetailContainer = Relay.createContainer(PlanetDetail, {
  initialVariables: {
    imageSize: 100,
  },
  fragments: {
    planet: () => Relay.QL`
      fragment on Planet {
        rawId

        name

        population
        diameter
        climate
        surfaceWater

        frontImage: image(size: $imageSize) {
          url
        }

        backImage: image(size: $imageSize, rotation: 180) {
          url
        }

        filmsConnection(first:100) {
          ${FilmsTableContainer.getFragment('films')}
        }
      }
    `
  },
});
