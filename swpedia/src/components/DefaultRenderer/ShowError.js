import React from 'react';
import { Alert, Button, Clearfix } from 'react-bootstrap';

export const ShowError = ({ error, retry }) => (
  <Alert bsStyle="danger">
    <h4>Error</h4>
    <pre>{error.toString()}</pre>
    <div className="pull-right">
      <Button onClick={retry}>Reload</Button>
    </div>
    <Clearfix/>
  </Alert>
)
