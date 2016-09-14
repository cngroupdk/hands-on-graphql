import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  globalIdField,
} from 'graphql-relay';

import { mapIdsToObjectsPromise, swapiURLtoId  } from '../data';
import { nodeInterface } from '../node-definition';

const FilmType = new GraphQLObjectType({
  name: 'Film',
  fields: () => {
    const { PlanetConnection, PlanetType } = require('./planet');

    return {
      id: globalIdField(
        FilmType.name,
        ({ url }) => swapiURLtoId(url)
      ),
      rawId: {
        type: GraphQLInt,
        resolve: ({ url }) => swapiURLtoId(url)
      },
      title: { type: GraphQLString },
      director: { type: GraphQLString },
      openingCrawl: {
        type: GraphQLString,
        resolve: obj => obj.opening_crawl,
      },
      releaseDate: {
        type: GraphQLString,
        resolve: obj => obj.release_date,
      },
      planets: {
        type: new GraphQLList(PlanetType),
        resolve({ planets }) {
          return mapIdsToObjectsPromise(planets);
        },
      },
      planetsConnection: {
        type: PlanetConnection,
        args: connectionArgs,
        async resolve({ planets }, args) {
          const allPlanets = await mapIdsToObjectsPromise(planets);
          return connectionFromArray(allPlanets, args);
        },
      },
    };
  },
  interfaces: [nodeInterface],
 });

 const { connectionType: FilmConnection } = connectionDefinitions({
   nodeType: FilmType,
 });

 export {
   FilmType,
   FilmConnection,
 };
