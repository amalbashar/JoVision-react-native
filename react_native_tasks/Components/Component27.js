import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Component27 = ({ imageSource }) => {

  return (
    <View>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});

export default Component27;
