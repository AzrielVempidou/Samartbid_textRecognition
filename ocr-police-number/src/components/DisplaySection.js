import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function DisplaySection({ vehicleNumber }) {
  const [isLoading, setIsLoading] = useState(true);
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    // Simulate a loading process
    const loadData = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    // Spin animation
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={styles.displayContainer}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]}>
            <View style={styles.spinnerInner} />
          </Animated.View>
        </View>
      ) : (
        <>
          <Text style={styles.displayTitle}>Your Vehicle Number:</Text>
          <Text style={styles.displayText}>{vehicleNumber}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  spinner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#0000ff',
    borderTopColor: 'transparent',
  },
  spinnerInner: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  displayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  displayText: {
    fontSize: 16,
    color: '#666666',
    marginTop: 10,
  },
});
