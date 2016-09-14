import React, { Component } from 'react';
import Relay from 'react-relay';
import { PageHeader } from 'react-bootstrap';

import { FilmsTable } from '../Films/FilmsTable.js';

class FilmsPageQueryConfig extends Relay.Route {
  static routeName = 'Films';
  static queries = {
    viewer: () => Relay.QL`query { viewer }`
  };
}

export class FilmsPage extends Component {
  render() {
    return (
      <div>
        <PageHeader>Films</PageHeader>
        <Relay.Renderer
          Container={FilmsTable}
          queryConfig={new FilmsPageQueryConfig()}
          environment={Relay.Store}
          render={({ done, props }) => {
            if (!done) {
              return <div>Loading...</div>;
            }
            return <FilmsTable {...props}/>;
          }}
        />
      </div>
    );
  }
}
