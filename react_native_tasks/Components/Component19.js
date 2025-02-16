import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class MyClassPage extends Component {


render() {
  return (
    <View>
 { <Text style={styles.nameText}>MyClassPage</Text>}  
   </View>
  );
}
}



const styles = StyleSheet.create({

  nameText: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default MyClassPage;
