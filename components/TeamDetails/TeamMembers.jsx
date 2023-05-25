import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {
  globalStyles,
  lightBackgroundColor,
  warningColor,
  primaryColor,
} from '../Global.css';

export default function TeamMembers() {
  const memberData = [
    {
      id: 1,
      name: 'Alpesh B',
      unverified: 'unverified',
      img: require('../../images/user_profile.png'),
    },
    {
      id: 2,
      name: 'chagan sadda adda',
      img: require('../../images/topplayer1.jpg'),
    },
    {
      id: 3,
      name: 'darshu solanki',
      img: require('../../images/topplayer2.jpg'),
    },
    {
      id: 4,
      name: 'dipu',
      verified: 'accumlator',
      img: require('../../images/topplayer3.jpg'),
    },
    {
      id: 5,
      name: 'Jayesh bhambhaniya',
      verified: 'hard hitter',
      img: require('../../images/topplayer4.jpg'),
    },
    {
      id: 6,
      name: 'kanji parmar',
      unverified: 'unverified',
      img: require('../../images/user_profile.png'),
    },
    {
      id: 7,
      name: 'Nill',
      unverified: 'unverified',
      img: require('../../images/user_profile.png'),
    },
    {
      id: 8,
      name: 'niraj shiyal (Coach)',
      verified: 'destroyer',
      img: require('../../images/topplayer1.jpg'),
    },
    {
      id: 9,
      name: 'pinak maiya',
      verified: 'destroyer',
      img: require('../../images/topplayer2.jpg'),
    },
    {
      id: 10,
      name: 'pragnesh',
      unverified: 'unverified',
      img: require('../../images/user_profile.png'),
    },
    {
      id: 11,
      name: 'rakesh majethiya.sadda adda',
      img: require('../../images/topplayer3.jpg'),
    },
    {
      id: 12,
      name: 'rathod mansukh',
      img: require('../../images/topplayer4.jpg'),
    },
    {
      id: 13,
      name: 'vaja nirbhay',
      verified: 'hard hitter',
      img: require('../../images/topplayer1.jpg'),
    },
    {
      id: 14,
      name: 'vipul bambhaniya',
      img: require('../../images/topplayer2.jpg'),
    },
  ];
  return (
    <View  style={globalStyles.pageContainer} >
      {/* <ScrollView> */}
        {memberData.map(item => (
          <View
            key={item.id}
            style={[
              styles.cardContainer,
              styles.shadowProp,
              globalStyles.customFlexDirection,
            ]}>
            <Image source={item.img} style={styles.profileImage} />
            <View style={styles.profileName}>
              <Text style={globalStyles.headingH4}>{item.name}</Text>
              {item.unverified ? (
                <Text style={styles.unverified}>{item.unverified}</Text>
              ) : (
                ''
              )}
              {item.verified ? (
                <Text style={styles.verified}>{item.verified}</Text>
              ) : (
                ''
              )}
            </View>
          </View>
        ))}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: lightBackgroundColor,
    borderRadius: 2,
    marginVertical: 5,
    marginHorizontal: 6,
    padding: 10,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  profileName: {
    marginLeft: 10,
  },
  unverified: {
    color: warningColor,
    fontSize: 11,
    fontFamily: 'Roboto-Medium',
    textTransform: 'uppercase',
  },
  verified: {
    color: primaryColor,
    fontSize: 11,
    fontFamily: 'Roboto-Medium',
    textTransform: 'capitalize',
  },
});
