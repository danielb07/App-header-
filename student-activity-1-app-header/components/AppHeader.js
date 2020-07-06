import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.textContainer}>
        <Text style={styles.text}>Quiz Buzzer App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor:'brown',
    borderRadius:12,
  },
  text:{
    color:'white',
    padding:24,
    marginLeft:50,
    fontSize:23,
    fontWeight: 'bold',
    textAllign:'center',
  }
})

export default AppHeader;

