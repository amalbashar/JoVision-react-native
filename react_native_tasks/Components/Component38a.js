import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextContext } from '../Components/contex38';
import styles from '../styles';


class Component38a extends Component {
  static contextType = TextContext;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.context.text}</Text> 
      </View>
    );
  }
}


export default Component38a;
