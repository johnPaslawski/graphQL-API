import PropertyDbModel from "../../models/PropertyDbModel";
import { Property } from "../../models/PropertyModelTypes";
import { getWeatherData } from "../../services/weatherService";

export const MutationResolvers = {

    addProperty: async (_: any, { input }: { input: Property }): Promise<PropertyDbModel> => {
        try {
            const weatherData = await getWeatherData(input.city);

            input.weatherData = {
                current: weatherData.current,
            };
            input.location = {
                    lat: weatherData.location.lat,
                    lon: weatherData.location.lon
            };
            
            return await PropertyDbModel.create(input);

        } catch (error) {
            console.error('Error adding property:', error);
            throw new Error('Failed to add property');
        }
    },
};
