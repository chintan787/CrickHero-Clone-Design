import React, { useState } from 'react';
import {View, Text , TextInput, StyleSheet} from 'react-native';

import MessageBar from '../MessageBar';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {useNavigate} from 'react-router-native';
import { globalStyles , primaryInActiveTab, primaryActiveTab , screenBackgroundColor ,innerActiveBackgroundColor } from '../Global.css';
import FollowingScreen from './TeamsTabScreens/FollowingScreen';
import OppenentsScreen from './TeamsTabScreens/OppenentsScreen';
import MyTeamsScreen from './TeamsTabScreens/MyTeamsScreen';

const Tab = createMaterialTopTabNavigator();


export default function Teams() {

  // const navigate = useNavigate();



  return (
    <View style={{flexGrow: 1,}}>
      <MessageBar message="Want to create a team?" messageButtonText="create" />

      <NavigationContainer independent={true}>
          <Tab.Navigator
            swipeEnabled={true}
            tabBarOptions={{
              labelStyle: {
                fontFamily:'Roboto-Bold',
                borderRadius: 20,
                marginRight: 5,
                textTransform: 'uppercase',
                fontSize: 12,
                margin:0,
                padding: 0,
                marginLeft: 0,
                marginRight: 0,
                borderWidth:1,
                backgroundColor:innerActiveBackgroundColor,
                 borderColor:innerActiveBackgroundColor,
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderWidth: 1,
              },
              tabStyle: {
                padding:0,
                margin:0
              },
              indicatorStyle: {
                backgroundColor: screenBackgroundColor,
              },
           style:{
            backgroundColor: screenBackgroundColor,
           },
           
           inactiveTintColor:{color:primaryInActiveTab,},
           activeTintColor:primaryActiveTab,
           
           }}>
            <Tab.Screen name="My teams" component={MyTeamsScreen} />
            <Tab.Screen name="opponents" component={OppenentsScreen} />
            <Tab.Screen name="Following" component={FollowingScreen} />

          </Tab.Navigator>
        </NavigationContainer>


       </View>
  );
}


const styles = StyleSheet.create({
  inputBorderColor:{
    borderColor:'transpernt'
  }
})