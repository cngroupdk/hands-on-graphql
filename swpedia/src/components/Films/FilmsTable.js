import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import { ItemsTable } from '../ItemsTable/ItemsTable.js';

class FilmsTable extends Component {
  static propTypes = {
    films: PropTypes.object.isRequired,
  };

  render() {
    const { films } = this.props;
    const { edges: filmEdges } = films;

    return (
      <ItemsTable
        items={filmEdges}
        headers={['ID', 'Title']}
        columnKeys={['rawId', 'title']}
        getLinkToItem={
          ({ id }) => `/films/${id}`
        }
      />
    );
  }
}

export const FilmsTableContainer = Relay.createContainer(FilmsTable, {
  fragments: {
    films: () => Relay.QL`
      fragment on FilmConnection @relay(plural: false) {
        edges {
          node {
            id
            rawId
            title
            planets {
              id
              rawId
              name
            }
          }
        }
      }
    `
  },
});
