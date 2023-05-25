import React, {useLayoutEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigate , useLocation} from 'react-router-native';
import {BottomSheet} from 'react-native-btr';

import CricketIcon from '../images/CricketIcon';
import FeedIcon from '../images/FeedIcon';
import MarketIcon from '../images/MarketIcon';
import MoreIcon from '../images/MoreIcon';
import WatchIcon from '../images/WatchIcon';
import {
  basicColor,
  darkBackgroundColor,
  darkColor,
  grayButtonColor,
  lightBackgroundColor,
  lightColor,
  warningColor,
} from './Global.css';
import MatchesIcon from '../images/MatchesIcon';
import TrophyIcon from '../images/TrophyIcon';
import FindFriendIcon from '../images/FindFriendIcon';
import {LocalSvg} from 'react-native-svg';
import LookingIcon from '../images/LookingIcon';
import PayIcon from '../images/PayIcon';
import EcoSystemIcon from '../images/EcoSystemIcon';
import PremiumIcon from '../images/PremiumIcon';
import ContactUSIcon from '../images/ContactUSIcon';
import ShareIcon from '../images/ShareIcon';
import RateUsIcon from '../images/RateUsIcon';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const bottomMenuHeight = 70;

export default function BottomMenu(props) {
 

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  console.log("current path",currentPath)
  
  const toggle = () => {
    setVisible(visible => !visible);
  };


  return (
    <>
      <View>
        
         <BottomSheet
          visible={visible}
          onBackButtonPress={toggle}
          onBackdropPress={toggle}
         >
          <View style={styles.scrollBar}></View>
          <View style={styles.card} >
            
                <View style={styles.iconSection}>
                  <View style={styles.iconWidthText}>
                    <MatchesIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>Matches</Text>
                  </View>

                  <TouchableOpacity style={styles.iconWidthText} onPress={()=> navigate('/allmatches')}>
                    <TrophyIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>Tournaments</Text>
                  </TouchableOpacity>

                  <View style={styles.iconWidthText}>
                    <LookingIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>Looking</Text>
                  </View>
                  <View style={styles.iconWidthText}>
                    <LookingIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>challenge</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <PayIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>pay</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <FindFriendIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>find friends</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <EcoSystemIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>ecosystem</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <PremiumIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>premium</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <ContactUSIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>support</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <ShareIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>Share app</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <RateUsIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>rate app</Text>
                  </View>

                </View>
                </View>

        </BottomSheet> 
      </View>

      <View
        style={styles.bottomMenuSection}>
        <TouchableOpacity
          style={styles.iconItem}
          onPress={() => navigate('/dashboard')}>
          <FeedIcon height={25} width={25} color={currentPath === '/dashboard' ? warningColor : darkColor} />
          <Text style={[styles.iconLabel,{color:currentPath === '/dashboard' ? warningColor : darkColor, fontSize: currentPath === '/dashboard' ? 15 : 14}]}>Feed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconItem}
          onPress={() => navigate('/watch')}>
          <WatchIcon height={25} width={25} color={currentPath === '/watch' ? warningColor : darkColor} />
          <Text style={[styles.iconLabel,{color:currentPath === '/watch' ? warningColor : darkColor, fontSize: currentPath === '/watch' ? 15 : 14}]}>Watch</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconItem}
          onPress={() => navigate('/mycricket')}>
          <CricketIcon height={24} width={24} color={currentPath === '/mycricket' ? warningColor : darkColor} />
          <Text style={[styles.iconLabel,{color:currentPath === '/mycricket' ? warningColor : darkColor, fontSize: currentPath === '/mycricket' ? 15 : 14}]}>My cricket</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconItem}
          onPress={() => navigate('/demo')} >
          <MarketIcon height={24} width={24} color={currentPath === '/demo' ? warningColor : darkColor} />
          <Text style={[styles.iconLabel,{color:currentPath === '/demo' ? warningColor : darkColor , fontSize:currentPath === '/demo' ? 15 : 14}]}>Market</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconItem}
          onPress={toggle} /* onPress={()=> navigate('/allmatches')} */
        >
          <MoreIcon height={24} width={24} color={visible ? warningColor : darkColor} />
          <Text style={[styles.iconLabel,{color: visible? warningColor : darkColor , fontSize:visible ? 15 : 14}]}>More</Text>
        </TouchableOpacity>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  iconLabel: {
    // color: '#000',
    marginBottom: 0,
    paddingBottom: 0,
    // fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
  iconItem: {
    alignItems: 'center',
  },

  //   bottomsheet
  card: {
    backgroundColor: lightBackgroundColor,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom:bottomMenuHeight
  },
  scrollBar: {
    width: 30,
    height: 2,
    borderWidth: 1,
    borderColor: lightColor,
    borderRadius: 2,
    overflow: 'hidden',
    marginVertical: 5,
    alignSelf: 'center',
  },
  iconSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    justifyContent: 'flex-start',
  },
  iconWidthText: {
    padding: 10,
    alignContent:'center',
    alignItems:'center',
    marginHorizontal:1,
    justifyContent:'center'
  },
  iconTitle: {
    color: grayButtonColor,
    fontSize:13,
    fontFamily:'Roboto-Medium'
  },
  bottomMenuSection:{
    backgroundColor: lightBackgroundColor,
    padding: 15,
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderTopColor:'#ccc',
    borderTopWidth:1,
  }
});
