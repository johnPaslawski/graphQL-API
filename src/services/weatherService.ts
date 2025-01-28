import { WeatherCurrent } from "../models/PropertyModelTypes";
import axios from "axios";
import dotenv from 'dotenv';
import initMessages from "../consoleMessages/initMessages";

dotenv.config();
console.log(initMessages.apiKeyReady);

const BASE_URL = 'https://api.weatherstack.com/current';
const ACCESS_KEY = process.env.WEATHERSTACK_API_KEY || '';

export const getWeatherData = async (location: string) => {
    try {
        const response = await axios.get(BASE_URL,
            {
                params: {
                    access_key: ACCESS_KEY,
                    query: location
                }
            });

            if (response.data.error) {
                throw new Error(response.data.error.info);
            }
    
            return response.data;

    } catch(error) {
        throw new Error(`Unable to retrieve weather data. ${error}`);
    }
}

export const getWeatherDataMock = async (): Promise<WeatherCurrent> => {
   return new Promise<WeatherCurrent>((resolve) => {
    setTimeout(() => {
        resolve(weatherDataMock);
    }, 2000);
   })
}

const weatherDataMock: WeatherCurrent = {
    current: { 
        observation_time: "13:55 PM",
        temperature: 23,
        weather_code: 345,
        weather_icons: ["icon1", "icon2"],
        weather_descriptions: ["Sunny", "Windy"],
        wind_speed: 76,
        wind_degree: 45,
        wind_dir: "NE",
        pressure: 1003,
        precip: 3,
        humidity: 56,
        cloudcover: 0,
        feelslike: 18,
        uv_index: 5,
        visibility: 16
    },
    location: {
        lat: "23.4",
        lon: "57.1"
    }
    
}