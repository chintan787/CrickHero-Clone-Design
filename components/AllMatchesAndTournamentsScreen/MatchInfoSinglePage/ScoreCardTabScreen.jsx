import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import { List } from 'react-native-paper';
import LeftArrow from '../../../images/LeftArrow';
import SwipeLeftArrow from '../../../images/SwipeLeftArrow';
import BarChartIcon from '../../../images/BarChartIcon';
import PointerIcon from '../../../images/PointerIcon';
import {globalStyles} from '../../Global.css';
import AccordianDownArrow from '../../../images/AccordianDownArrow';
import MultipleShareIcon from '../../../images/MultipleShareIcon';

export default function ScoreCardTabScreen() {
  // letPress = () => setExpanded(!expanded);
  const [teamOneExpanded, setTeamOneExpanded] = useState(false);
  const [teamTwoExpanded, setTeamTwoExpanded] = useState(false);

  const handleAccordian = e => {
    console.log('teamOneExpanded', teamOneExpanded);
    setTeamOneExpanded(!teamOneExpanded);
  };

  const battersData = [
    {
      id: 1,
      playerName: 'Vaja Nirbhay',
      runs: 8,
      balls: 4,
      four: 0,
      six: 1,
      sr: '200.0',
      min: 4,
      playerDetails: 'c Solanki PAresh (pari) b Bharat Bambhaniya',
    },
    {
      id: 2,
      playerName: 'darshu solanki',
      runs: 14,
      balls: 6,
      four: 3,
      six: 0,
      sr: '233.3',
      min: 9,
      playerDetails: 'c&b daud',
    },
    {
      id: 3,
      playerName: 'jayesh bhambhaniya',
      runs: 32,
      balls: 19,
      four: 3,
      six: 2,
      sr: '168.4',
      min: 25,
      playerDetails: 'c Solanki Paresh (pari)',
    },
    {
      id: 4,
      playerName: 'pinak maiya',
      runs: 0,
      balls: 2,
      four: 0,
      six: 0,
      sr: '0.00',
      min: 1,
      playerDetails: 'b daud',
    },
    {
      id: 5,
      playerName: 'chagan sadda adda',
      runs: 0,
      balls: 2,
      four: 0,
      six: 0,
      sr: '0.00',
      min: 1,
      playerDetails: 'C Jaydip B Barat Bambhaniya',
    },
    {
      id: 6,
      playerName: 'Niraj shiyal ( Coach )',
      runs: 18,
      balls: 11,
      four: 0,
      six: 2,
      sr: '163.3',
      min: 19,
      playerDetails: 'c daud b naran',
    },
    {
      id: 7,
      playerName: 'Dipu',
      runs: 4,
      balls: 6,
      four: 0,
      six: 0,
      sr: '66.67',
      min: 8,
      playerDetails: 'c daub Solanki Paresh (pari)',
    },
    {
      id: 8,
      playerName: 'Vipul bambhaniya',
      runs: 30,
      balls: 9,
      four: 1,
      six: 3,
      sr: '333.3',
      min: 9,
      playerDetails: 'not out',
    },
    {
      id: 9,
      playerName: 'Nill*',
      runs: 4,
      balls: 1,
      four: 1,
      six: 0,
      sr: '400.0',
      min: 4,
      playerDetails: 'not out',
    },
  ];

  const bolwersData = [
    {
      id: 1,
      playerName: 'daud (c)',
      overs: 0,
      m: 0,
      r: 16,
      w: 2,
      Eco: 8.0,
    },
    {
      id: 2,
      playerName: 'Bharat bambhaniya',
      overs: 2,
      m: 0,
      r: 18,
      w: 2,
      Eco: 9.0,
    },
    {
      id: 3,
      playerName: 'naran',
      overs: 3,
      m: 0,
      r: 38,
      w: 1,
      Eco: 12.6,
    },
    {
      id: 4,
      playerName: 'ajju vaja',
      overs: 1,
      m: 0,
      r: 17,
      w: 0,
      Eco: 17.0,
    },
    {
      id: 5,
      playerName: 'Solanki Paresh (pari)',
      overs: 2,
      m: 0,
      r: 27,
      w: 2,
      Eco: 13.5,
    },
  ];

  const fallOfWickets = [
    {
      id: 1,
      playerName: 'vaja nirbhay',
      score: 21,
      over: '(1.2 ov)',
    },
    {
      id: 2,
      playerName: 'darshu solanki',
      score: 26,
      over: '(2.3 ov)',
    },
    {
      id: 3,
      playerName: 'pinak maiya',
      score: 26,
      over: '(2.5 ov)',
    },
    {
      id: 4,
      playerName: 'chagan SAdda adda',
      score: 28,
      over: '(3.2 ov)',
    },
    {
      id: 5,
      playerName: 'jayesh bambhaniya',
      score: 75,
      over: '(6.5 ov)',
    },
    {
      id: 6,
      playerName: 'niraj shiyal (coach)',
      score: 79,
      over: '(7.4 ov)',
    },
    {
      id: 7,
      playerName: 'dipu',
      score: 92,
      over: '(8.5 ov)',
    },
  ];

  return (
    <View style={styles.pageContainer}>
      <ScrollView>
        <View
          style={[
            globalStyles.customFlexDirectionWithJustify,
            styles.insightBar,
          ]}>
          <BarChartIcon />
          <Text style={[styles.insightHeading, globalStyles.insightHeading]}>
            Which team faced more dot balls? Find out now!
          </Text>
          <View style={{alignSelf: 'flex-end'}}>
            <PointerIcon />
          </View>
        </View>

        <View
          style={[
            styles.teamScoresSection,
            {backgroundColor: teamOneExpanded ? '#000' : '#fff'},
          ]}>
          <TouchableOpacity id="sadaAdda" onPress={e => handleAccordian(e)}>
            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.accordianSection,
              ]}>
              <Text
                style={[
                  styles.teamName,
                  {color: teamOneExpanded ? '#fff' : '#000'},
                ]}>
                Sada adda 11(una)
              </Text>
              <Text
                style={[
                  styles.runs,
                  {color: teamOneExpanded ? '#fff' : '#000'},
                ]}>
                116/7{' '}
                <Text
                  style={[
                    styles.overs,
                    {color: teamOneExpanded ? '#fff' : '#73787E'},
                  ]}>
                  (10.0 Ov)
                </Text>
              </Text>
              <TouchableOpacity
                style={styles.arrows}
                id="teamOne"
                onPress={e => handleAccordian(e)}>
                <AccordianDownArrow height={18} width={18} color="#BDBEC0" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        {/* Accordian Data */}
        {teamOneExpanded ? (
          <>
            <View style={styles.bestPerformanceSection}>
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
                  <Text
                    style={[styles.tableRightHeading, styles.tableLastChild]}>
                    SR
                  </Text>
                  <Text style={[styles.tableRightHeading]}>Min.</Text>
                </View>
              </View>
            </View>

            {battersData.map(item => (
              <View style={[styles.performanceSection]} key={item.id}>
                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.bestPerformancetableData,
                  ]}>
                  <Text style={[styles.tableLeftData]}>{item.playerName}</Text>
                  <View
                    style={[
                      globalStyles.customFlexDirection,
                      styles.scoreDetailsTitle,
                    ]}>
                    <Text style={styles.tableRunData}>{item.runs}</Text>
                    <Text style={[styles.tableRightData]}>{item.balls}</Text>
                    <Text style={styles.tableRightData}>{item.four}</Text>
                    <Text style={styles.tableRightData}>{item.six}</Text>
                    <Text
                      style={[styles.tableRightData, styles.tableLastChild]}>
                      {item.sr}
                    </Text>
                    <Text style={styles.tableRightData}>{item.min}</Text>
                  </View>
                </View>
                <Text style={styles.subTitle}>{item.playerDetails}</Text>
              </View>
            ))}

            <View style={[styles.performanceSection]}>
              <View style={globalStyles.customFlexDirectionWithJustify}>
                <Text style={styles.rowTitle}>Extras</Text>
                <Text style={styles.teamData}>
                  6 <Text style={styles.teamSubData}>(wd 6)</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.performanceSection]}>
              <View style={globalStyles.customFlexDirectionWithJustify}>
                <Text style={styles.rowTitle}>total</Text>
                <View style={globalStyles.customFlexDirection}>
                  <Text style={styles.teamData}>
                    116/7 <Text style={styles.teamSubData}>(10.0 Ov) </Text> RR
                    11.60
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.performanceSection]}>
              <Text style={styles.batTitle}>To bat:</Text>
              <Text style={styles.batsmanName}>
                Rakesh majethiyasadda adda,Alpesh B
              </Text>
            </View>

            {/* bowlers */}

            <View style={styles.bestPerformanceSection}>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.bestPerformancetableHeading,
                ]}>
                <Text style={{flexGrow: 1}}>
                  <Text style={[styles.tableLeftHeading]}>bowlers</Text>
                  <MultipleShareIcon />
                </Text>

                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.scoreDetailsTitle,
                  ]}>
                  <Text style={styles.tableRightHeading}>O</Text>
                  <Text style={styles.tableRightHeading}>M</Text>
                  <Text style={styles.tableRightHeading}>R</Text>
                  <Text style={styles.tableRightHeading}>W</Text>
                  <Text
                    style={[styles.tableRightHeading, styles.tableLastChild]}>
                    Eco
                  </Text>
                </View>
              </View>
            </View>

            {bolwersData.map(item => (
              <View style={[styles.performanceSection]} key={item.id}>
                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.bestPerformancetableData,
                  ]}>
                  <Text style={[styles.tableLeftData]}>{item.playerName}</Text>
                  <View
                    style={[
                      globalStyles.customFlexDirection,
                      styles.scoreDetailsTitle,
                    ]}>
                    <Text style={styles.tableRightData}>{item.overs}</Text>
                    <Text style={[styles.tableRightData]}>{item.m}</Text>
                    <Text style={styles.tableRightData}>{item.r}</Text>
                    <Text style={styles.tableRunData}>{item.w}</Text>
                    <Text
                      style={[styles.tableRightData, styles.tableLastChild]}>
                      {item.Eco}
                    </Text>
                  </View>
                </View>
              </View>
            ))}

            {/* fall of wickets */}

            <View style={styles.bestPerformanceSection}>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.bestPerformancetableHeading,
                ]}>
                <Text style={[styles.tableLeftHeading]}>fall of wickets</Text>

                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.scoreDetailsTitle,
                  ]}>
                  <Text style={[styles.tableRightHeading, {width: '100%'}]}>
                    Score(over)
                  </Text>
                </View>
              </View>
            </View>

            {fallOfWickets.map(item => (
              <View style={[styles.performanceSection]} key={item.id}>
                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.bestPerformancetableData,
                  ]}>
                  <View>
                    <View style={globalStyles.customFlexDirection}>
                      <Text style={[styles.wicketPlayerName]}>{item.id}</Text>
                      <Text style={[styles.wicketPlayerName]}>
                        {item.playerName}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      globalStyles.customFlexDirection,
                      styles.wicketsSection,
                    ]}>
                    <Text style={styles.scoreData}>{item.score}</Text>
                    <Text style={styles.wOverData}>{item.over}</Text>
                  </View>
                </View>
              </View>
            ))}
          </>
        ) : (
          ''
        )}

        <View
          style={[
            styles.teamScoresSection,
            {backgroundColor: teamTwoExpanded ? '#000' : '#fff'},
          ]}>
          <TouchableOpacity
            onPress={() => setTeamTwoExpanded(!teamTwoExpanded)}>
            <View style={[globalStyles.customFlexDirectionWithJustify]}>
              <Text
                style={[
                  styles.teamName,
                  {color: teamTwoExpanded ? '#fff' : '#000'},
                ]}>
                Bhingran 11
              </Text>
              <Text
                style={[
                  styles.runs,
                  {color: teamTwoExpanded ? '#fff' : '#000'},
                ]}>
                52/10{' '}
                <Text
                  style={[
                    styles.overs,
                    {color: teamTwoExpanded ? '#fff' : '#73787E'},
                  ]}>
                  (8.4 Ov)
                </Text>
              </Text>
              <TouchableOpacity
                style={styles.arrows}
                onPress={() => setTeamTwoExpanded(!teamTwoExpanded)}>
                <AccordianDownArrow height={18} width={18} color="#BDBEC0" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        {/* Accordian Data */}
        {teamTwoExpanded ? (
          <>
            <View style={styles.bestPerformanceSection}>
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
                  <Text
                    style={[styles.tableRightHeading, styles.tableLastChild]}>
                    SR
                  </Text>
                  <Text style={[styles.tableRightHeading]}>Min.</Text>
                </View>
              </View>
            </View>

            {battersData.map(item => (
              <View style={[styles.performanceSection]} key={item.id}>
                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.bestPerformancetableData,
                  ]}>
                  <Text style={[styles.tableLeftData]}>{item.playerName}</Text>
                  <View
                    style={[
                      globalStyles.customFlexDirection,
                      styles.scoreDetailsTitle,
                    ]}>
                    <Text style={styles.tableRunData}>{item.runs}</Text>
                    <Text style={[styles.tableRightData]}>{item.balls}</Text>
                    <Text style={styles.tableRightData}>{item.four}</Text>
                    <Text style={styles.tableRightData}>{item.six}</Text>
                    <Text
                      style={[styles.tableRightData, styles.tableLastChild]}>
                      {item.sr}
                    </Text>
                    <Text style={styles.tableRightData}>{item.min}</Text>
                  </View>
                </View>
                <Text style={styles.subTitle}>{item.playerDetails}</Text>
              </View>
            ))}

            <View style={[styles.performanceSection]}>
              <View style={globalStyles.customFlexDirectionWithJustify}>
                <Text style={styles.rowTitle}>Extras</Text>
                <Text style={styles.teamData}>
                  6 <Text style={styles.teamSubData}>(wd 6)</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.performanceSection]}>
              <View style={globalStyles.customFlexDirectionWithJustify}>
                <Text style={styles.rowTitle}>total</Text>
                <View style={globalStyles.customFlexDirection}>
                  <Text style={styles.teamData}>
                    116/7 <Text style={styles.teamSubData}>(10.0 Ov) </Text> RR
                    11.60
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.performanceSection]}>
              <Text style={styles.batTitle}>To bat:</Text>
              <Text style={styles.batsmanName}>
                Rakesh majethiyasadda adda,Alpesh B
              </Text>
            </View>

            {/* bowlers */}

            <View style={styles.bestPerformanceSection}>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.bestPerformancetableHeading,
                ]}>
                <Text style={{flexGrow: 1}}>
                  <Text style={[styles.tableLeftHeading]}>bowlers</Text>
                  <MultipleShareIcon />
                </Text>

                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.scoreDetailsTitle,
                  ]}>
                  <Text style={styles.tableRightHeading}>O</Text>
                  <Text style={styles.tableRightHeading}>M</Text>
                  <Text style={styles.tableRightHeading}>R</Text>
                  <Text style={styles.tableRightHeading}>W</Text>
                  <Text
                    style={[styles.tableRightHeading, styles.tableLastChild]}>
                    Eco
                  </Text>
                </View>
              </View>
            </View>

            {bolwersData.map(item => (
              <View style={[styles.performanceSection]} key={item.id}>
                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.bestPerformancetableData,
                  ]}>
                  <Text style={[styles.tableLeftData]}>{item.playerName}</Text>
                  <View
                    style={[
                      globalStyles.customFlexDirection,
                      styles.scoreDetailsTitle,
                    ]}>
                    <Text style={styles.tableRightData}>{item.overs}</Text>
                    <Text style={[styles.tableRightData]}>{item.m}</Text>
                    <Text style={styles.tableRightData}>{item.r}</Text>
                    <Text style={styles.tableRunData}>{item.w}</Text>
                    <Text
                      style={[styles.tableRightData, styles.tableLastChild]}>
                      {item.Eco}
                    </Text>
                  </View>
                </View>
              </View>
            ))}

            {/* fall of wickets */}

            <View style={styles.bestPerformanceSection}>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.bestPerformancetableHeading,
                ]}>
                <Text style={[styles.tableLeftHeading]}>fall of wickets</Text>

                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.scoreDetailsTitle,
                  ]}>
                  <Text style={[styles.tableRightHeading, {width: '100%'}]}>
                    Score(over)
                  </Text>
                </View>
              </View>
            </View>

            {fallOfWickets.map(item => (
              <View style={[styles.performanceSection]} key={item.id}>
                <View
                  style={[
                    globalStyles.customFlexDirection,
                    styles.bestPerformancetableData,
                  ]}>
                  <View>
                    <View style={globalStyles.customFlexDirection}>
                      <Text style={[styles.wicketPlayerName]}>{item.id}</Text>
                      <Text style={[styles.wicketPlayerName]}>
                        {item.playerName}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      globalStyles.customFlexDirection,
                      styles.wicketsSection,
                    ]}>
                    <Text style={styles.scoreData}>{item.score}</Text>
                    <Text style={styles.wOverData}>{item.over}</Text>
                  </View>
                </View>
              </View>
            ))}
          </>
        ) : (
          ''
        )}
        <View style={{height: 100}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flexGrow: 1,
  },

  insightBar: {
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
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginBottom: 2,
  },
  teamName: {
    fontSize: 16,
    flexGrow: 1,
    fontFamily: 'Roboto-Medium',
  },
  runs: {
    fontSize: 20,
    fontFamily: 'Roboto-bold',
    marginVertical: 5,
  },
  overs: {
    fontSize: 12,
    fontFamily: 'Roboto-Light',
  },
  arrows: {
    marginLeft: 5,
    // backgroundColor:'red',
    // padding:15
  },
  bestPerformancetableHeading: {
    marginVertical: 10,
  },
  tableLeftHeading: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    textAlign: 'left',
    flexGrow: 1,
    textTransform: 'capitalize',
  },
  scoreDetailsTitle: {
    width: '58%',
    justifyContent: 'space-between',
  },
 tableRightHeading : {
    color: '#000',
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
    textAlign: 'right',
    width: '14%',
  },
  bestPerformanceSection: {
    paddingHorizontal: 10,
  },
  performanceSection: {
    marginBottom: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#fff',
  },
  bestPerformancetableData: {
    marginVertical: 4,
  },
  tableLeftData: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    color: '#15B293',
    textAlign: 'left',
    flexGrow: 1,
    textTransform: 'capitalize',
  },
  tableRightData: {
    fontSize: 14,
    fontWeight: '500',
    color: '#727A7D',
    textAlign: 'right',
    width: '12%',
  },
  tableRunData: {
    fontSize: 14,
    fontFamily: 'Roboto-Black',
    color: '#2D363D',
    textAlign: 'right',
    width: '12%',
  },
  tableLastChild: {
    width: '26%',
    // 38
  },
  subTitle: {
    color: '#73787E',
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
  rowTitle: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Roboto-Regular',
    paddingVertical: 5,
    textTransform: 'capitalize',
  },
  teamData: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',

    color: '#000',
  },
  teamSubData: {
    color: '#73787E',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  batTitle: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',

    color: '#000',
  },
  batsmanName: {
    color: '#73787E',
    textTransform: 'capitalize',
    fontSize: 12,
    fontFamily: 'Roboto-Regular',

    fontStyle: 'italic',
    paddingBottom: 10,
  },

  wicketPlayerName: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',

    color: '#15B293',
    textAlign: 'left',
    flexGrow: 1,
    textTransform: 'capitalize',
    marginRight: 10,
  },
  scoreData: {
    fontSize: 14,
    fontFamily: 'Roboto-Black',

    color: '#2D363D',
    textAlign: 'right',
    paddingRight: 10,
  },
  wOverData: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',

    color: '#727A7D',
    textAlign: 'right',
    textTransform: 'capitalize',
  },
  wicketsSection: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
});
