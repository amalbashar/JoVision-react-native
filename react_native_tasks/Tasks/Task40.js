import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Component40 from '../Components/Component40'; 

const Task40 = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      {isVisible && <Component40 />}

      <Button
        title={isVisible ? 'Hide Component' : 'Show Component'}
        onPress={() => setIsVisible(!isVisible)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 50 },
});

export default Task40;
