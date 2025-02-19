import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const Component36 = ({ textComponents }) => {
  return (
    <ScrollView style={styles.container}>
      {textComponents}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Component36;
