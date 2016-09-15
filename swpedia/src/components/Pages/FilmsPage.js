import React, { Component } from 'react';
import Relay from 'react-relay';
import { PageHeader } from 'react-bootstrap';

import { FilmsTableContainer } from '../Films/FilmsTable.js';
import { createDefaultRenderer } from '../DefaultRenderer';

class FilmsPage extends Component {
  render() {
    const { viewer } = this.props;
    const { filmsConnection: films } = viewer || {};

    return (
      <div>
        <PageHeader>Films</PageHeader>
        <FilmsTableContainer films={films}/>
      </div>
    );
  }
}

const FilmsPageContainer = Relay.createContainer(FilmsPage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        filmsConnection(first:100){
          ${FilmsTableContainer.getFragment('films')}
        }
      }
    `,
  }
});

class FilmsRoute extends Relay.Route {
  static routeName = 'FilmsRoute';
  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  };
}

export const FilmsPageRenderer = createDefaultRenderer({
  Container: FilmsPageContainer,
  getQueryConfig() { return new FilmsRoute(); },
});
