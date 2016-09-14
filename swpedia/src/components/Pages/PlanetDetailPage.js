import React, { Component } from 'react';

import { PlanetDetail } from '../Planets/PlanetDetail.js';

export class PlanetDetailPage extends Component {
  render() {
    const { params } = this.props;
    const { planetId } = params || {};

    const planet = {
      id: planetId,
      name: 'Tatoonie',
      population: 8000,
      climate: 'temperate, tropical',
      diameter: 10200,
      surface_water: 10,
      films: [
        {
          id: 1,
          title: 'A New Hope',
        },
      ],
      frontImage: {
        url: 'http://worldgen.bin.sh/worldgen.cgi?palette=Atlas&iter=5000&cmd=Create&name=PlanetName&pct_ice=0&height=250&seed=1169012608&rotate=0&projection=Spherical&pct_water=45&motif=SciFi',
      },
      backImage: {
        url: 'http://worldgen.bin.sh/worldgen.cgi?palette=Atlas&iter=5000&cmd=Create&name=PlanetName&pct_ice=0&height=250&seed=1169012608&rotate=0180&projection=Spherical&pct_water=45&motif=SciFi',
      }
    }

    return (
      <PlanetDetail planet={planet} />
    )
  }
}
