import React from 'react';
import { View, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  

const Component30 = ({ images, onImagePress, removeImage }) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.imageContainer}>

      <Pressable onPress={() => onImagePress(index)}>
        <Image source={item} style={styles.image} />
      </Pressable>
      
      <Pressable onPress={() => removeImage(index)}>
        <Icon name="close-circle" size={30} color="red" style={styles.icon} />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images} 
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 15,
    position: 'relative',
  },
  image: {
    width: 120,
    height: 170,
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Component30;
