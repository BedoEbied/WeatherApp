import { create } from 'zustand';
import { WeatherState, WeatherData, ForecastData, LocationData } from '../types/weather.types';
import { weatherApi } from '../api/weatherApi';

const initialState: WeatherState = {
  currentWeather: null,
  forecast: [],
  location: null,
  isLoading: false,
  error: null,
};

export const useWeatherStore = create<WeatherState & {
  setLocation: (location: LocationData) => void;
  fetchWeatherData: () => Promise<void>;
  fetchWeatherByCity: (city: string) => Promise<void>;
  reset: () => void;
}>((set) => ({
  ...initialState,

  setLocation: (location) => {
    set({ location });
  },

  fetchWeatherData: async () => {
    set({ isLoading: true, error: null });
    try {
      const { latitude, longitude } = useWeatherStore.getState().location!;
      
      const weatherData = await weatherApi.getCurrentWeather(latitude, longitude);
      const forecastData = await weatherApi.getForecast(latitude, longitude);

      const currentWeather: WeatherData = {
        temperature: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        humidity: weatherData.main.humidity,
        pressure: weatherData.main.pressure,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        cityName: weatherData.name,
      };

      const forecast: ForecastData[] = forecastData.list.map(item => ({
        timestamp: item.dt,
        temperature: item.main.temp,
        feelsLike: item.main.feels_like,
        humidity: item.main.humidity,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      }));

      set({ currentWeather, forecast, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch weather data', isLoading: false });
    }
  },

  fetchWeatherByCity: async (city) => {
    set({ isLoading: true, error: null });
    try {
      const weatherData = await weatherApi.getWeatherByCity(city);
      
      const currentWeather: WeatherData = {
        temperature: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        humidity: weatherData.main.humidity,
        pressure: weatherData.main.pressure,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        cityName: weatherData.name,
      };

      set({ currentWeather, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch weather data for the specified city', isLoading: false });
    }
  },

  reset: () => {
    set(initialState);
  },
})); 