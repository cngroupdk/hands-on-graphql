import {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';

export const FilmType = new GraphQLObjectType({
  name: 'Film',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    director: { type: GraphQLString },
    openingCrawl: {
      type: GraphQLString,
      resolve(source) {
        return source.opening_crawl;
      }
    },
  },
});
