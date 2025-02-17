import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';
import Component27 from '../Components/Component27';



const images = {
  1: require('../Resource/1.jpg'),
  2: require('../Resource/2.jpg'),
  3: require('../Resource/3.jpg'),
};

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(images[1]);

  const pickImage = () => {
    Alert.alert(
      "Choose an image",
      "Pick a number",
      [
        { text: "1", onPress: () => setSelectedImage(images[1]) },
        { text: "2", onPress: () => setSelectedImage(images[2]) },
        { text: "3", onPress: () => setSelectedImage(images[3]) },
      ]
    );
  };

  return (
    <View style={styles.container}>
  <Component27 imageSource={selectedImage} />
        <View style={styles.space} />
  
        <Button title="Pick an Image" onPress={pickImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  space: {
    height: 10,
  },
});

export default Task27;
