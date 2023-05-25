import React from 'react';
import {View, Text ,ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PastMatch from './MatchTournamentsScreens/PastMatch';
import UpComingMatch from './MatchTournamentsScreens/UpComingMatch';
import LiveMatch from './MatchTournamentsScreens/LiveMatch';

const Tab = createMaterialTopTabNavigator();

export default function MatchTournament() {
  return (
    <ScrollView style={{flexGrow:1}}>
      {/* <Text style={{color: '#000'}}>Match Tournament</Text> */}
      <NavigationContainer independent={true}>
        <Tab.Navigator
          swipeEnabled={true}
          tabBarOptions={{
            labelStyle: {
             fontFamily:'Roboto-Bold',
              backgroundColor: '#14B492',
              color: '#fff',
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: '#14B492',
              borderRadius: 20,
              marginRight: 5,
              textTransform: 'uppercase',
              fontSize: 12,
              // width:'100%',
              // padding: 10,
              // marginLeft: 0,
              // marginRight: 0,
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
              backgroundColor: '#EFEFEF',
              // color:""
            },
            style: {
              backgroundColor: '#EFEFEF',
              width:'100%',

            },
          }}>
          <Tab.Screen name="Live" component={LiveMatch} />
          <Tab.Screen name="Upcoming" component={UpComingMatch} />
          <Tab.Screen name="Past" component={PastMatch} />
        </Tab.Navigator>
      </NavigationContainer>
    </ScrollView>
   
  );
}
