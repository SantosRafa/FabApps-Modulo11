import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Animated 
} from 'react-native';

export default class  App extends Component {

  constructor(props){
    super(props);
    this.state = {
      largAnimada:new Animated.Value(0),
      altAnimada:new Animated.Value(50)
    };

    Animated.timing(
      this.state.largAnimada,
      {
        toValue:150,
        duration:2000
      }
    ).start();

  }
  render(){
    return (
      <View style={styles.container}>
        <Animated.View style={{width:this.state.largAnimada, height:this.state.altAnimada, backgroundColor:'#4169E1', justifyContent:'center'}}>
          <Text style={{color:'#FFF', fontSize:20, textAlign:'center'}}>Carregando...</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
