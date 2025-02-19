import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import styles from '../styles'; 


const Component33 = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const background = require('../Resource/messi.mp4');
  const posterImage = require('../Resource/messi.jpg');    

  const handlePlayVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <View style={styles.container}>
      {!isVideoPlaying ? (
        <TouchableOpacity onPress={handlePlayVideo}>
          <Image source={posterImage} style={styles.poster} />
        </TouchableOpacity>
      ) : (

<TouchableOpacity onPress={handlePlayVideo}>
          <Video
            source={background}
            ref={videoRef}
            style={styles.video}
            controls={false}    
            resizeMode="contain"
            paused={!isVideoPlaying}  
          />
        </TouchableOpacity>
      )}
    </View>
  );
};



export default Component33;
