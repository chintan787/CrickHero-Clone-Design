import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  Animated,
  Dimensions,
  ScrollView
} from 'react-native';
import LeaderBoardTournament from '../components/AllMatchesAndTournamentsScreen/TournamentDashboardScreens/LeaderBoardTournament';
import PastMatch from '../components/AllMatchesAndTournamentsScreen/TournamentDashboardScreens/MatchTournamentsScreens/PastMatch';
import StatsTournaments from '../components/AllMatchesAndTournamentsScreen/TournamentDashboardScreens/StatsTournaments';
import {
  darkColor,
  globalStyles,
  lightColor,
  primaryBackgroundColor,
  screenBackgroundColor,
  secondaryBackgroundColor,
} from '../components/Global.css';
import TeamMembers from '../components/TeamDetails/TeamMembers';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Bat from '../components/AllMatchesAndTournamentsScreen/TournamentDashboardScreens/LeaderBoardTournamentScreens/Bat';
import LiveMatch from '../components/AllMatchesAndTournamentsScreen/TournamentDashboardScreens/MatchTournamentsScreens/LiveMatch';
import DemoNavigation from '../components/DemoNavigation';
import TeamPlayer from '../components/TeamDetails/TeamPlayer';
import Drawer from '../components/Drawer';
import BottomMenu from '../components/BottomMenu';

const Tab = createMaterialTopTabNavigator();

const windowHeight = Dimensions.get('window').height

const HEADER_MAX_HEIGHT = 350;
const HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;



const Data = [
  {
    id: 1,
    imgpath: require('../images/topplayer3.jpg'),
    playername: 'Jayesh Bambhaniya',
    follow: false,
  },
  {
    id: 2,
    imgpath: require('../images/topplayer4.jpg'),
    playername: 'Alpesh B',
    follow: false,
  },
  {
    id: 3,
    imgpath: require('../images/topplayer2.jpg'),
    playername: 'chagan sadda adda',
    follow: false,
  },
  {
    id: 4,
    imgpath: require('../images/topplayer1.jpg'),
    playername: 'darshan solanki',
    follow: false,
  },
  {
    id: 5,
    imgpath: require('../images/topplayer3.jpg'),
    playername: 'dipu',
    follow: false,
  },
  {
    id: 6,
    imgpath: require('../images/topplayer4.jpg'),
    playername: 'nill',
    follow: false,
  },
  {
    id: 7,
    imgpath: require('../images/topplayer1.jpg'),
    playername: 'niraj shiyal (coach)',
    follow: false,
  },
  {
    id: 8,
    imgpath: require('../images/topplayer2.jpg'),
    playername: 'pinak maiya',
    follow: false,
  },
  {
    id: 9,
    imgpath: require('../images/topplayer1.jpg'),
    playername: 'rakesh',
    follow: false,
  },
  {
    id: 10,
    imgpath: require('../images/topplayer3.jpg'),
    playername: 'vaja nirbhay',
    follow: false,
  },
];

export default function DemoAnimation() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  const renderListItem = item => (
    <View key={item.id} style={styles.card}>
      <Image style={styles.avatar} source={item.imgpath} />
      <Text style={styles.fullNameText}>{item.playername}</Text>
    </View>
  );

  return (
    <>
    <View style={globalStyles.pageContainer}>
      <Drawer />
      <ScrollView style={styles.scrollView}>
        <View style={{flexGrow: 1}}>
        <Text style={{color: '#000'}}>Market Page</Text>
        </View>
      </ScrollView>
      <BottomMenu />
    </View>
      {/* <SafeAreaView style={styles.saveArea}>
        <Animated.ScrollView
          contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT}}
          style={{backgroundColor: '#fff', height:'100%'}}
          scrollEventThrottle={20}
           onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )} 
          >
           <Animated.View
          
           >
           {Data.map(renderListItem)}
           </Animated.View> */}

        
          {/* <TeamPlayer /> */}
          {/* <View style={{backgroundColor:'red',flexGrow:1,height:windowHeight}}>
        <NavigationContainer independent={true} >
          <Tab.Navigator
      swipeEnabled={true}
      screenOptions={{
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
  </View> */}
          {/* <DemoNavigation /> */}

        {/* </Animated.ScrollView>

        <Animated.View
          style={[
            styles.header,
            {transform: [{translateY: headerTranslateY}]},
          ]}>
          <Animated.Image
            style={[
              styles.headerBackground,
              {
                opacity: imageOpacity,
                transform: [{translateY: imageTranslateY}],
              },
            ]}
            source={require('../images/pexelsphoto.jpeg')}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.topBar,
            {
              transform: [{scale: titleScale}, {translateY: titleTranslateY}],
            },
          ]}>
          <Text style={styles.title}>Management</Text>
        </Animated.View>
      </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  saveArea: {
    // flex: 1,
    // backgroundColor: '#eff3fb',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: primaryBackgroundColor,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
    color: darkColor,
  },
});
