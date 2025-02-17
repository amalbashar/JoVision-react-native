import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import Component28 from '../Components/Component28';

const Task28 = () => {
  const handleImagePress = (index) => {
    Alert.alert(`You have selected img num ${index + 1}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an Image:</Text>
      <Component28 onImagePress={handleImagePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
  },
});

export default Task28;
