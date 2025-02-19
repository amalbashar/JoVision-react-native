import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import useCurrentTime from '../Hooks/useCurrentTime';
import styles from '../styles';

const Component34 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const currentTime = useCurrentTime();

  return (
    <View style={styles.container}>
      <Button title={isVisible ? 'Hide Time' : 'Show Time'} onPress={() => setIsVisible(!isVisible)} />
      {isVisible && (
        <View>
          <Text style={styles.text}>Time: {currentTime.toLocaleTimeString()}</Text>
          <Text style={styles.text}>Date: {currentTime.toLocaleDateString()}</Text>
        </View>
      )}
    </View>
  );
};

export default Component34;
