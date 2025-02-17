import React, { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import MyFunctionPage from '../Components/Component22';  

const Task22 = () => {
  const [text, setText] = useState(''); 
//   const [isVisible, setIsVisible] = useState(true); 

  return (
    <View style={styles.container}>
      {/* <Button
        title="Show"
        onPress={() => setIsVisible(prevState => !prevState)}
      /> */}
      
     <MyFunctionPage onTextChange={setText} />

      <Text style={styles.displayText}>{text}</Text> 

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default Task22;
