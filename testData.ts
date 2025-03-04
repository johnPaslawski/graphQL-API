import { Property } from './src/models/property.types'

export const properties: Property[] = [
    {
        id: 1,
        city: "New York",
        street: {
            propertyStreet: "5th Avenue",
            propertyNumber: "101"
        },
        state: "NY",
        zipCode: 10001,
        weatherData: {
            current: {
                observation_time: "12:00 PM",
                temperature: 22,
                weather_code: 113,
                weather_icons: ["https://example.com/icon1.png"],
                weather_description: ["Sunny"],
                wind_speed: 10,
                wind_degree: 180,
                wind_dir: "S",
                pressure: 1012,
                precip: 0,
                humidity: 60,
                cloudcover: 10,
                feelslike: 22,
                uv_index: 5,
                visibility: 10
            },
            location: {
                lat: 40.7128,
                lon: -74.0060
            }
        }
    },
    {
        id: 2,
        city: "Los Angeles",
        street: {
            propertyStreet: "Sunset Boulevard",
            propertyNumber: "202"
        },
        state: "CA",
        zipCode: 90001,
        weatherData: {
            current: {
                observation_time: "3:00 PM",
                temperature: 28,
                weather_code: 116,
                weather_icons: ["https://example.com/icon2.png"],
                weather_description: ["Partly Cloudy"],
                wind_speed: 5,
                wind_degree: 250,
                wind_dir: "W",
                pressure: 1010,
                precip: 0,
                humidity: 50,
                cloudcover: 20,
                feelslike: 28,
                uv_index: 7,
                visibility: 16
            },
            location: {
                lat: 34.0522,
                lon: -118.2437
            }
        }
    },
    {
        id: 3,
        city: "Chicago",
        street: {
            propertyStreet: "Michigan Avenue",
            propertyNumber: "303"
        },
        state: "IL",
        zipCode: 60601,
        weatherData: {
            current: {
                observation_time: "10:00 AM",
                temperature: 15,
                weather_code: 119,
                weather_icons: ["https://example.com/icon3.png"],
                weather_description: ["Overcast"],
                wind_speed: 20,
                wind_degree: 300,
                wind_dir: "NW",
                pressure: 1005,
                precip: 1,
                humidity: 70,
                cloudcover: 90,
                feelslike: 13,
                uv_index: 3,
                visibility: 8
            },
            location: {
                lat: 41.8781,
                lon: -87.6298
            }
        }
    },
    {
        id: 4,
        city: "Miami",
        street: {
            propertyStreet: "Ocean Drive",
            propertyNumber: "404"
        },
        state: "FL",
        zipCode: 33139,
        weatherData: {
            current: {
                observation_time: "6:00 PM",
                temperature: 30,
                weather_code: 122,
                weather_icons: ["https://example.com/icon4.png"],
                weather_description: ["Thunderstorm"],
                wind_speed: 15,
                wind_degree: 90,
                wind_dir: "E",
                pressure: 1008,
                precip: 5,
                humidity: 80,
                cloudcover: 70,
                feelslike: 35,
                uv_index: 2,
                visibility: 5
            },
            location: {
                lat: 25.7617,
                lon: -80.1918
            }
        }
    }
];
