import axios from 'axios';
import { WEATHER_API_KEY } from '@env';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  name: string;
}

export interface ForecastResponse {
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
}

export const weatherApi = {
  getCurrentWeather: async (lat: number, lon: number): Promise<WeatherResponse> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch current weather data');
    }
  },

  getForecast: async (lat: number, lon: number): Promise<ForecastResponse> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch forecast data');
    }
  },

  getWeatherByCity: async (city: string): Promise<WeatherResponse> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data for the specified city');
    }
  }
}; 