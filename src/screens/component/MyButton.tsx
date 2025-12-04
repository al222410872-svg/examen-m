import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MyButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
