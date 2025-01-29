import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList } from 'graphql';

export const PropertyStreetInputType = new GraphQLInputObjectType({
    name: 'PropertyStreetInput',
    fields: {
        propertyStreet: { type: new GraphQLNonNull(GraphQLString) },
        propertyNumber: { type: new GraphQLNonNull(GraphQLString) },
    }
});

//// ------------------------------------------------------------------------------------------
//// |   PropertyWeatherDataInputType & LocationInputType left commented for testing purposes |
//// |   NOT NEEDED when Weather API switched ON                                              |
//// ------------------------------------------------------------------------------------------

export const PropertyInputType = new GraphQLInputObjectType({
    name: 'PropertyInput',
    fields: {
        city: { type: new GraphQLNonNull(GraphQLString) },
        street: { type: new GraphQLNonNull(PropertyStreetInputType) },
        state: { type: new GraphQLNonNull(GraphQLString) },
        zipCode: { type: new GraphQLNonNull(GraphQLString) },
        
        // weatherData: { type: PropertyWeatherDataInputType },
        // location: { type: LocationInputType },
    }
});


// export const LocationInputType = new GraphQLInputObjectType({
//     name: 'WeatherLocationInput',
//     fields: {
//         lat: { type: GraphQLString },
//         lon: { type: GraphQLString },
//     },
// });

// export const PropertyWeatherDataInputType = new GraphQLInputObjectType({
//     name: 'PropertyWeatherDataInput',
//     fields: {
//         current: { type: WeatherCurrentInputType },
//     },
// });

// export const WeatherCurrentInputType = new GraphQLInputObjectType({
//     name: 'WeatherCurrentInput',
//     fields: {
//         observation_time: { type: GraphQLString },
//         temperature: { type: GraphQLInt },
//         weather_code: { type: GraphQLInt },
//         weather_icons: { type:new GraphQLList(GraphQLString) },
//         weather_descriptions: { type: new GraphQLList(GraphQLString) },
//         wind_speed: { type: GraphQLInt },
//         wind_degree: { type: GraphQLInt },
//         wind_dir: { type: new GraphQLNonNull(GraphQLString) },
//         pressure: { type: GraphQLInt },
//         precip: { type: GraphQLInt },
//         humidity: { type: GraphQLInt },
//         cloudcover: { type: GraphQLInt },
//         feelslike: { type: GraphQLInt },
//         uv_index: { type: GraphQLInt },
//         visibility: { type: GraphQLInt },
//     },
// });