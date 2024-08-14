import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from './src/components/Navbar';
import UploadSection from './src/components/UploadSection';
import DisplaySection from './src/components/DisplaySection';
import CameraButton from './src/components/CameraButton';
import { performOCR } from './src/services/googleVision';
import { formatLicensePlate } from './src/utils/formatLicensePlate';
import { requestCameraPermission, requestGalleryPermission } from './src/services/permissions';

export default function App() {
  const [vehicleNumber, setVehicleNumber] = useState('No vehicle number uploaded yet.');
  const [hasPermission, setHasPermission] = useState(null);
  const [view, setView] = useState('home');

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await requestCameraPermission();
      const galleryPermission = await requestGalleryPermission();
      setHasPermission({ camera: cameraPermission, gallery: galleryPermission });
    };
    requestPermissions();
  }, []);

  const handleImagePicked = async (uri) => {
    if (!uri) {
      console.error('No URI provided');
      return;
    }
    try {
      const text = await performOCR(uri);
      const formattedText = formatLicensePlate(text);
      setVehicleNumber(formattedText);
    } catch (error) {
      console.log('OCR Error:', error);
      setVehicleNumber('Failed to recognize text.');
    }
  };

  const handleNavigate = (destination) => {
    setView(destination);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera and gallery permissions...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera or gallery</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {view === 'home' && (
          <Text>Welcome to the Home Screen!</Text>
        )}
        {view === 'gallery' && (
          <UploadSection onImagePicked={handleImagePicked} vehicleNumber={vehicleNumber} />
        )}
        {view === 'camera' && (
          <CameraButton onImagePick={handleImagePicked} vehicleNumber={vehicleNumber} />
        )}
        <DisplaySection vehicleNumber={vehicleNumber} />
      </View>
      <Navbar onNavigate={handleNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



