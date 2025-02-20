import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Component39 from '../Components/Component39'; 




const Task39 = () => {
  const [isVisible, setIsVisible] = useState(true); 

  return (
    <View style={styles.container}>
      {isVisible && <Component39 />} 

      <Button
        title={isVisible ? "Hide Component" : "Show Component"}
        onPress={() => setIsVisible(!isVisible)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 50 },
});

export default Task39;
