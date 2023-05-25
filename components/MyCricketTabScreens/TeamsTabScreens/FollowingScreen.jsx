import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global.css'
import {useNavigate} from 'react-router-native';

export default function FollowingScreen() {
  const navigate = useNavigate();


  return (
    <View style={[globalStyles.pageWidth,styles.pageContainer]}>
    {/* <Text style={{color:"#000"}}>Oppenents</Text> */}
    
    <Text style={[globalStyles.para,styles.para]}>
    It's fun to keep a tab on your rivals especially when they are losing! The teams you are following will come here. 
  </Text>

  <View style={[globalStyles.buttonSection,styles.buttonContainer]}>
    <TouchableOpacity /* onPress={() => navigate('/startamatch')} */>
      <Text style={globalStyles.buttonWithBorder}>table toppers</Text>
    </TouchableOpacity>

    <TouchableOpacity /* onPress={() => navigate('/startamatch')} */>
      <Text style={globalStyles.buttonwithFieldColor}>team around you</Text>
    </TouchableOpacity>
  </View>

  
</View>
  )
}


const styles = StyleSheet.create({
  pageContainer:{
    flexGrow:1,
  },
  buttonContainer:{
    marginHorizontal:10,
  },
  para:{
    marginVertical:15
  }

})
