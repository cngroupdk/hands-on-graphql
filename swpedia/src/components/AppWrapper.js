import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { AppNavBar } from './AppNavBar.js';

export class AppWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <AppNavBar />
        <Clearfix />
        <Grid>
          <Row>
            <Col xs={12}>
              <div>
                {children}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
