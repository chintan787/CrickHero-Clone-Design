import React from 'react';
import {View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import MessageBar from '../MessageBar';
import {useNavigate} from 'react-router-native';
import { globalStyles } from '../Global.css';


export default function Matches() {
    const navigate = useNavigate();

  return (
    <View style={{flexGrow: 1,}}>
      <MessageBar message="Want to start a match?" messageButtonText="start a match" pageLink="startamatch"  />
        <Text style={[globalStyles.para,styles.para]}>
            Hey, you have not played any matches yet Why don't you start one with your rival team?
        </Text>
        <View>
          <View style={globalStyles.buttonSection}>
        <TouchableOpacity   onPress={() => navigate('/startamatch')} >
            <Text style={globalStyles.buttonWithBorder}>Looking for</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => navigate('/startamatch')} >
            <Text style={globalStyles.buttonwithFieldColor}>Start a match</Text>
        </TouchableOpacity>

        </View>

        <TouchableOpacity >
            <Text style={globalStyles.coloredLinkText}>need help?</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
para:{
    padding:15,
    fontSize:15,
    fontFamily:'Roboto-Regular'
},
  
  mobileText: {
    backgroundColor: '#14B492',
    textAlign: 'center',
    padding: 15,
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  
})
