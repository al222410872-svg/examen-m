import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Detalles Producto 1"
        onPress={() =>
          navigation.navigate("Detail", {
            name: "Producto 1",
            desc: "Papas, refresco y combo clásico.",
          })
        }
      />

      <Button
        title="Detalles Producto 2"
        onPress={() =>
          navigation.navigate("Detail", {
            name: "Producto 2",
            desc: "Papas, refresco y doble carne.",
          })
        }
      />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Tomar foto del producto"
          onPress={() => navigation.navigate("Camera")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
});
