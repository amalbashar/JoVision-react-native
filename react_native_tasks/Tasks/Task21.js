import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MyFunctionPage from '../Components/Component21';  

const Task21 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="Show"
        onPress={() => setIsVisible(prevState => !prevState)} 
      />
      {isVisible && <MyFunctionPage />}
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

export default Task21;
