import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MyFunctionPage = () => {

  useEffect(() => {
    console.log('Loaded');
    
    return () => {
      console.log('Unloaded');
    };
  }, []); 

  return (
    <View>
      <Text style={styles.nameText}>MyFunctionPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameText: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default MyFunctionPage;
