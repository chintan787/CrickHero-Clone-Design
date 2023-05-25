import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Animated,
  Easing,
  Dimensions,
  ScrollView,
  // Badge,
  Pressable,
  Image,
  StatusBar,
} from 'react-native';
import SearchIcon from '../images/SearchIcon';
import MessageIcon from '../images/MessageIcon';
import NotificationIcon from '../images/NotificationIcon';
import MenuIcon from '../images/MenuIcon';
import {useLocation, useNavigate} from 'react-router-native';
import FilterIcon from '../images/FilterIcon';

export default function Header(props) {
  // console.log("window.location.href",window.location.href)
  const location = useLocation();
  console.log('location', location.pathname);
  const path = location.pathname;
  const navigation = useNavigate();

  return (
    <View style={styles.header}>
      <Pressable onPress={props.openCloseDrawer}>
        <MenuIcon />
      </Pressable>
      <View style={styles.headerLogoSection}>
        <Image
          style={styles.headerLogo}
          source={require('../images/unnamed.png')}
        />
        <Text style={styles.badgeWithBorder}>Go pro</Text>
      </View>

      <View style={[styles.iconSection,{width: path === '/mycricket' ? '25%' : '40%'}]}>
        <Pressable onPress={() => console.log('search Clicked!')}>
          <SearchIcon height={25} width={25} color="#73787C" />
        </Pressable>

        {path === '/mycricket' ? (
          <Pressable onPress={() => navigation('/marketfilter')}>
            <FilterIcon height="20" width="20" color="#73787C" />
          </Pressable>
        ) : (
          <>
            <Pressable onPress={() => console.log('message Clicked!')}>
              <MessageIcon height="25" width="25" color="#73787C" />
            </Pressable>
            <Pressable onPress={() => console.log('notification Clicked!')}>
              <NotificationIcon />
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogoSection: {
    flexGrow: 1,
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeWithBorder: {
    borderColor: '#14B393',
    borderWidth: 1,
    borderRadius: 5,
    color: '#14B393',
    paddingHorizontal: 4,
    paddingVertical: 2,
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    marginLeft: 6,
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '25%',
    justifyContent: 'space-between',
  },
});
