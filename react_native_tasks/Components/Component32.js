import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

import styles from '../styles'; 


const Component32 = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = React.useRef(null);
  const background = require('../Resource/messi.mp4'); 
  const posterImage = require('../Resource/messi.jpg'); 

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <View style={styles.container}>
      { !isVideoPlaying ? (
        <TouchableOpacity onPress={handlePlayVideo}>
          <Image source={posterImage} style={styles.poster} />
        </TouchableOpacity>
      ) : (
        <Video 
          source={background} 
          ref={videoRef} 
          style={styles.video} 
          controls={true} 
          resizeMode="contain" 
        />
      )}
    </View>
  );
};



export default Component32;
