import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/service/HomeScreen';
import DetailsScreen from './src/screens/service/DetailScreen';
import CameraScreen from './src/screens/service/CameraScreen';
import LocationScreen from './src/screens/service/LocationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
