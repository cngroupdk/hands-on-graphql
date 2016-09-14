import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import { ViewerType } from './types/viewer.js';
import { nodeField } from './node-definition.js';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      node: nodeField,
      viewer: {
        type: ViewerType,
        resolve: () => ({}),
      },
    },
  }),
});

export default schema;
