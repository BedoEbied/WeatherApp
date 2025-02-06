export interface WeatherData {
  temperature: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  description: string;
  icon: string;
  cityName: string;
}

export interface ForecastData {
  timestamp: number;
  temperature: number;
  feelsLike: number;
  humidity: number;
  description: string;
  icon: string;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  cityName?: string;
}

export interface WeatherState {
  currentWeather: WeatherData | null;
  forecast: ForecastData[];
  location: LocationData | null;
  isLoading: boolean;
  error: string | null;
} 