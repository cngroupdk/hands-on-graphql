export const FILMS = [
  {
    id: 1,
    title: 'A New Hope',
    openingCrawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    director: 'George Lucas',
    releaseDate: '1977-05-25',
    planets: [1, 3],
  },
  {
    id: 2,
    title: 'The Empire Strikes Back',
    openingCrawl: "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
    director: 'Irvin Kershner',
    releaseDate: '1980-05-17',
    planets: [2],
  },
];

export const PLANETS = [
  {
    id: 1,
    name: 'Tatoonie',
    population: 8000,
    climate: 'temperate, tropical',
    diameter: 10200,
    surface_water: 10,
    films: [1],
  },
  {
    id: 2,
    name: 'Alderaan',
    diameter: 12500,
    climate: 'temperate',
    surface_water: 40,
    population: 2000000000,
    films: [2],
  },
  {
    id: 3,
    name: 'Yavin IV',
    diameter: 10200,
    climate: 'temperate, tropical',
    surface_water: 8,
    population: 1000,
    films: [1],
  },
];
