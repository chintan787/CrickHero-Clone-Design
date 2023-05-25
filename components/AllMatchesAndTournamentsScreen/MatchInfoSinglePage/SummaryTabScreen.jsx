import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import BarChartIcon from '../../../images/BarChartIcon';
import PointerIcon from '../../../images/PointerIcon';
import SwipeLeftArrow from '../../../images/SwipeLeftArrow';
import SwipeRightArrow from '../../../images/SwipeRightArrow';
import {globalStyles} from '../../Global.css';

export default function SummaryTabScreen({ navigation }) {

let stringVal = "(sada adda 11(Una)) ";
let shortenString = stringVal.substring(0, 14).concat('..');

  return (
    <View style={styles.pageContainer}>
      <ScrollView>
        <View style={styles.insightBar}>
          <BarChartIcon />
          <Text style={[globalStyles.insightHeading,styles.insightHeading]}>
            Which team has scored more boundaries? Sadda adda11 (una) or
            Bhingran 11?
          </Text>
          <View style={{alignSelf: 'flex-end'}}>
            <PointerIcon />
          </View>
        </View>

        <View style={styles.teamScoresSection}>
          <View style={styles.itemSpacing}>
            <View style={styles.teamNameContainer}>
              <Text style={globalStyles.teamName}>Sada adda 11(una)</Text>
              <Text style={globalStyles.customBadge}>result</Text>
            </View>

            <Text style={styles.runs}>
              116/7 <Text style={styles.overs}>(10.0 Ov)</Text>
            </Text>
          </View>

          <View style={styles.itemSpacing}>
            <View style={styles.teamNameContainer}>
              <Text style={globalStyles.teamName}>Bhingran 11</Text>
            </View>

            <Text style={styles.runs}>
              52/10 <Text style={styles.overs}>(8.4 Ov)</Text>
            </Text>
          </View>

          <View style={styles.itemSpacing}>
            <Text style={styles.winnerTeam}>
              Sada adda 11(una) won by 64 runs
            </Text>
          </View>

          <View style={styles.itemSpacing}>
            <View style={styles.viewerCountSection}>
              <Text style={styles.viewersCount}>
                779 <Text style={styles.viewersText}>Total view</Text>
              </Text>
              <Text style={styles.viewersCount}>
                3 <Text style={styles.viewersText}>Live Viewers</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={[globalStyles.customFlexDirection, {padding: 10}]}>
          <Image
            source={require('../../../images/topplayer2.jpg')}
            style={styles.playerImage}
          /> 
          <View style={{flexGrow: 1, marginLeft: 10}}>
            <View style={[globalStyles.customFlexDirectionWithJustify]}>
              <Text style={styles.playerOftheMatchText}>
                Player of the match
              </Text>
              <TouchableOpacity>
                <Text style={styles.link}>how?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.playerOftheMatch}></View>
            {/* <View> */}
            <View style={globalStyles.customFlexDirectionWithJustify}>
              <Text style={styles.playerName}>Jayesh Bambhaniya</Text>
              <Text style={styles.winnerteamName}>{shortenString}</Text>
            </View>
            <TouchableOpacity style={globalStyles.customFlexDirection}>
              <BarChartIcon />
              <Text style={styles.insightLink}>Innings insights</Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
        </View>

        <View style={styles.bestPerformanceSection}>
          <Text style={globalStyles.pageHeading}>Best perfornamce</Text>

          {/* batters */}
          <View
            style={[
              globalStyles.customFlexDirection,
              styles.bestPerformancetableHeading,
            ]}>
            <Text style={[styles.tableLeftHeading]}>Batters</Text>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.scoreDetailsTitle,
              ]}>
              <Text style={styles.tableRightHeading}>R</Text>
              <Text style={styles.tableRightHeading}>B</Text>
              <Text style={styles.tableRightHeading}>4s</Text>
              <Text style={styles.tableRightHeading}>6s</Text>
              <Text style={[styles.tableRightHeading, styles.tableLastChild]}>
                SR
              </Text>
            </View>
          </View>
          <View style={styles.playerOftheMatch}></View>

          <View style={styles.performanceSection}>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.bestPerformancetableData,
              ]}>
              <Text style={[styles.tableLeftData]}>Jayesh Bambhaniya</Text>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.scoreDetailsTitle,
                ]}>
                <Text style={styles.tableRuntData}>32</Text>
                <Text style={[styles.tableRightData]}>19</Text>
                <Text style={styles.tableRightData}>3</Text>
                <Text style={styles.tableRightData}>2</Text>
                <Text style={[styles.tableRightData, styles.tableLastChild]}>
                  168.42
                </Text>
              </View>
            </View>
            <Text style={styles.subTitle}>sada adda 11(una)</Text>
          </View>

          <View style={styles.performanceSection}>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.bestPerformancetableData,
              ]}>
              <Text style={[styles.tableLeftData]}>vipul Bambhaniya</Text>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.scoreDetailsTitle,
                ]}>
                <Text style={styles.tableRuntData}>30</Text>
                <Text style={[styles.tableRightData]}>9</Text>
                <Text style={styles.tableRightData}>1</Text>
                <Text style={styles.tableRightData}>3</Text>
                <Text style={[styles.tableRightData, styles.tableLastChild]}>
                  333.33
                </Text>
              </View>
            </View>
            <Text style={styles.subTitle}>sada adda 11(una)</Text>
          </View>

          <View style={styles.performanceSection}>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.bestPerformancetableData,
              ]}>
              <Text style={[styles.tableLeftData]}>niraj shiyal (coach)</Text>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.scoreDetailsTitle,
                ]}>
                <Text style={styles.tableRuntData}>18</Text>
                <Text style={[styles.tableRightData]}>11</Text>
                <Text style={styles.tableRightData}>0</Text>
                <Text style={styles.tableRightData}>2</Text>
                <Text style={[styles.tableRightData, styles.tableLastChild]}>
                  163.64
                </Text>
              </View>
            </View>
            <Text style={styles.subTitle}>sada adda 11(una)</Text>
          </View>
        </View>

        {/* bowlers  */}
        <View style={styles.bestPerformanceSection}>
          <View
            style={[
              globalStyles.customFlexDirection,
              styles.bestPerformancetableHeading,
            ]}>
            <Text style={[styles.tableLeftHeading]}>Bowlers</Text>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.scoreDetailsTitle,
              ]}>
              <Text style={styles.tableRightHeading}>O</Text>
              <Text style={styles.tableRightHeading}>M</Text>
              <Text style={styles.tableRightHeading}>R</Text>
              <Text style={styles.tableRightHeading}>W</Text>
              <Text style={[styles.tableRightHeading, styles.tableLastChild]}>
                Eco
              </Text>
            </View>
          </View>
          <View style={styles.playerOftheMatch}></View>

          <View style={styles.performanceSection}>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.bestPerformancetableData,
              ]}>
              <Text style={[styles.tableLeftData]}>Jayesh Bambhaniya</Text>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.scoreDetailsTitle,
                ]}>
                <Text style={styles.tableRightData}>2.4</Text>
                <Text style={[styles.tableRightData]}>0</Text>
                <Text style={styles.tableRightData}>10</Text>
                <Text style={styles.tableRuntData}>5</Text>
                <Text style={[styles.tableRightData, styles.tableLastChild]}>
                  3.75
                </Text>
              </View>
            </View>
            <Text style={styles.subTitle}>sada adda 11(una)</Text>
          </View>

          <View style={styles.performanceSection}>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.bestPerformancetableData,
              ]}>
              <Text style={[styles.tableLeftData]}>Alpesh b</Text>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.scoreDetailsTitle,
                ]}>
                <Text style={styles.tableRightData}>2.0</Text>
                <Text style={[styles.tableRightData]}>0</Text>
                <Text style={styles.tableRightData}>13</Text>
                <Text style={styles.tableRuntData}>2</Text>
                <Text style={[styles.tableRightData, styles.tableLastChild]}>
                 6.50
                </Text>
              </View>
            </View>
            <Text style={styles.subTitle}>sada adda 11(una)</Text>
          </View>

          <View style={styles.performanceSection}>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.bestPerformancetableData,
              ]}>
              <Text style={[styles.tableLeftData]}>Daud</Text>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.scoreDetailsTitle,
                ]}>
                <Text style={styles.tableRightData}>2.0</Text>
                <Text style={[styles.tableRightData]}>0</Text>
                <Text style={styles.tableRightData}>16</Text>
                <Text style={styles.tableRuntData}>2</Text>
                <Text style={[styles.tableRightData, styles.tableLastChild]}>
                  8.00
                </Text>
              </View>
            </View>
            <Text style={styles.subTitle}>Bhingran 11</Text>
          </View>
        </View> 
        {/* end //bowlers */}
        <View style={[globalStyles.customFlexDirectionWithJustify,styles.tabsLinkSection]}>
          <TouchableOpacity onPress={() => navigation.jumpTo('Info')} style={globalStyles.customFlexDirection}><SwipeLeftArrow /><Text style={styles.tabLinks}>info</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.jumpTo('scorecard')} style={globalStyles.customFlexDirection}><Text style={styles.tabLinks}>scorecard</Text><SwipeRightArrow/></TouchableOpacity>
        </View>

        <View style={{height:100}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flexGrow: 1,
  },
  insightBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#B9E8DE',
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  insightHeading: {
    marginLeft: 10,
    maxWidth: '80%',
  },
  insighTouchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamScoresSection: {
    backgroundColor: '#fff',
    padding: 10,
  },
  itemSpacing: {
    marginBottom: 5,
  },
  teamNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // teamName: {
  //   color: '#000',
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  runs: {
    color: '#000',
    fontSize: 28,
    fontFamily:'Roboto-Bold',
    marginVertical: 5,
  },
  overs: {
    color: '#73787E',
    fontSize: 20,
    fontFamily:'Roboto-Light'
  },
  winnerTeam: {
    fontSize: 12,
    fontFamily:'Roboto-Regular',
    color: '#AD2112',
  },
  viewerCountSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  viewersCount: {
    fontSize: 14,
    fontFamily:'Roboto-Medium',
    color: '#000',
    marginRight: 15,
  },
  viewersText: {
    color: '#73787E',
    fontSize: 14,
    fontFamily:'Roboto-Regular',
  },
  playerOftheMatch: {
    backgroundColor: '#D5D5D5',
    width: '100%',
    height: 1,
    // marginTop: 5,
    marginBottom: 4,
  },
  playerOftheMatchText: {
    color: '#73787E',
    fontSize: 12,
    fontFamily:'Roboto-Regular',
  },
  link: {
    color: '#14B492',
    textTransform: 'capitalize',
    fontSize: 12,
    fontFamily:'Roboto-Medium',

  },
  playerName: {
    fontSize: 15,
    fontFamily:'Roboto-Bold',
    color: '#000',
  },
  winnerteamName: {
    fontSize: 12,
   fontFamily:'Roboto-Regular',
    color: '#73787E',
    maxWidth: '35%',
    fontStyle: 'italic',
  },
  insightLink: {
    color: '#14B492',
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily:'Roboto-Medium',
    marginLeft: 5,
  },
  playerImage: {
    width: 80,
    height: 80,
  },

  bestPerformanceSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  
  bestPerformancetableHeading: {
    marginVertical: 10,
  },
  bestPerformancetableData: {
    marginVertical: 4,
  },
  tableRightHeading: {
    color: '#73787E',
    fontSize: 12,
    fontFamily:'Roboto-Regular',
    textAlign: 'right',
    width: '12%',

    // marginRight:10,

    // backgroundColor:'green'
  },
  tableLeftHeading: {
    color: '#73787E',
    fontSize: 12,
   fontFamily:'Roboto-Regular',
    textAlign: 'left',
    flexGrow: 1,
    // backgroundColor:'red'
  },
  tableLastChild: {
    width: '26%',

    // 38
  },
  scoreDetailsTitle: {
    width: '50%',
    justifyContent: 'space-between',
  },
  tableLeftData: {
    fontSize: 15,
    fontFamily:'Roboto-Medium',
    color: '#15B293',
    textAlign: 'left',
    flexGrow: 1,
    textTransform: 'capitalize',
  },
  tableRightData: {
    fontSize: 14,
    fontFamily:'Roboto-Medium',
    color: '#727A7D',
    textAlign: 'right',
    width: '12%',
    // marginRight:10
    // backgroundColor:'pink'
  },
  tableRuntData: {
    fontSize: 14,
    fontFamily:'Roboto-Black',
    color: '#2D363D',
    textAlign: 'right',
    width: '12%',

    // marginRight:10
  },
  performanceSection: {
    marginBottom: 5,
  },
  subTitle: {
    color: '#73787E',
    fontSize: 12,
   fontFamily:'Roboto-Medium'
  },
  tabLinks:{
    color: '#15B293',
    fontSize:15,
    fontFamily:'Roboto-Bold',
    textTransform:'uppercase',
    textDecorationLine:'underline'
  },
  tabsLinkSection:{
    marginVertical:20
  }
});
