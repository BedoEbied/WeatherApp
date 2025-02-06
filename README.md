# Weather App

A React Native weather application that shows current weather and forecast information using the OpenWeatherMap API.

## Features

- Current weather display
- Weather forecast
- Search by city name
- Geolocation support
- Beautiful and responsive UI

## Prerequisites

- Node.js (v14 or later)
- Yarn package manager
- React Native development environment set up
- OpenWeatherMap API key
- For iOS:
  - Xcode (latest version)
  - CocoaPods
- For Android:
  - Android Studio
  - JDK 11 or newer

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd WeatherApp
```

2. Install dependencies using Yarn:
```bash
yarn install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Replace `your_openweathermap_api_key_here` with your actual OpenWeatherMap API key

4. For iOS, install pods:
```bash
cd ios && pod install && cd ..
```

## Running the App

### iOS
```bash
yarn ios
```

### Android
```bash
yarn android
```

### Development
Start Metro bundler:
```bash
yarn start
```

## Troubleshooting

### iOS Issues
If you encounter any issues with pods, try:
```bash
cd ios
pod deintegrate
pod cache clean --all
pod install
```

### Android Issues
If you encounter any build issues, try:
```bash
cd android
./gradlew clean
cd ..
yarn android
```

## Project Structure

```
src/
  └── app/
      ├── api/
      │   └── weatherApi.ts      # API service for weather data
      ├── components/
      │   ├── SearchBar.tsx      # Search input component
      │   ├── WeatherCard.tsx    # Current weather display
      │   ├── WeatherIcon.tsx    # Weather icon component
      │   ├── ErrorMessage.tsx   # Error display component
      │   ├── LoadingSpinner.tsx # Loading indicator
      │   └── ForecastList.tsx   # Weather forecast display
      ├── hooks/
      │   ├── useLocation.ts     # Geolocation hook
      │   └── useWeather.ts      # Weather data hook
      ├── stores/
      │   └── weatherStore.ts    # Zustand store for state management
      ├── types/
      │   └── weather.types.ts   # TypeScript interfaces
      ├── utils/
      │   ├── temperature.ts     # Temperature conversion utilities
      │   └── dateFormatter.ts   # Date formatting utilities
      └── screens/
          └── HomeScreen.tsx     # Main screen component
```

## Scripts

Available yarn commands:
- `yarn start`: Start the Metro bundler
- `yarn ios`: Run the iOS app
- `yarn android`: Run the Android app
- `yarn test`: Run tests
- `yarn lint`: Run ESLint
- `yarn typescript`: Run TypeScript compiler check

## Dependencies

- React Native
- Zustand (State Management)
- Axios (API Requests)
- React Native Vector Icons
- React Native Geolocation Service
- TypeScript

## License

This project is licensed under the MIT License - see the LICENSE file for details.
