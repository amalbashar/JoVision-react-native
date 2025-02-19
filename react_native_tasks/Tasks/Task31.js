import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import Component31 from '../Components/Component31';

import styles from '../styles'; 

const Task31 = () => {
  const [images, setImages] = useState([
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
  ]);

  const handleImagePress = (index) => {
    Alert.alert(`You have selected image number: ${index + 1}`);
  };

  const removeImage = (index) => {
    Alert.alert(
     'Remove Image', `sure u want to remove  img num ${index + 1}?`,
      
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const updatedImages = [...images];
            updatedImages.splice(index, 1); 
            setImages(updatedImages);
          },
        },
      ]
    );
  };

  const addImage = (index) => {
    Alert.alert(
      'add Image', `sure u want to repeatt  img num ${index + 1}?`,

      
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const updatedImages = [...images];
            const imageToAdd = images[index]; 
            updatedImages.splice(index + 1, 0, imageToAdd);
            setImages(updatedImages);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an Image:</Text>
      <Component31 images={images} onImagePress={handleImagePress} removeImage={removeImage} addImage={addImage} />
    </View>
  );
};


export default Task31;
