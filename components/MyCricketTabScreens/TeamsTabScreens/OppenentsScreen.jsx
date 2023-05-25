import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { globalStyles } from '../../Global.css'
import {useNavigate} from 'react-router-native';


export default function OppenentsScreen() {

  const navigate = useNavigate();

  return (
    <View style={[globalStyles.pageWidth,styles.pageContainer]}>
        {/* <Text style={{color:"#000"}}>Oppenents</Text> */}
        
        <Text style={[globalStyles.para,styles.para]}>
        You still haven't played a match? Come on...go ahead and start one. Your Oppenent teams will automatically come here.
      </Text>

      <View style={[globalStyles.buttonSection,styles.buttonContainer]}>
        <TouchableOpacity /* onPress={() => navigate('/startamatch')} */>
          <Text style={globalStyles.buttonWithBorder}>Need help?</Text>
        </TouchableOpacity>

        <TouchableOpacity /* onPress={() => navigate('/startamatch')} */>
          <Text style={globalStyles.buttonwithFieldColor}>create your team</Text>
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
    marginHorizontal:20,
  },
  para:{
    marginVertical:15
  }

})
