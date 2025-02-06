import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { WeatherIcon } from './WeatherIcon';
import { ForecastData } from '../types/weather.types';

interface ForecastListProps {
  forecast: ForecastData[];
}

const ForecastItem: React.FC<{ item: ForecastData }> = ({ item }) => {
  const date = new Date(item.timestamp * 1000);
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.time}>{time}</Text>
      <WeatherIcon iconCode={item.icon} size={40} />
      <Text style={styles.temperature}>{Math.round(item.temperature)}°C</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forecast</Text>
      <FlatList
        data={forecast}
        renderItem={({ item }) => <ForecastItem item={item} />}
        keyExtractor={(item) => item.timestamp.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 8,
    marginVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    minWidth: 100,
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  description: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
}); 