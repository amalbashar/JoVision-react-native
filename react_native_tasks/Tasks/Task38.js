import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextProvider } from '../Components/contex38'; 
import Component38b from '../Components/Component38b'; 
import styles from '../styles';


const Task38 = () => {
  return (
    <TextProvider>
      <View style={styles.container}>
        <Component38b />
        <Component38b />
        <Component38b />
        <Component38b />
      </View>
    </TextProvider>
    
    
  );
};



export default Task38;
