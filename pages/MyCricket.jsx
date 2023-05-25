import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import BottomMenu from '../components/BottomMenu';
import Drawer from '../components/Drawer';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Matches from '../components/MyCricketTabScreens/Matches';
import Tournaments from '../components/MyCricketTabScreens/Tournaments';
import Teams from '../components/MyCricketTabScreens/Teams';
import HighLights from '../components/MyCricketTabScreens/HighLights';
import { globalStyles ,primaryInActiveTab, primaryActiveTab, primaryTabActiveColor ,lightColor , secondaryBackgroundColor} from '../components/Global.css';
import { useLocation } from 'react-router-native';


const Tab = createMaterialTopTabNavigator();

export default function MyCricket() {
 

  return (
    <View style={[styles.watchPage,globalStyles.pageBackgroundColor]}>
      <Drawer />

      {/* <ScrollView style={styles.scrollView}> */}

      <View style={{flexGrow: 1}}>
        <NavigationContainer independent={true}>
          <Tab.Navigator
          
            swipeEnabled={true}
            tabBarOptions={{
              labelStyle: {
                fontSize: 12,
                fontFamily:'Roboto-Bold',
                padding: 0,
                marginLeft: 0,
                marginRight: 0,
              },
              tabStyle: {
                flex: 1,
                justifyContent: 'center',
                padding: 0,
                marginLeft: 0,
                marginRight: 0,
              },
              indicatorStyle: {
                backgroundColor: primaryTabActiveColor,
                color: lightColor,
              },
              inactiveTintColor:primaryInActiveTab,
            activeTintColor:primaryActiveTab,

              style: {backgroundColor:secondaryBackgroundColor},
            }}>
            <Tab.Screen name="Matches" component={Matches} />
            <Tab.Screen name="Tournaments" component={Tournaments} />
            <Tab.Screen name="Teams" component={Teams} />

            <Tab.Screen name="HighLights" component={HighLights} />
          </Tab.Navigator>
        </NavigationContainer>
       </View>
      {/* </ScrollView> */}

      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  watchPage: {
    flex: 1,
  },
});
