# Weather App

A React Native mobile application that provides real-time weather information for cities worldwide. The app offers a clean, user-friendly interface to search and display weather details using the OpenWeatherMap API.

## Features

### Core Features
- **City Search**: Search for weather information by city name
- **Current Weather Display**:
  - Temperature (Celsius/Fahrenheit)
  - Humidity
  - Weather conditions
  - Wind speed
  - Weather condition icons
- **Location-based Weather**: Get weather information based on your current GPS location
- **Error Handling**: Meaningful error messages for invalid inputs or API issues
- **Loading States**: Visual feedback during data fetching

### Additional Features
- Temperature unit toggle (Celsius/Fahrenheit)
- 5-day weather forecast (Coming soon)

## Technical Details

### Requirements
- Node.js >= 18
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- OpenWeatherMap API key

### Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd WeatherApp
```

2. Install dependencies:
```bash
yarn install
```

3. iOS specific setup:
```bash
cd ios
pod install
cd ..
```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```
OPENWEATHER_API_KEY=your_api_key_here
```

5. Start the application:
- For iOS:
  ```bash
  npx react-native run-ios
  ```
- For Android:
  ```bash
  npx react-native run-android
  ```

### Project Structure
```
WeatherApp/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── SearchBar.tsx        # Search input component
│   │   │   ├── WeatherCard.tsx      # Weather information display
│   │   │   ├── LoadingSpinner.tsx   # Loading state component
│   │   │   ├── ErrorMessage.tsx     # Error display component
│   │   │   └── TemperatureToggle.tsx # Temperature unit toggle
│   │   ├── hooks/
│   │   │   ├── useLocation.ts       # Location handling hook
│   │   │   ├── useWeather.ts        # Weather data fetching hook
│   │   │   └── useTemperatureUnit.ts # Temperature unit management
│   │   ├── services/
│   │   │   ├── api.ts              # API configuration
│   │   │   └── weatherService.ts    # Weather API integration
│   │   ├── types/
│   │   │   ├── weather.types.ts     # Weather-related type definitions
│   │   │   └── api.types.ts         # API-related type definitions
│   │   ├── utils/
│   │   │   ├── temperature.ts       # Temperature conversion utilities
│   │   │   └── dateFormatter.ts     # Date formatting utilities
│   │   └── constants/
│   │       ├── api.ts              # API endpoints and keys
│   │       └── theme.ts            # App theme constants
│   └── assets/
│       └── icons/                  # Weather condition icons
├── __tests__/                      # Test files
├── android/                        # Android native files
├── ios/                           # iOS native files
├── .env                           # Environment variables
├── package.json                   # Project dependencies
└── tsconfig.json                  # TypeScript configuration
```

## Libraries and Technologies Used

### Core
- React Native v0.77.0
- React v18.3.1
- TypeScript v5.0.4

### State Management
- Zustand v5.0.3 (lightweight state management)

### Navigation
- React Navigation v7.x
  - @react-navigation/native v7.0.14
  - @react-navigation/native-stack v7.2.0
  - @react-navigation/stack v7.1.1
  - react-native-screens v4.6.0
  - react-native-safe-area-context v5.2.0
  - react-native-gesture-handler v2.23.0

### Location Services
- React Native Geolocation Service v5.3.1

### UI Components & Styling
- React Native Vector Icons v10.2.0

### API & Networking
- Axios v1.7.9
- OpenWeatherMap API

### Environment & Configuration
- react-native-dotenv v3.4.11

### Development & Testing
- Jest v29.6.3
- ESLint v8.19.0
- Prettier v2.8.8
- TypeScript v5.0.4
- @types/react v18.2.6
- @types/react-native-vector-icons v6.4.18
- @types/jest v29.5.13
- @babel/core v7.25.2
- @babel/runtime v7.25.0

## Error Handling

The app includes comprehensive error handling for:
- Invalid city names
- API request failures
- Location permission issues
- Network connectivity problems

## License

This project is licensed under the MIT License - see the LICENSE file for details.
