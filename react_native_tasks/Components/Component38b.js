import React, { useContext } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { TextContext } from '../Components/contex38';
import Component38a from './Component38a'; 
import styles from '../styles';


const Component38b = () => {
  const { text, setText } = useContext(TextContext); 

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)} 
        placeholder="Enter text"
      />
      <Component38a /> 
    </View>
  );
};


export default Component38b;
