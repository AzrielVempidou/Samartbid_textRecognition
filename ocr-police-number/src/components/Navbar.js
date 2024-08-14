import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Navbar({ onNavigate }) {
  return (
    <View style={styles.navbar}>
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('gallery')}>
          <View style={styles.iconContainer}>
            <FontAwesome name="photo" style={styles.icon} />
            <Text style={styles.label}>Upload Gallery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerButton} onPress={() => onNavigate('home')}>
          <View style={styles.iconContainer}>
            <FontAwesome name="home" style={styles.icon} />
            <Text style={styles.label}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('camera')}>
          <View style={styles.iconContainer}>
            <FontAwesome name="camera" style={styles.icon} />
            <Text style={styles.label}>Upload Camera</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#ffffff',
    padding: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    margin: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  centerButton: {
    flex: 2, // Makes the center button take up more space
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  icon: {
    fontSize: 24,
    color: '#4A90E2',
  },
  label: {
    marginTop: 4,
    color: '#4A90E2',
    fontSize: 14,
  },
});
