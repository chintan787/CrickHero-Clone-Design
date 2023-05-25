import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import {useNavigate} from 'react-router-native';
import { globalStyles } from '../../Global.css';
import VideoSlashIcon from '../../../images/VideoSlashIcon';


export default function BowlingHighlights() {
  const navigate = useNavigate();

  return (
    <View style={[globalStyles.pageWidth,styles.pageContainer]}>
    {/* <Text style={{color:"#000"}}>Oppenents</Text> */}
    
    <View style={{alignSelf:'center',marginVertical:20}}>
        <VideoSlashIcon />
    </View>

    <Text style={[globalStyles.para,styles.para]}>
        It seems you don't have any HighLights. You need to Live stream your matches for Highlights.
    </Text>

  <View style={[globalStyles.buttonSection,styles.buttonContainer]}>
     {/* <TouchableOpacity  onPress={() => navigate('/')} > */}
      {/* <Text style={globalStyles.buttonWithBorder}>table toppers</Text> */}
    {/* </TouchableOpacity>  */}

    <TouchableOpacity /* onPress={() => navigate('/startamatch')} */>
      <Text style={globalStyles.buttonwithFieldColor}>Go live</Text>
    </TouchableOpacity>
  </View>

  
</View>
  )
}


const styles = StyleSheet.create({
    pageContainer:{
      flexGrow:1,
      justifyContent:'center',
    },
    buttonContainer:{
      marginHorizontal:10,
    },
    para:{
        padding:0,
        marginVertical:10
    }
  
  })