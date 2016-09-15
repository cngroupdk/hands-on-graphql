import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

import './ItemsTable.css';

export class ItemsTable extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    columnKeys: PropTypes.array.isRequired,
    getLinkToItem: PropTypes.func.isRequired,
  }

  getCellRenderer(item) {
    const { getLinkToItem } = this.props;
    const linkToFilm = getLinkToItem(item);
    return (text, index) => {
      return (
        <td key={index}>
          <Link to={linkToFilm}>
            {text}
          </Link>
        </td>
      );
    }
  }

  renderRow(item, index) {
    const itemNode = item.node
    const { columnKeys } = this.props;
    const cols = columnKeys.map(columnKey => itemNode[columnKey]);
    const renderCell = this.getCellRenderer(itemNode);
    return (
      <tr key={index}>
        {cols.map(renderCell)}
      </tr>
    );
  }

  render() {
    const {
      items,
      headers,
    } = this.props;

    return (
      <Table striped hover condensed className="ItemsTable">
        <thead>
          <tr>
            {headers.map((title, index) =>
              <th key={index}>{title}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {items.map(this.renderRow, this)}
        </tbody>
      </Table>
    );
  }
}
