import React, { Component } from 'react';

import { FilmDetail } from '../Films/FilmDetail.js';

export class FilmDetailPage extends Component {
  render() {
    const { params } = this.props;
    const { filmId } = params || {};
    const film = {
      id: filmId,
      title: 'Some Film',
      openingCrawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      director: 'George Lucas',
      releaseDate: '1977-05-25',
      planets: [
        {
          id: 1,
          name: 'Tatoonie',
          population: 8000,
          diameter: 10200,
        },
        {
          id: 2,
          name: 'Alderaan',
          diameter: 12500,
          population: 2000000000,
        },
      ],
    }

    return (
      <FilmDetail film={film}/>
    );
  }
}
