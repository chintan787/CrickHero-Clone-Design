import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import LeftArrow from '../images/LeftArrow'
import PlayButton from '../images/PlayButton';
import {useNavigate} from 'react-router-native';
import HeaderNavigation from '../components/HeaderNavigation';


export default function StartAMatchPage() {
  const navigate = useNavigate();
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <HeaderNavigation headerTitle="start a match" pageName="mycricket" playButton={true} searchFilerButton={false} />
      {/* <StatusBar /> */}
      <Text style={{color:'#000'}}>Start a match</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  headerSection:{
    flexDirection:'row',
    backgroundColor:"#BD4233",
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
    
  },
  headerTextSection:{
    flexDirection:'row',
    alignItems:'center'
  },
  pageHeading:{
    marginLeft:35,
    color:"#fff",
    fontSize:18,
    paddingVertical:10,
    textTransform:'capitalize'
  }
})