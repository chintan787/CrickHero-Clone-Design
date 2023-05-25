import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Button,
} from 'react-native';
import LeftArrow from '../images/LeftArrow';
import PlayButton from '../images/PlayButton';
import {useNavigate, useLocation} from 'react-router-native';
import SearchIcon from '../images/SearchIcon';
import FilterIcon from '../images/FilterIcon';
import ShareIcon from '../images/ShareIcon';
import MoreDotsIcon from '../images/MoreDotsIcon';
import AutoScroll from '@homielab/react-native-auto-scroll';
import { FilterHeaderBackgroundColor, lightColor, secondaryBackgroundColor } from './Global.css';

export default function HeaderNavigation(props) {
  const navigate = useNavigate();
  // const [autoScrolllText ,setAutoScrollText] = useState("Happy Birthday!");
  let autoScrolllText = 'Happy Birthday!';

  const MSG = [
    'Happy Birthday!',
    'I hope you treat yourself to something special on your birthday – you deserve it!',
  ];

  //   const scrollViewRef = useRef();

  //   const autoScroll = () => {
  //     let offset = 0;
  //     setInterval(()=> {
  //         offset += 20
  //         scrollViewRef.current?.scrollTo({x: offset, y: 0, animated: true})
  //     }, 1000)
  // }

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <View style={[styles.headerSection,{backgroundColor: currentPath === '/marketfilter' ? FilterHeaderBackgroundColor : secondaryBackgroundColor}]}>
      <View style={styles.headerTextSection}>
        <TouchableOpacity onPress={() => navigate(`/${props.pageName}`)}>
          <LeftArrow />
        </TouchableOpacity>

        {currentPath === '/pastMatchDetailsSinglePage' || currentPath === '/teamPlayersList' ? (
          <AutoScroll
            style={[
              styles.scrolling2,
              {maxWidth: props.width ? props.width : '60%'},
            ]}>
            <Text style={styles.autoScrollHeading}>{props.headerTitle}</Text>
          </AutoScroll>
        ) : (
          <View
            style={{justifyContent:'space-between',flexGrow:1}}>
            <Text style={styles.pageHeading}>{props.headerTitle}</Text>
          </View>
        )}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {props.playButton ? (
            <TouchableOpacity style={[styles.iconStyling]}>
              <PlayButton />
            </TouchableOpacity>
          ) : (
            ''
          )}

          {props.searchFilerButton ? (
            <>
              <TouchableOpacity style={styles.iconStyling}>
                <SearchIcon width={20} height={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconStyling} onPress={() => navigate('/marketfilter')}>
                <FilterIcon width={20} height={20} color="#fff" />
              </TouchableOpacity>
            </>
          ) : (
            ''
          )}

          {props.shareandMoreButton ? (
            <>
              <TouchableOpacity style={styles.iconStyling}>
                <ShareIcon width={20} height={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconStyling}>
                <MoreDotsIcon width={34} height={35} color="#fff" />
              </TouchableOpacity>
            </>
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerTextSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  autoScrollHeading:{
    marginLeft:20 ,
    color: lightColor,
    fontSize: 18,
    paddingVertical: 10,
    textTransform: 'capitalize',
    fontFamily: 'Roboto-Bold',
    flexGrow: 1,
  },
  pageHeading: {
    marginLeft: 20,
    color: lightColor,
    fontSize: 18,
    paddingVertical: 10,
    textTransform: 'capitalize',
    fontFamily: 'Roboto-Bold',
    flexGrow: 1,

  },
  iconStyling: {
    marginHorizontal: 14,
  },
  scrolling2: {
    marginLeft: 20,
  },
});
