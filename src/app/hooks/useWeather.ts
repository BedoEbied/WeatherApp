import { useEffect } from 'react';
import { useLocation } from './useLocation';
import { useWeatherStore } from '../stores/weatherStore';

export const useWeather = () => {
  const { location, error: locationError, loading: locationLoading } = useLocation();
  const {
    currentWeather,
    forecast,
    isLoading: weatherLoading,
    error: weatherError,
    fetchWeatherData,
    fetchWeatherByCity,
    setLocation: setWeatherLocation,
  } = useWeatherStore();

  useEffect(() => {
    if (location) {
      setWeatherLocation(location);
      fetchWeatherData();
    }
  }, [location]);

  const searchByCity = async (city: string) => {
    await fetchWeatherByCity(city);
  };

  return {
    currentWeather,
    forecast,
    isLoading: locationLoading || weatherLoading,
    error: locationError || weatherError,
    searchByCity,
  };
}; 