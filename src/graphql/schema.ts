import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLString } from 'graphql';
import { PropertyType } from './types/PropertyType';
import { PropertyInputType } from './types/InputTypes';
import { MutationResolvers } from './resolvers/MutationResolvers';
import { QueryResolvers } from './resolvers/QueryResolvers';
import { SQLitePropertyRepository } from '../infrastructure/repositories/implementations/SQLitePropertyRepository';

const propertyRepository = new SQLitePropertyRepository();
const queryResolvers = QueryResolvers(propertyRepository);

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllProperties: {
            type: new GraphQLList(PropertyType),
            args: {
                city: {type: GraphQLString},
                zipCode: {type: GraphQLString},
                state: {type: GraphQLString},
                sortBy: {type: GraphQLString},
                order: {type: GraphQLString}
            },
            resolve: queryResolvers.getAllProperties
        },
        getPropertyById: {
            type: PropertyType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: queryResolvers.getPropertyById
        }
    }
})

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProperty: {
            type: PropertyType,
            args: {
                input: { type: PropertyInputType },
            },
            resolve: MutationResolvers.addProperty
        }
    }
});

export const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
});
