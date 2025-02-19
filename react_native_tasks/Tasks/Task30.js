import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import Component30 from '../Components/Component30';

const Task30 = () => {
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
    Alert.alert(`You have selected img num ${index + 1}`);
  };

  const removeImage = (index) => {
    Alert.alert('Remove Image', `sure u want to remove  img num ${index + 1}?`, [
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
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an Image:</Text>
      <Component30 images={images} onImagePress={handleImagePress} removeImage={removeImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
  },
});

export default Task30;
