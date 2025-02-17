import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', 
    };
  }

  updateText = (newText) => {
    this.setState({ text: newText }); 
  };

  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default MyClassPage;
