import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CameraButton = ({ onImagePick, vehicleNumber }) => {
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      onImagePick(result.assets[0].uri);
    } else {
      console.log('Photo taking canceled');
    }
  };

  return (
    <View style={styles.cameraContainer}>
      <Text style={styles.title}>Capture a Photo</Text>
      <Text style={styles.subtitle}>Take a photo of your vehicle number plate using the camera.</Text>
      
      <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
        <Text style={styles.cameraButtonText}>Take a Photo</Text>
      </TouchableOpacity>

      <Text style={styles.displayTitle}>Your Vehicle Number:</Text>
      <Text style={styles.displayText}>{vehicleNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  cameraButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  cameraButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  displayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 20,
  },
  displayText: {
    fontSize: 16,
    color: '#666666',
    marginTop: 10,
  },
});

export default CameraButton;
