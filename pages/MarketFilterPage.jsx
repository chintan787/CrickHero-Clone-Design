import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import {
  FilterHeaderBackgroundColor,
  darkColor,
  dropDownBackgroundColor,
  globalStyles,
  lightColor,
  primaryTabActiveColor,
} from '../components/Global.css';
import HeaderNavigation from '../components/HeaderNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LocationScreen from '../components/MarketFilterScreens/LocationScreen';
import ServicesScreen from '../components/MarketFilterScreens/ServicesScreen';
import ProductsScreen from '../components/MarketFilterScreens/ProductsScreen';

const Tab = createMaterialTopTabNavigator();
// const HEADER_MAX_HEIGHT = 280;
// const HEADER_MIN_HEIGHT = 60;
// const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const windowHeight = Dimensions.get('window').height;

export default function MarketFilterPage() {
 
  return (
    <View style={styles.pageContainer}>
      
        <HeaderNavigation
          headerTitle="Market Filters"
          pageName="dashboard"
          playButton={false}
          searchFilerButton={false}
        />

    
          <NavigationContainer independent={true}>
            <Tab.Navigator
              swipeEnabled={true}
              tabBarOptions={{
                labelStyle: {
                  fontSize: 12,
                  fontFamily: 'Roboto-Bold',
                  color: lightColor,
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
                style: {backgroundColor: FilterHeaderBackgroundColor},
              }}>
              <Tab.Screen name="Location" component={LocationScreen} />
              <Tab.Screen name="services" component={ServicesScreen} />
              <Tab.Screen name="produts" component={ProductsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flexGrow: 1,
    backgroundColor: dropDownBackgroundColor,
  },
  
  
});
