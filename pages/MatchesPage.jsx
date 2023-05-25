import React, { useState } from 'react';
import {View, Text} from 'react-native';
// import MessageBar from '../components/MessageBar';
import HeaderNavigation from '../components/HeaderNavigation';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MatchesScreen from '../components/AllMatchesAndTournamentsScreen/MatchesScreen';
import TournamentsScreen from '../components/AllMatchesAndTournamentsScreen/TournamentsScreen';
import { globalStyles, lightColor, primaryActiveTab, primaryInActiveTab, primaryTabActiveColor, secondaryBackgroundColor, secondaryColor } from '../components/Global.css';

const Tab = createMaterialTopTabNavigator();

export default function MatchesPage() {

    const [currentActiveTab , setCurrentActiveTab] = useState("Matches");

  return (
    <View style={globalStyles.pageContainer}>
      <HeaderNavigation
        headerTitle={`All ${currentActiveTab}`}
        pageName="dashboard"
        playButton={false}
        searchFilerButton={true}
      />
      {/* <MessageBar message="Want to start a match?" messageButtonText="start a match" /> */}

      <NavigationContainer independent={true}>
        <Tab.Navigator
          swipeEnabled={true}
          initialRouteName="Tournaments"
          
          tabBarOptions={{
            labelStyle: {
              fontSize: 12,
              fontFamily:'Roboto-Bold',
              // color: "pink",
              // opacity:0.5,
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
              opacity:1
            },
            inactiveTintColor:primaryInActiveTab,
            activeTintColor:primaryActiveTab,

            style: {backgroundColor: secondaryBackgroundColor},
          }}>
          <Tab.Screen
            name="Matches"
            component={MatchesScreen}
            listeners={{
                tabPress: e => {
                  e.preventDefault();
                  const name = e.target.split('-')[0]
                  setCurrentActiveTab(name);
                },
              }}
          />
          <Tab.Screen
            name="Tournaments"
            component={TournamentsScreen}
            listeners={{
              tabPress: e => {
                e.preventDefault();
                const name = e.target.split('-')[0]
                  setCurrentActiveTab(name);
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      {/* <Text>Match Page</Text> */}
    </View>
  );
}

