import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setText } from './Redux/textSlice'; 


const Component39 = () => {
  const text = useSelector((state) => state.text.value); 
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => dispatch(setText(newText))} 
        placeholder="Enter text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
  input: { borderWidth: 1, padding: 10, width: 200 },
});

export default Component39;
