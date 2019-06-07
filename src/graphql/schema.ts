import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import { typeDefs } from './type-definitions'
import { resolvers } from './resolvers'

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema