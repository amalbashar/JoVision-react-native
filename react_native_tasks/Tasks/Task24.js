import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MyFunctionPage from '../Components/Component24';

const Task24 = () => {
  const childRef = useRef(null); 

  const handleTextChange = (text) => {
    if (childRef.current) {
      childRef.current.updateText(text); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        onChangeText={handleTextChange} 
      />
      <MyFunctionPage ref={childRef} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Task24;
