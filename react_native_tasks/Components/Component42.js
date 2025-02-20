import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../styles';

export function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
}

export function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
}

export function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 3</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
}

export function Screen4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 4</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
}
