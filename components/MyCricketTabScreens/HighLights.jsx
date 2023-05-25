import React from 'react'
import { View ,Text } from 'react-native'
import MessageBar from '../MessageBar';
import BattingHighlights from './HighLightScreens/BattingHighlights';
import BowlingHighlights from './HighLightScreens/BowlingHighlights';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {useNavigate} from 'react-router-native';

const Tab = createMaterialTopTabNavigator();

export default function HighLights() {
  return (
    <View style={{flexGrow: 1,}}>
      <MessageBar message="Want to live stream your match?" messageButtonText="go live" />


      <NavigationContainer independent={true}>
          <Tab.Navigator
            swipeEnabled={true}
            tabBarOptions={{
              labelStyle: {
                fontWeight: '600',
                backgroundColor: '#14B492',
                color: '#fff',
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderWidth: 1,
                borderColor: '#14B492',
                borderRadius: 20,
                marginRight: 5,
                textTransform: 'uppercase',
                fontFamily:'Roboto-Medium',
                fontSize: 12,
                padding: 15,
                marginLeft: 0,
                marginRight: 0,
                borderWidth:1,
                
              },
              tabStyle: {
                flex: 1,
                justifyContent:'space-between',
                padding:0,
                marginLeft:0,
                marginRight:0,
                textAlign:'center',
                alignItem:'center',
                alignSelf:'center'
              },
              indicatorStyle: {
                backgroundColor: '#EFEFEF',
                // color:""
              },
           style:{
            backgroundColor: '#EFEFEF',
           }
           
           }}>
            <Tab.Screen name="Batting" component={BattingHighlights} />
            <Tab.Screen name="Bowling" component={BowlingHighlights} />

          </Tab.Navigator>
        </NavigationContainer>

    </View>
  )
}
