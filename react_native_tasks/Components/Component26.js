import React, { useState , forwardRef ,useImperativeHandle } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const IPFetcher =forwardRef((props, ref) => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  
  const fetchIPAsync = () => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setIp(data.ip))
      .catch((error) => {
        console.error('Error fetching IP:', error);
      });
  };


  const fetchIPBlocking = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    }
    setLoading(false);
  };

  useImperativeHandle(ref, () => ({
    fetchIPAsync,
    fetchIPBlocking,
  }));

  return (
    <View >
      <Text style={styles.text}>   {ip ? `Your IP: ${ip}` : 'Press a button to get IP'}
      </Text>
      {loading && <ActivityIndicator size="large" color="blue" />}
    </View>
  );
});

const styles = StyleSheet.create({

  text: {
    fontSize: 18,
    marginBottom: 10,
  },
 
});

export default IPFetcher;