import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import BottomMenu from '../components/BottomMenu';
import Drawer from '../components/Drawer';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {NavigationContainer} from '@react-navigation/native';

// import HighLight from '../components/AllWatchTabScreens/HighLight';
// import Shots from '../components/AllWatchTabScreens/Shots';
// import Live from '../components/AllWatchTabScreens/Live';

// const Tab = createMaterialTopTabNavigator();
export default function WatchPage() {
  return (
    <View style={styles.watchPage}>
      <Drawer />
      <ScrollView style={styles.scrollView}>
        <View style={{flexGrow: 1}}>
          {/* <NavigationContainer>
            <Tab.Navigator
              initialRouteName="HIGHLIGHT"
              tabBarOptions={{
                labelStyle: {fontSize: 14, color: '#fff'},
                tabStyle: {flex: 1, justifyContent: 'center'},
                indicatorStyle: {
                  backgroundColor: '#FFBC01',
                  color: '#fff',
                },
                style: {backgroundColor: '#AD2112'},
              }}>
              <Tab.Screen name="HIGHLIGHT" component={HighLight} default />
              <Tab.Screen name="SHOTS" component={Shots} />
              <Tab.Screen name="LIVE" component={Live} />
            </Tab.Navigator>
          </NavigationContainer> */}
          <Text style={{color: '#000'}}>Watch Page</Text>
        </View>
      </ScrollView>
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  watchPage: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
});
