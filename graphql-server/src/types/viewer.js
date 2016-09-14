import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import {
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay';
import { getAllFilmsPromise, getAllPlanetsPromise } from '../data';

export const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => {
    const { PlanetType, PlanetConnection } = require('./planet');
    const { FilmType, FilmConnection } = require('./film');

    return {
      planets: {
        type: new GraphQLList(PlanetType),
        resolve() {
          return getAllPlanetsPromise();
        },
      },
      planetsConnection: {
        type: PlanetConnection,
        args: connectionArgs,
        async resolve(obj, args) {
          const allPlanets = await getAllPlanetsPromise();
          return connectionFromArray(allPlanets, args);
        },
      },
      films: {
        type: new GraphQLList(FilmType),
        resolve() {
          return getAllFilmsPromise();
        },
      },
      filmsConnection: {
        type: FilmConnection,
        args: connectionArgs,
        async resolve(obj, args) {
          const allFilms = await getAllFilmsPromise();
          return connectionFromArray(allFilms, args);
        },
      },
    };
  },
});
