import React, { Component, PropTypes } from 'react';

import { ItemsTable } from '../ItemsTable/ItemsTable.js';

export class PlanetsTable extends Component {
  static propTypes = {
    planets: PropTypes.array.isRequired,
  };

  render() {
    const { planets } = this.props;

    return (
      <ItemsTable
        items={planets}
        headers={['ID', 'Name']}
        columnKeys={['id', 'name']}
        getLinkToItem={
          ({ id }) => `/planets/${id}`
        }
      />
    );
  }
}
