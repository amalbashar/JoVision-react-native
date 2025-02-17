import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState(''); 

  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText); 
    }
  }));

  return (
    <View >
      <Text style={styles.text}>{text}</Text> 
    </View>
  );
});

const styles = StyleSheet.create({

  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default MyFunctionPage;
