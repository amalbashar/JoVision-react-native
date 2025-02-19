import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      marginRight: 15,
      position: 'relative',
    },
    image: {
      width: 120,
      height: 170,
      borderRadius: 10,
    },
    iconRight: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    iconLeft: {
      position: 'absolute',
      top: 10,
      left: 10,
      
    },

  
  
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 100,
      },
  });

export default styles;
