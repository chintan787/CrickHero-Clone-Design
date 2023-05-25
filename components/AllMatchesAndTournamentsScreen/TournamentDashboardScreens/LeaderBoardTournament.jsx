import React from 'react'
import { Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Bat from './LeaderBoardTournamentScreens/Bat';
import Bowl from './LeaderBoardTournamentScreens/Bowl';
import Field from './LeaderBoardTournamentScreens/Field';
import { lightColor, primaryBackgroundColor, screenBackgroundColor } from '../../Global.css';
const Tab = createMaterialTopTabNavigator();

export default function LeaderBoardTournament() {
  return (
    <View style={{flexGrow:1}}>
    {/* <Text style={{color: '#000'}}>Match Tournament</Text> */}
    <NavigationContainer independent={true}>
      <Tab.Navigator
        swipeEnabled={true}
        tabBarOptions={{
          labelStyle: {
           fontFamily:'Roboto-Bold',
            backgroundColor: primaryBackgroundColor,
            color: lightColor,
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: primaryBackgroundColor,
            borderRadius: 20,
            // marginRight: 5,
            textTransform: 'uppercase',
            fontSize: 11,
            width:'100%',
            padding: 10,
            marginLeft: 0,
            marginRight: 0,
            marginTop:6,
            borderWidth: 1,
          },
          tabStyle: {
            flex: 1,
            justifyContent: 'space-between',
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            textAlign: 'center',
            alignItem: 'center',
            alignSelf: 'center',
          },
          indicatorStyle: {
            backgroundColor: screenBackgroundColor,
            
          },
          style: {
            backgroundColor: screenBackgroundColor,
            width:'100%',

          },
        }}>
        <Tab.Screen name="bat" component={Bat} />
        <Tab.Screen name="bowl" component={Bowl} />
        <Tab.Screen name="field" component={Field} />
        <Tab.Screen name="p'ship pro" component={Field} />

      </Tab.Navigator>
    </NavigationContainer>
  </View>
  )
}
