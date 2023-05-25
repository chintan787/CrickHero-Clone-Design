import React from 'react'
import { View ,Text} from 'react-native';
import MessageBar from '../MessageBar';

export default function MatchesScreen() {
  return (
    <View>
        <MessageBar message="Want to start a match?" messageButtonText="start a match" />
        
      <Text style={{color:'#000'}}>Matches</Text>

    </View>
  )
}
