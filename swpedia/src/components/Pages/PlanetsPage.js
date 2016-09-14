import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import { PlanetsTable } from '../Planets/PlanetsTable.js';

export class PlanetsPage extends Component {
  render() {
    const planets = [
      {
        id: 1,
        name: 'Tatoonie',
      },
      {
        id: 2,
        name: 'Alderaan',
      },
      {
        id: 3,
        name: 'Yavin IV',
      },
    ]

    return (
      <div>
        <PageHeader>Planets</PageHeader>
        <PlanetsTable
          planets={planets}
        />
      </div>
    );
  }
}
