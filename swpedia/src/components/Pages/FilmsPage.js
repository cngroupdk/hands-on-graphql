import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import { FilmsTable } from '../Films/FilmsTable.js';

export class FilmsPage extends Component {
  render() {
    const films = [
      {
        id: 1,
        title: 'A New Hope',
      },
      {
        id: 2,
        title: 'The Empire Strikes Back',
      },
    ];

    return (
      <div>
        <PageHeader>Films</PageHeader>
        <FilmsTable films={films}/>
      </div>
    );
  }
}
