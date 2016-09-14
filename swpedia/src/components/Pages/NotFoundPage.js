import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, PageHeader } from 'react-bootstrap';

export class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <PageHeader>Error 404: <small>Page not found!</small></PageHeader>
        <p>You may continue back to:</p>
        <LinkContainer to="/">
          <Button bsStyle="primary">Home</Button>
        </LinkContainer>
      </div>
    )
  }
}
