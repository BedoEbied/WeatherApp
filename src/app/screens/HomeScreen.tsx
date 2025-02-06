import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { WeatherCard } from '../components/WeatherCard';
import { ForecastList } from '../components/ForecastList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { useWeather } from '../hooks/useWeather';

export const HomeScreen: React.FC = () => {
  const { currentWeather, forecast, isLoading, error, searchByCity } = useWeather();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <LoadingSpinner />
      </SafeAreaView>
    );
  }

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
}); 