import React from 'react'
import LeaderBoardTournament from './AllMatchesAndTournamentsScreen/TournamentDashboardScreens/LeaderBoardTournament'
import LiveMatch from './AllMatchesAndTournamentsScreen/TournamentDashboardScreens/MatchTournamentsScreens/LiveMatch'
import PastMatch from './AllMatchesAndTournamentsScreen/TournamentDashboardScreens/MatchTournamentsScreens/PastMatch'
import StatsTournaments from './AllMatchesAndTournamentsScreen/TournamentDashboardScreens/StatsTournaments'
import { lightColor } from './Global.css'
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { View , StyleSheet ,Dimensions} from 'react-native'
import TeamMembers from './TeamDetails/TeamMembers'
const Tab = createMaterialTopTabNavigator();

const windowHeight = Dimensions.get('window').height

export default function DemoNavigation() {
    console.log("Dimensions",windowHeight)
  return (
    <View style={{backgroundColor:'red',flexGrow:1,height:windowHeight}}>
    <NavigationContainer independent={true} >
    <Tab.Navigator
      swipeEnabled={true}
      // tabBarScrollEnabled={true}
      screenOptions={{
        //use this config
        tabBarScrollEnabled: true,
        tabBarStyle: {
          backgroundColor: '#14212A',
        },
        tabBarItemStyle: {
          width: 'auto',
          alignItems: 'flex-start',
        },

        tabBarIndicatorStyle: {
          backgroundColor: '#FFBC01',
          color: '#fff ',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          // color: '#72797F',
          color: lightColor,
          textTransform: 'uppercase',
        },

        // tabBar
      }}
      sceneContainerStyle={{backgroundColor: '#fff'}}>
      
          <Tab.Screen name="Members" component={TeamMembers} />
          <Tab.Screen name="stats" component={StatsTournaments} />
          <Tab.Screen name="Matches" component={PastMatch} />
          <Tab.Screen
            name="Leaderboard"
            component={LeaderBoardTournament}
          />
          <Tab.Screen name="Awards" component={LeaderBoardTournament} />
          <Tab.Screen name="Photos" component={LeaderBoardTournament} />
          <Tab.Screen name="Profile" component={LeaderBoardTournament} />
     
      
    </Tab.Navigator>
  </NavigationContainer>
  </View>
  )
}

