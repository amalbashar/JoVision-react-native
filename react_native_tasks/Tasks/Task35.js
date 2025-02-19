import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Component35 from '../Components/Component35';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userData');
        console.log('Stored Data:', storedData); 
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          console.log('Parsed Data:', parsedData); 
          if (parsedData && parsedData.timestamp) {
            const timeDifference = (new Date() - new Date(parsedData.timestamp)) / 1000; 
            console.log('Time Difference:', timeDifference); 
            if (timeDifference < 60) { 
              setName(parsedData.name);
              setAge(parsedData.age);
              setCountry(parsedData.country);
            } else {
              await AsyncStorage.removeItem('userData'); 
              console.log('Old data removed');
            }
          }
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadStoredData();
  }, []);

  const handleSubmit = async () => {
    if (!name || !age || !country) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const userData = {
      name,
      age,
      country,
      timestamp: new Date().toISOString(), 
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Success', 'Data saved successfully');
      console.log('Data saved:', userData); 
    } catch (error) {
      console.error('Error saving data:', error);
      Alert.alert('Error', 'Failed to save data');
    }
  };

  return (
    <View style={styles.container}>
      <Component35
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        country={country}
        setCountry={setCountry}
        handleSubmit={handleSubmit}
      />
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Task35;