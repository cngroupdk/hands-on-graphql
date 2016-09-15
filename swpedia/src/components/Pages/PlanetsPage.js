import React, { Component } from 'react';
import Relay from 'react-relay';
import { PageHeader } from 'react-bootstrap';

import { PlanetsTableContainer } from '../Planets/PlanetsTable.js';
import { createDefaultRenderer } from '../DefaultRenderer';

class PlanetsPage extends Component {
  render() {
    const { viewer } = this.props;
    const { planetsConnection: planets } = viewer || {};

    return (
      <div>
        <PageHeader>Planets</PageHeader>
        <PlanetsTableContainer
          planets={planets}
        />
      </div>
    );
  }
}

const PlanetsPageContainer = Relay.createContainer(PlanetsPage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        planetsConnection(first:100) {
          ${PlanetsTableContainer.getFragment('planets')}
        }
      }
    `,
  }
});

class PlanetsRoute extends Relay.Route {
  static routeName = 'PlanetsRoute';
  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  };
}

export const PlanetsPageRenderer = createDefaultRenderer({
  Container: PlanetsPageContainer,
  getQueryConfig() { return new PlanetsRoute(); },
});
