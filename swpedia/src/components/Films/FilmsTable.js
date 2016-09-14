import React, { Component, PropTypes } from 'react';

import { ItemsTable } from '../ItemsTable/ItemsTable.js';

export class FilmsTable extends Component {
  static propTypes = {
    films: PropTypes.array.isRequired,
  };

  render() {
    const { films } = this.props;

    return (
      <ItemsTable
        items={films}
        headers={['ID', 'Title']}
        columnKeys={['id', 'title']}
        getLinkToItem={
          ({ id }) => `/films/${id}`
        }
      />
    );
  }
}
