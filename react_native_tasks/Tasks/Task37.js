import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, RefreshControl } from 'react-native';
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

const Task37 = () => {
  const [textComponents, setTextComponents] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const generateText = () => {
    const components = [];
    for (let i = 0; i < 100; i++) {
      components.push(
        <Text key={i} style={styles.text}>{RandomWord(3)}</Text>
      );
    }
    setTextComponents(components);
  };

  useEffect(() => {
    generateText();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
     generateText();  
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Component36 textComponents={textComponents} />
      </ScrollView>
    </View>
  );
};

export default Task37;
