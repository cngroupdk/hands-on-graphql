import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import { ItemsTable } from '../ItemsTable/ItemsTable.js';

export class PlanetsTable extends Component {
  static propTypes = {
    planets: PropTypes.object.isRequired,
  };

  render() {
    const { planets } = this.props;
    const safePlanetEdges = (planets || {}).edges || [];

    return (
      <ItemsTable
        items={safePlanetEdges}
        headers={['ID', 'Name', 'Population', 'Diameter']}
        columnKeys={['rawId', 'name', 'population', 'diameter']}
        getLinkToItem={
          ({ id }) => `/planets/${id}`
        }
      />
    );
  }
}

export const PlanetsTableContainer = Relay.createContainer(PlanetsTable, {
  fragments: {
    planets: () => Relay.QL`
      fragment on PlanetConnection @relay(plural: false) {
        edges {
          node {
            id
            rawId
            name
            population
            diameter
          }
        }
      }
    `
  },
});
