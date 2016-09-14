import React, { Component } from 'react';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Nav, Navbar, NavItem } from 'react-bootstrap';

export class AppNavBar extends Component {
  renderLinkTo(title, to) {
    return (
      <LinkContainer to={to}>
        <NavItem>{title}</NavItem>
      </LinkContainer>
    );
  }

  render() {
    return (
      <Navbar fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">SWpedia</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.renderLinkTo('Films', '/films')}
              {this.renderLinkTo('Planets', '/planets')}
            </Nav>
            <Nav pullRight>
              {this.renderLinkTo('About', '/about')}
            </Nav>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  }
}
