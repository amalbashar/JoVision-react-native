import React, { Component } from 'react';
import { Text, View , StyleSheet} from 'react-native';

class MyClassPage extends Component {
    componentDidMount() {
      console.log('Loaded');
    }

    componentWillUnmount() {
      console.log('Unloaded');
    }

    render() {
      return (
        <View>

        <Text style={styles.nameText}>MyClassPage</Text>
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
