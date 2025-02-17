import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View >
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          onChangeText={this.props.onTextChange} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default MyClassPage;
