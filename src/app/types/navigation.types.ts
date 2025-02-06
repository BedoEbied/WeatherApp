import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  WeatherDetails: {
    cityName: string;
  };
  Settings: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>; 