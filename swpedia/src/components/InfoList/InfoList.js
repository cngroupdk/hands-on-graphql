import React, { Component, PropTypes } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export class InfoList extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
  };

  renderInfoItem({ key, header, suffix }, index) {
    const { data } = this.props;
    const content = data[key];

    return (
      <ListGroupItem key={index}>
        <div>{header}</div>
        <big>{content || ' - '}{suffix}</big>
      </ListGroupItem>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <ListGroup>
        {items.map(this.renderInfoItem, this)}
      </ListGroup>
    );
  }
}
