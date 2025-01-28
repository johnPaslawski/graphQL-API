import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList } from 'graphql';

export const PropertyStreetType = new GraphQLObjectType({
    name: 'PropertyStreet',
    fields: {
        propertyStreet: { type: new GraphQLNonNull(GraphQLString) },
        propertyNumber: { type: new GraphQLNonNull(GraphQLString) },
    },
});

export const WeatherCurrentType = new GraphQLObjectType({
    name: 'WeatherCurrent',
    fields: {
        observation_time: { type: GraphQLString },
        temperature: { type: GraphQLInt },
        weather_code: { type: GraphQLInt },
        weather_icons: { type:new GraphQLList(GraphQLString) },
        weather_descriptions: { type: new GraphQLList(GraphQLString) },
        wind_speed: { type: GraphQLInt },
        wind_degree: { type: GraphQLInt },
        wind_dir: { type: new GraphQLNonNull(GraphQLString) },
        pressure: { type: GraphQLInt },
        precip: { type: GraphQLInt },
        humidity: { type: GraphQLInt },
        cloudcover: { type: GraphQLInt },
        feelslike: { type: GraphQLInt },
        uv_index: { type: GraphQLInt },
        visibility: { type: GraphQLInt },
    },
});

export const LocationType = new GraphQLObjectType({
    name: 'WeatherLocation',
    fields: {
        lat: { type: GraphQLString },
        lon: { type: GraphQLString },
    },
});

export const PropertyWeatherDataType = new GraphQLObjectType({
    name: 'PropertyWeatherData',
    fields: {
        current: { type: WeatherCurrentType },
        // location: { type: LocationType },
    },
});

export const PropertyType = new GraphQLObjectType({
    name: 'Property',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        city: { type: new GraphQLNonNull(GraphQLString) },
        street: { type: new GraphQLNonNull(PropertyStreetType) },
        state: { type: new GraphQLNonNull(GraphQLString) },
        zipCode: { type: new GraphQLNonNull(GraphQLString) },
        weatherData: { type: PropertyWeatherDataType },
        location: { type: LocationType },
        createdAt: {
            type: GraphQLString,
            resolve: (parent) => {
                const rawValue = parent.createdAt;
                return rawValue ? new Date(rawValue).toISOString() : null;
            }
        }
    },
});
