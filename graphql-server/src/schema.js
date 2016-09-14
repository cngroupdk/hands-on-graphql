import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
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
