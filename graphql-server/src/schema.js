import {
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import fetch from 'node-fetch';
import { cachedFetchJSONFromSWAPIAllResults } from './data/swapi.js';

import { FilmType } from './types/film.js';
import { PlanetType } from './types/planet.js';

import { FILMS } from './mockdata.js';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      planets: {
        type: new GraphQLList(PlanetType),
        args: {
          filter: { type: GraphQLString },
        },
        resolve(source, args) {
          const { filter } = args;
          if (filter === 'with films') {
            return cachedFetchJSONFromSWAPIAllResults('/planets')
              .then(planets => planets.filter(
                planet => planet.films.length > 0
              ))
            ;
          }
          return cachedFetchJSONFromSWAPIAllResults('/planets');
        }
      },
      films: {
        type: new GraphQLList(FilmType),
        // async resolve() {
        //   const response = await fetch('http://swapi.co/api/films/')
        //   const text = await response.text();
        //   const data = JSON.parse(text);
        //   return data.results;
        // },
        resolve() {
          return cachedFetchJSONFromSWAPIAllResults('/films');
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
