import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { WeatherCard } from '../components/WeatherCard';
import { ForecastList } from '../components/ForecastList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { useWeather } from '../hooks/useWeather';

export const HomeScreen: React.FC = () => {
  const { currentWeather, forecast, isLoading, error, searchByCity } = useWeather();

  useEffect(() => {
    console.log('HomeScreen State:', {
      hasCurrentWeather: !!currentWeather,
      forecastLength: forecast.length,
      isLoading,
      error
    });
  }, [currentWeather, forecast, isLoading, error]);

  if (isLoading) {
    console.log('Showing loading spinner');
    return (
      <SafeAreaView style={styles.container}>
        <LoadingSpinner />
      </SafeAreaView>
    );
  }

  // Add a fallback UI when there's no data and no loading state
  if (!currentWeather && !isLoading && !error) {
    console.log('No weather data available');
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContent}>
          <Text style={styles.message}>No weather data available</Text>
          <Text style={styles.submessage}>Please check your location permissions</Text>
        </View>
      </SafeAreaView>
    );
  }

  console.log('Rendering main weather UI');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar onSearch={searchByCity} />
        {error && <ErrorMessage message={error} />}
        {currentWeather && <WeatherCard weather={currentWeather} />}
        {forecast.length > 0 && <ForecastList forecast={forecast} />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  submessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
}); 