import {
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import { FilmType } from './types/film.js';

import { FILMS } from './mockdata.js';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      films: {
        type: new GraphQLList(FilmType),
        resolve() {
          return FILMS;
        },
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
      },
      hello: {
        type: GraphQLString,
        resolve() {
          return 'Hello world!';
        }
      }
    }
  })
});

export default schema;
