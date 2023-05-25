import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MessageBar from '../MessageBar';
import {useNavigate} from 'react-router-native';
import {globalStyles} from '../Global.css';

export default function Tournaments() {
  const navigate = useNavigate();

  return (
    <View style={{flexGrow: 1}}>
      <MessageBar
        message="Want to host a tournament?"
        messageButtonText="register"
      />
      <Text style={[globalStyles.para,styles.para]}>
        It seems you have not played any tournaments yet. You know,you can host
        your own tournament too!
      </Text>

      <View style={[globalStyles.buttonSection,styles.buttonSection]}>
        <TouchableOpacity /* onPress={() => navigate('/startamatch')} */>
          <Text style={globalStyles.buttonWithBorder}>View Tournaments</Text>
        </TouchableOpacity>

        <TouchableOpacity /* onPress={() => navigate('/startamatch')} */>
          <Text style={globalStyles.buttonwithFieldColor}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  para: {
    paddingHorizontal: 20,
   
  },
  buttonSection:{
    // marginHorizontal:20,

  }
});
