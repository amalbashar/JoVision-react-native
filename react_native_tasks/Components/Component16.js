import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Component16 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleVisibility} />
      {isVisible && <Text style={styles.nameText}>AMAL AYASRAH </Text>}  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Component16;
