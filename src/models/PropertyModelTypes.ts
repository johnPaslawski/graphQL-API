export type Property = {
    id: number;
    city: string;
    street: PropertyStreet;
    state: string;
    zipCode: number;
    weatherData: PropertyWeatherData;
    createdAt: Date;
    location: Location;
};

export type PropertyStreet = {
    propertyStreet: string;
    propertyNumber: string;
};

export type PropertyWeatherData = {
    current: WeatherCurrent;
};

export type WeatherCurrent = {
    current: {
        observation_time: string;
        temperature: number;
        weather_code: number;
        weather_icons: string[];
        weather_descriptions: string[];
        wind_speed: number;
        wind_degree: number;
        wind_dir: string;
        pressure: number;
        precip: number;
        humidity: number;
        cloudcover: number;
        feelslike: number;
        uv_index: number;
        visibility: number;
    },
    location: {
        lat: string,
        lon: string
    }
};

export type Location = {
    lat: number;
    lon: number;
};
