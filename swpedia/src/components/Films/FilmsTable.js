import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import { ItemsTable } from '../ItemsTable/ItemsTable.js';

class FilmsTableRaw extends Component {

  render() {
    const { viewer } = this.props;
    const { films } = viewer;

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

export const FilmsTable = Relay.createContainer(FilmsTableRaw, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        films {
          id
          title
        }
      }
    `
  }
})
