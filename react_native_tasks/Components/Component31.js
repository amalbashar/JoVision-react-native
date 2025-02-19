import React from 'react';
import { View, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import styles from '../styles'; 


const Component31 = ({ images, onImagePress, removeImage, addImage }) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.imageContainer}>

      <Pressable onPress={() => onImagePress(index)}>
        <Image source={item} style={styles.image} />
      </Pressable>

      <Pressable onPress={() => removeImage(index)}>
        <Icon name="close-circle" size={30} color="red" style={styles.iconRight} />
      </Pressable>


      <Pressable onPress={() => addImage(index)}>
        <Icon name="repeat" size={30} color="green" style={styles.iconLeft} />
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



export default Component31;
