import React, { useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  darkColor,
  globalStyles,
  lightBackgroundColor,
  secondaryColor,
} from '../../Global.css';

export default function StatsTournaments() {
  

  return (
    <View style={globalStyles.pageContainer}>
      {/* <Text style={{color: '#000'}}> StatsTournaments </Text> */}
      <ScrollView>
        <View style={styles.allcards}>
          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>2</Text>
            <Text style={styles.info}>Matches</Text>
          </View>

          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>0</Text>
            <Text style={styles.info}>upcomig</Text>
          </View>

          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>1</Text>
            <Text style={styles.info}>won</Text>
          </View>

          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>1</Text>
            <Text style={styles.info}>lost</Text>
          </View>

          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>0</Text>
            <Text style={styles.info}>tie</Text>
          </View>

          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>0</Text>
            <Text style={styles.info}>drawn</Text>
          </View>
          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>0</Text>
            <Text style={styles.info}>nr</Text>
          </View>
          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>50.0%</Text>
            <Text style={styles.info}>win</Text>
          </View>
          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>1</Text>
            <Text style={styles.info}>toss won</Text>
          </View>
          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>1</Text>
            <Text style={styles.info}>bat first</Text>
          </View>

          <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text style={styles.numbers}>0</Text>
            <Text style={styles.info}>field first</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: lightBackgroundColor,
    borderRadius: 2,
    padding: 14,
    width: 110,
    height: 80,
    margin: 5,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  allcards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  numbers: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    color: darkColor,
    textAlign: 'center',
  },
  info: {
    color: secondaryColor,
    fontSize: 12,
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
});
