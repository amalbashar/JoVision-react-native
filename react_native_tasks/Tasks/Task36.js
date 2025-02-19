import React, { useState, useEffect } from 'react';
import { View, StyleSheet , Text } from 'react-native';
import Component36 from '../Components/Component36';
import styles from '../styles';


function RandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task36 = () => {
  const [textComponents, setTextComponents] = useState([]);

  useEffect(() => {
    const generateText = () => {
      const components = [];
      for (let i = 0; i < 100; i++) {
        components.push(
          <Text key={i} style={styles.text}>{RandomWord(3)}</Text>
        );
      }
      setTextComponents(components);
    };

    generateText();
  }, []);

  return (
    <View style={styles.container}>
      <Component36 textComponents={textComponents} />
    </View>
  );
};



export default Task36;
