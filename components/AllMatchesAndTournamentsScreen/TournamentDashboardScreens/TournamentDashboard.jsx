import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  FilterHeaderBackgroundColor,
  darkColor,
  globalStyles,
  lightBackgroundColor,
  lightColor,
  primaryBackgroundColor,
  primaryTabActiveColor,
  secondaryActiveTab,
  secondaryBackgroundColor,
  secondaryInAciveTab,
} from '../../Global.css';
import QRCode from '../../../images/QRCode';
import FilterIcon from '../../../images/FilterIcon';
import ShareIcon from '../../../images/ShareIcon';
import LeftArrow from '../../../images/LeftArrow';
import PlusIcon from '../../../images/PlusIcon';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MatchTournament from './MatchTournament';
import LeaderBoardTournament from './LeaderBoardTournament';
import PointsTableTournament from './PointsTableTournament';
import StatsTournaments from './StatsTournaments';
import {useNavigate} from 'react-router-native';
import BarChartIcon from '../../../images/BarChartIcon';
import TeamMembers from '../../TeamDetails/TeamMembers';
import PastMatch from './MatchTournamentsScreens/PastMatch';
import Bat from './LeaderBoardTournamentScreens/Bat';
import TeamPlayer from '../../TeamDetails/TeamPlayer';

const Tab = createMaterialTopTabNavigator();
const HEADER_MAX_HEIGHT = 280;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const windowHeight = Dimensions.get('window').height;

export default function TournamentDashboard(props) {
  const navigate = useNavigate();

  console.log('windoHeight Tournament', windowHeight);

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

  const titleOpacity = scrollY.interpolate({
    // inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    inputRange: [0, HEADER_MAX_HEIGHT / 2, HEADER_MAX_HEIGHT],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  //
  const paddingTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT / 2, HEADER_MAX_HEIGHT],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  return (
    // <View style={{flexGrow: 1}}>

    <SafeAreaView style={styles.saveArea}>
      <StatusBar backgroundColor={secondaryBackgroundColor} />
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT}}
        scrollEventThrottle={20}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        {/* <PastMatch /> */}
        <Animated.View
          style={[
            styles.navigationContainers,
            
          ]}>
          <NavigationContainer independent={true}>
            <Tab.Navigator
              // style={[styles.navigationContainers]}
              swipeEnabled={true}
              screenOptions={{
                tabBarScrollEnabled: true,
                tabBarStyle: {
                  backgroundColor:FilterHeaderBackgroundColor,
                },
                tabBarItemStyle: {
                  width: 'auto',
                  alignItems: 'flex-start',
                },

                tabBarIndicatorStyle: {
                  backgroundColor: primaryTabActiveColor,
                  color: lightColor,
                },
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                },
                tabBarActiveTintColor:secondaryActiveTab,
                tabBarInactiveTintColor:secondaryInAciveTab
              }}
              sceneContainerStyle={{backgroundColor: lightBackgroundColor}}>
              {props.call === 'TeamProfile' ? (
                <>
                  <Tab.Screen name="Members" component={TeamMembers} />
                  <Tab.Screen name="stats" component={StatsTournaments} />
                  <Tab.Screen name="Matches" component={PastMatch} />
                  <Tab.Screen
                    name="Leaderboard"
                    component={LeaderBoardTournament}
                  />
                  <Tab.Screen name="Awards" component={LeaderBoardTournament} />
                  <Tab.Screen name="Photos" component={LeaderBoardTournament} />
                  <Tab.Screen
                    name="Profile"
                    component={LeaderBoardTournament}
                  />
                </>
              ) : (
                <>
                  <Tab.Screen name="Matches" component={PastMatch} />
                  <Tab.Screen
                    name="Leaderboard"
                    component={LeaderBoardTournament}
                  />
                  <Tab.Screen
                    name="Points table"
                    component={PointsTableTournament}
                  />
                  <Tab.Screen name="stats" component={StatsTournaments} />
                  <Tab.Screen name="sponsors" component={StatsTournaments} />
                  <Tab.Screen name="teams" component={StatsTournaments} />
                  <Tab.Screen name="gallery" component={StatsTournaments} />
                  <Tab.Screen name="news" component={StatsTournaments} />
                  <Tab.Screen name="about" component={StatsTournaments} />


                </>
              )}
            </Tab.Navigator>
          </NavigationContainer>
        </Animated.View>
      </Animated.ScrollView>

      <Animated.View
        style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
        <Animated.Image
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslateY}],
            },
          ]}
          source={require('../../../images/pexelsphoto.jpeg')}
        />

        <Animated.View
          style={[
            styles.textView,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslateY}],
            },
          ]}>
          <View style={styles.profilDetail}>
            <View style={styles.profileImageSection}>
              <Image
                source={
                  props.call === 'TeamProfile'
                    ? require('../../../images/article174347.jpg')
                    : require('../../../images/pexelsphoto.jpeg')
                }
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.imageText}>
              {props.call === 'TeamProfile'
                ? 'Sada adda 11 (una)'
                : 'Cricket tournamnet (Delwada)'}
              {props.call === 'TeamProfile' ? (
                <View style={styles.bannerdateInfo}>
                  <Text style={styles.tournamentDateInfo}>Una(Gujrat)</Text>
                  <Text
                    style={[styles.tournamentDateInfo, {paddingBottom: 10}]}>
                    .
                  </Text>
                  <Text style={styles.tournamentDateInfo}>
                    Since 5 Mar,2023
                  </Text>
                </View>
              ) : (
                ''
              )}
            </Text>
          </View>
        </Animated.View>

        <Animated.View
          style={[
            styles.matchInfoSection,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslateY}],
            },
          ]}>
          {props.call === 'TeamProfile' ? (
            ''
          ) : (
            <View style={styles.bannerdateInfo}>
              <Text style={styles.tournamentDateInfo}>
                04 Mar, 2023 to 19 Mar, 2023
              </Text>
              <Text style={[styles.tournamentDateInfo, {paddingBottom: 10}]}>
                .
              </Text>
              <Text style={styles.tournamentDateInfo}>5840 views</Text>
            </View>
          )}

          <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.secondaryButtonContainer}>
              <PlusIcon height={15} width={15} color="#fff" />
              <Text style={styles.tournamentButtonwithFieldColor}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <BarChartIcon />
              <Text style={styles.tournamentButtonwithFieldColor}>
                Insights
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        {/*  end data */}
      </Animated.View>

      <Animated.View style={[styles.topBar]}>
        <View style={styles.dashbordHeader}>
          <View style={globalStyles.customFlexDirection}>
            <TouchableOpacity
              onPress={() =>
                navigate(
                  props.call === 'TeamProfile'
                    ? '/teamPlayersList'
                    : '/allmatches',
                )
              }>
              <LeftArrow />
            </TouchableOpacity>
            <Animated.View
              style={{
                opacity: titleOpacity,
                transform: [{scale: titleScale}, {translateY: titleTranslateY}],
              }}>
              <Text style={[styles.headerTitle]}>Cricket Teams</Text>
            </Animated.View>
          </View>
          <View style={styles.iconSection}>
            {props.call !== 'TeamProfile' ? (
              <QRCode height={20} width={20} iconColor="#fff" />
            ) : (
              ''
            )}
            <ShareIcon width={20} height={20} color="#fff" />
            <FilterIcon width={20} height={20} color="#fff" />
          </View>
        </View>
      </Animated.View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    position: 'relative',
  },

  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    // top:50
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  imageText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    marginLeft: 10,
  },

  dashbordHeader: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor:'#ccc',
    // height:150
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  },
  profileImageSection: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  profilDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bannerdateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  matchInfoSection: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 25,
    marginHorizontal: 20,
  },
  tournamentDateInfo: {
    color: '#fff',
    marginRight: 4,
    fontSize: 14,
    fontFamily: 'Roboto-Medium',

    // textTransform:'capitalize'
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: '#14B492',
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonContainer: {
    backgroundColor: '#72797F',
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tournamentButtonwithFieldColor: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 24,
    textTransform: 'uppercase',
    borderRadius: 4,
    padding: 5,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },

  //////////////////////////////////////////////////////////////

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: secondaryBackgroundColor,
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
    marginTop: 0,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  topNavigation: {
    marginTop: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    // left: 0,
    // right: 0,

    marginLeft: 0,
    marginRight: 0,
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
  headerTitle: {
    color: lightColor,
    marginLeft: 15,
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    textTransform: 'uppercase',
  },
  navigationContainers: {
    height: windowHeight,
    // height:'100%',
    overflow: 'scroll',
    // marginBottom:50
    // paddingTop:HEADER_MIN_HEIGHT
  },
  saveArea: {
    position: 'relative',
  },
});
