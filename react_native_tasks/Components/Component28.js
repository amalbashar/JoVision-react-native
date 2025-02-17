import React from 'react';
import { View, FlatList, Image, Pressable, StyleSheet } from 'react-native';

const images = [
  require('../Resource/1.jpg'),
  require('../Resource/2.jpg'),
  require('../Resource/3.jpg'),
  require('../Resource/4.jpg'),
  require('../Resource/5.jpg'),
  require('../Resource/6.jpg'),
  require('../Resource/7.jpg'),
  require('../Resource/8.jpg'),
  require('../Resource/9.jpg'),
  require('../Resource/10.jpg'),
];

const Component28 = ({ onImagePress }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        renderItem={({ item, index }) => (
          <Pressable onPress={() => onImagePress(index)}>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 170,
    marginRight: 10,
    borderRadius: 10,
    marginTop: 30,
  },
});

export default Component28;
