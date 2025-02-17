import React, { Component, createRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MyClassPage from '../Components/Component25';

class Task25 extends Component {
  constructor(props) {
    super(props);
    this.childRef = createRef(); 
  }

  handleTextChange = (text) => {
    if (this.childRef.current) {
      this.childRef.current.updateText(text); 
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          onChangeText={this.handleTextChange} 
        />
        <MyClassPage ref={this.childRef} /> 
      </View>
    );
  }
}

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

export default Task25;
