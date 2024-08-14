import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadSection({ onImagePicked, vehicleNumber }) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      onImagePicked(result.assets[0].uri);
    } else {
      console.log('Image picking canceled');
    }
  };

  return (
    <View style={styles.uploadContainer}>
      <Text style={styles.title}>Upload Vehicle Number</Text>
      <Text style={styles.subtitle}>Upload your vehicle number here and see it displayed below.</Text>
      
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>Select a file</Text>
      </TouchableOpacity>
      
      <Text style={styles.displayTitle}>Your Vehicle Number:</Text>
      <Text style={styles.displayText}>{vehicleNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  uploadContainer: {
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
  uploadButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  uploadButtonText: {
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
