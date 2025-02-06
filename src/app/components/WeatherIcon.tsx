import React from 'react';
import { Image, ImageStyle, StyleSheet } from 'react-native';

interface WeatherIconProps {
  iconCode: string;
  size?: number;
  style?: ImageStyle;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  iconCode, 
  size = 50,
  style 
}) => {
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <Image
      source={{ uri: iconUrl }}
      style={[
        styles.icon,
        { width: size, height: size },
        style
      ]}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
  },
}); 