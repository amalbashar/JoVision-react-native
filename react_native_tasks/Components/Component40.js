import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setText } from './Redux/textSlice'; 

class Component40 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.props.text} 
          onChangeText={this.props.setText} 
          placeholder="Enter text"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { margin: 10 },
  input: { borderWidth: 1, padding: 10, width: 200 },
});

const mapStateToProps = (state) => ({
  text: state.text.value, 
});

const mapDispatchToProps = {
  setText, 
};



const ConnectedComponent40 = connect(mapStateToProps, mapDispatchToProps)(Component40);

export default ConnectedComponent40;
