import React from 'react'
import { Text, View , StyleSheet} from 'react-native';
import CommentaryTabScreen from '../components/AllMatchesAndTournamentsScreen/MatchInfoSinglePage/CommentaryTabScreen';
import InfoTabScreen from '../components/AllMatchesAndTournamentsScreen/MatchInfoSinglePage/InfoTabScreen';
import ScoreCardTabScreen from '../components/AllMatchesAndTournamentsScreen/MatchInfoSinglePage/ScoreCardTabScreen';
import SummaryTabScreen from '../components/AllMatchesAndTournamentsScreen/MatchInfoSinglePage/SummaryTabScreen';
import HeaderNavigation from '../components/HeaderNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { dropDownBackgroundColor, globalStyles, lightColor, primaryActiveTab, primaryInActiveTab, primaryTabActiveColor, secondaryBackgroundColor } from '../components/Global.css';


const Tab = createMaterialTopTabNavigator();


export default function PastMatchDetailsSinglePage() {
  return (
    <View style={globalStyles.pageContainer}>
        <HeaderNavigation pageName="dashboardTournament" headerTitle="Sada adda 11(una) vs Bhingran 11"  shareandMoreButton={true} />

        <NavigationContainer independent={true}>
          <Tab.Navigator
            swipeEnabled={true}
            initialRouteName='Summary'

            screenOptions={{ 
              tabBarScrollEnabled: true,
              tabBarStyle: {
                backgroundColor: secondaryBackgroundColor,
              },
              tabBarItemStyle: {
                width: 'auto',
                alignItems: 'flex-start',
              },
            
              tabBarIndicatorStyle:{
               backgroundColor: primaryTabActiveColor,
               color: lightColor,
              },
              tabBarLabelStyle: {
                fontSize: 12,
                fontFamily:'Roboto-Bold',
                textTransform: 'uppercase',
                
              },
            tabBarActiveTintColor:primaryActiveTab,
            tabBarInactiveTintColor:primaryInActiveTab

              
            }}
            
            sceneContainerStyle={{backgroundColor: dropDownBackgroundColor}}
            
            >
         
            <Tab.Screen name="Info" component={InfoTabScreen} />
            <Tab.Screen name="Summary" component={SummaryTabScreen} />
            <Tab.Screen name="scorecard" component={ScoreCardTabScreen} />

            <Tab.Screen name="commentay" component={CommentaryTabScreen} />
            <Tab.Screen name="Analysis" component={CommentaryTabScreen} />

            <Tab.Screen name="Heroes" component={CommentaryTabScreen} />

            <Tab.Screen name="Mvp" component={CommentaryTabScreen} />
            <Tab.Screen name="Gallery" component={CommentaryTabScreen} />


          </Tab.Navigator>
        </NavigationContainer>


    </View>
  )
}

