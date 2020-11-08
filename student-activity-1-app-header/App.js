import * as React from 'react';
import { View, Button, Alert } from 'react-native';
import SoundButton from './components/SoundButton'



export default class App extends React.Component {
  render() {
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:30, marginLeft:70}}>
          <Button 
            title="sound 1"  
            color = "red"
            onPress={() => Alert.alert('Play Sound 1.m4as')} />
        </View>
        <View
          style={{ width:200 , height:100, marginTop:0, marginLeft:70}}>
          <Button 
            title="sound 2"  
            color = "blue"
            onPress={() => Alert.alert('Play Sound 2')} />
        </View>
        <View
          style={{ width:200 , height:100, marginTop:0, marginLeft:70}}>
          <Button 
            title="sound 3"  
            color = "purple"
            onPress={() => Alert.alert('Play Sound 3')} />
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:0, marginLeft:70}}>
          <Button 
            title="sound 4"  
            color = "black"
            onPress={() => Alert.alert('Play Sound 4')} />
        </View>
      <View
     
       style={{ width:100 , height:100, marginTop:0, marginLeft:120, marginRight:0}}>
          <Button 
            title="Stop Sound"  
            color = ""
           onPress={() => Alert.alert('Stop Sound')} />
        </View>
      </View>

    );
  }
}

