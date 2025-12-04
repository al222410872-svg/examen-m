import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { name, desc } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>{desc}</Text>
    </View>
  );
}
