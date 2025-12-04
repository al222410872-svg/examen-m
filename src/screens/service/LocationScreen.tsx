import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LocationScreen({ route }) {
  const { address } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ubicación del usuario</Text>
      <Text>Calle: {address.street}</Text>
      <Text>Ciudad: {address.city}</Text>
      <Text>Código Postal: {address.zipcode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
