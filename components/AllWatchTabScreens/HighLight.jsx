import React, { useState , useRef} from 'react'
import { View ,Text , StyleSheet} from 'react-native';


export default function HighLight() {
    
  return (
    <View>
      <Text style={{color:"#000"}}>Highlight</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
