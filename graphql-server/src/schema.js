import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import { FilmType } from './types/film.js';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'Hello world!';
        }
      },
      oneFilm: {
        type: FilmType,
        resolve() {
          return {
            id: 1,
            title: 'Bond and chipmonks',
            opening_crawl: 'Yada yada yada',
          };
        }
      }
    }
  })
});

export default schema;
