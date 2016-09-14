import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import { FilmsTable } from '../Films/FilmsTable.js';

export class FilmsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:8844/graphql', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "query=query { films { title, id, director } }"
    }).then(
      res => res.text()
    ).then(
      text => {
        const data = JSON.parse(text);
        this.setState({ films: data.data.films });
      }
    );
  }
  render() {
    const { films } = this.state;
    return (
      <div>
        <PageHeader>Films</PageHeader>
        <FilmsTable films={films}/>
      </div>
    );
  }
}
