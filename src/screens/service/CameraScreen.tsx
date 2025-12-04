import React, { useState, useRef } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen() {
  const [photo, setPhoto] = useState<string | null>(null);

  const takePhotoWithCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permiso denegado", "Debes permitir el uso de la cámara.");
      return;
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
      });

      if (!result.canceled && result.assets.length > 0) {
        const photoUri = result.assets[0].uri;
        setPhoto(photoUri);
        Alert.alert("Éxito", "Foto capturada correctamente");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo tomar la foto");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Tomar foto con cámara" onPress={takePhotoWithCamera} />

      {photo && (
        <Image
          source={{ uri: photo }}
          style={styles.photo}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});
