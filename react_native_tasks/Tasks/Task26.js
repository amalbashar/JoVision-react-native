import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import IPFetcher from '../Components/Component26';

const Task26 = () => {
  const ipFetcherRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncPress = () => {
    ipFetcherRef.current.fetchIPAsync();
  };

  const handleBlockingPress = async () => {
    setIsLoading(true); 
    await ipFetcherRef.current.fetchIPBlocking();
    setIsLoading(false); 
  };

  return (
    <View style={styles.container}>
      <IPFetcher ref={ipFetcherRef} />

      <Button
        title="Non-Blocking"
        onPress={handleAsyncPress}
        disabled={isLoading}
      />
      <View style={styles.space} />

      <Button
        title="Blocking"
        onPress={handleBlockingPress}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: {
    height: 10,
  },
});

export default Task26;