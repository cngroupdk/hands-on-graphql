import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => {
    return {
      url: { type: GraphQLString },
      width: { type: GraphQLInt },
      height: { type: GraphQLInt },
    };
  },
});
