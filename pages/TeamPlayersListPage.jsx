import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles ,secondaryBackgroundColor ,lightColor , primaryTabActiveColor , primaryInActiveTab ,primaryActiveTab} from '../components/Global.css';
import HeaderNavigation from '../components/HeaderNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TeamPlayer from '../components/TeamDetails/TeamPlayer';

const Tab = createMaterialTopTabNavigator();

export default function TeamPlayersListPage() {
  return (
    <View style={globalStyles.pageContainer}>
      <HeaderNavigation
        pageName="pastMatchDetailsSinglePage"
        headerTitle="Sada adda 11(una) vs Bhingran 11"
        width="100%"
      />
      {/* <Text style={{color:'#000'}}>Tema page</Text> */}

      <NavigationContainer independent={true}>
        <Tab.Navigator
          swipeEnabled={true}
          tabBarOptions={{
            labelStyle: {
              fontSize: 14,
              fontFamily:'Roboto-Bold',
              // color: lightColor,
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
              color: '#fff',
            },
            inactiveTintColor:primaryInActiveTab,
            activeTintColor:primaryActiveTab,
            style: {backgroundColor: secondaryBackgroundColor},
          }}>
          <Tab.Screen
            name="teamOne"
            component={TeamPlayer}

          />
          <Tab.Screen
            name="teamTwo"
            component={TeamPlayer}
           
          />
        </Tab.Navigator>
      </NavigationContainer>

    </View>
  );
}
