import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import MyClassPage from '../Components/Component23';  

class Task23 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',       
    };
  }

  handleTextChange = (newText) => {
    this.setState({ text: newText }); 
  };

//   toggleVisibility = () => {
//     this.setState(prevState => ({ isVisible: !prevState.isVisible }));
//   };

  render() {
    return (
      <View style={styles.container}>
        {/* <Button
        title="Show"
          onPress={this.toggleVisibility}
        /> */}

        <Text style={styles.displayText}>{this.state.text}</Text> 

         <MyClassPage onTextChange={this.handleTextChange} />
      </View>
    );
  }
}

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

export default Task23;
