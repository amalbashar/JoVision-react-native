import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MyClassPage from '../Components/Component20';  

const Task20 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="Show"
        onPress={() => setIsVisible(prevState => !prevState)}
      />
      {isVisible && <MyClassPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task20;
