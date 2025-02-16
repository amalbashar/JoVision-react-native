import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Component17 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Show');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setButtonText(isVisible ? 'Show' : 'Hide');
  };

  return (
    <View style={styles.container}>
      <Button title={buttonText} onPress={toggleVisibility} />
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

export default Component17;
