import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity ,ScrollView ,Modal , Dimensions , Pressable} from 'react-native';
import AccordianDownArrow from '../../../images/AccordianDownArrow';
import {
  basicColor,
  primaryColor,
  primaryLightBackgroundColor,
  globalStyles,
  primaryBackgroundColor,
  tableHeadingBackgroundColor,
  darkColor,
  secondaryColor,
  lightBackgroundColor,
  darkBackgroundColor,
  secondaryBackgroundColor,
  dropDownBackgroundColor,
  secondaryIconBackgroundColor,
  warningColor,
  waringModalIconBackgroundColor,
  waringModalIconColor,
  lightColor,
  grayButtonColor,
} from '../../Global.css';
import LeftArrow from '../../../images/LeftArrow';
import AboutIcon from '../../../images/AboutIcon';
import { useNavigate } from 'react-router-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PointsTableTournament() {
  const [data, setData] = useState([
    {
      id: 1,
      teamName: 'jay shree ram 11',
      m: 2,
      w: 1,
      l: 1,
      t: 0,
      nr: 0,
      pt: 2,
      nrr: '2,500',
      matchInfo: [
        {
          id: 11,
          date: '19 Mar 23',
          oppositeTeamName: 'Royal 11 (Kesariya)',
          wondata: 'Won by 57 runs',
        },
        {
          id: 12,
          date: '19 Mar 23',
          oppositeTeamName: 'Mahadev 11 (paldi)',
          lostdata: 'Lost by 7 runs',
        },
      ],
    },
    {
      id: 2,
      teamName: 'bambhaniya 11(una)',
      m: 2,
      w: 1,
      l: 1,
      t: 0,
      nr: 0,
      pt: 2,
      nrr: '2,100',
      matchInfo: [
        {
          id: 13,
          date: '16 Mar 23',
          oppositeTeamName: 'Mahadev 11 (una)',
          wondata: 'Won by 43 runs',
        },
        {
          id: 14,
          date: '17 Mar 23',
          oppositeTeamName: 'Royal 11 (kesariya)',
          lostdata: 'Lost by 6 wickets',
        },
      ],
    },
    {
      id: 3,
      teamName: 'Mahadev 11(paldi)',
      m: 1,
      w: 1,
      l: 0,
      t: 0,
      nr: 0,
      pt: 2,
      nrr: '0,700',
      matchInfo: [
        {
          id: 15,
          date: '16 Mar 23',
          oppositeTeamName: 'Mahadev 11 (una)',
          wondata: 'Won by 43 runs',
        },
        {
          id: 16,
          date: '17 Mar 23',
          oppositeTeamName: 'Royal 11 (kesariya)',
          lostdata: 'Lost by 6 wickets',
        },
      ],
    },

    {
      id: 4,
      teamName: 'Mahadev 11(una)',
      m: 2,
      w: 1,
      l: 1,
      t: 0,
      nr: 0,
      pt: 2,
      nrr: '-1,528',
      matchInfo: [
        {
          id: 17,
          date: '16 Mar 23',
          oppositeTeamName: 'Mahadev 11 (una)',
          wondata: 'Won by 43 runs',
        },
        {
          id: 18,
          date: '17 Mar 23',
          oppositeTeamName: 'Royal 11 (kesariya)',
          lostdata: 'Lost by 6 wickets',
        },
      ],
    },
    {
      id: 5,
      teamName: 'Royal 11 (Kesariya)',
      m: 2,
      w: 1,
      l: 1,
      t: 0,
      nr: 0,
      pt: 2,
      nrr: '-2,800',
      matchInfo: [
        {
          id: 19,
          date: '16 Mar 23',
          oppositeTeamName: 'Mahadev 11 (una)',
          wondata: 'Won by 43 runs',
        },
        {
          id: 20,
          date: '17 Mar 23',
          oppositeTeamName: 'Royal 11 (kesariya)',
          lostdata: 'Lost by 6 wickets',
        },
      ],
    },
    {
      id: 6,
      teamName: 'marcha11',
      m: 1,
      w: 0,
      l: 1,
      t: 0,
      nr: 0,
      pt: 0,
      nrr: '-1,776',
      matchInfo: [
        {
          id: 21,
          date: '16 Mar 23',
          oppositeTeamName: 'Mahadev 11 (una)',
          wondata: 'Won by 43 runs',
        },
        {
          id: 22,
          date: '17 Mar 23',
          oppositeTeamName: 'Royal 11 (kesariya)',
          lostdata: 'Lost by 6 wickets',
        },
      ],
    },
  ]);

  const [teamOneExpanded, setTeamOneExpanded] = useState(false);
  const [teamTwoExpanded, setTeamTwoExpanded] = useState(false);
  const [teamThreeExpanded, setTeamThreeExpanded] = useState(false);
  const [teamFourExpanded, setTeamFourExpanded] = useState(false);
  const [teamFiveExpanded, setTeamFiveExpanded] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigate();


  const handleData = (e, name) => {
    console.log('id', name);
  };

  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.calculated}>How is NRR Calculated?</Text>
      </TouchableOpacity>

      <Text style={styles.tableTitle}>A (League Matches)</Text>

      <View style={styles.bestPerformanceSection}>
        <View
          style={[
            globalStyles.customFlexDirection,
            styles.bestPerformancetableHeading,
          ]}>
          <Text style={[styles.tableLeftHeading]}>Team</Text>
          <View
            style={[
              globalStyles.customFlexDirection,
              styles.scoreDetailsTitle,
            ]}>
            <Text style={styles.tableRightHeading}>M</Text>
            <Text style={styles.tableRightHeading}>w</Text>
            <Text style={styles.tableRightHeading}>l</Text>
            <Text style={styles.tableRightHeading}>t</Text>
            <Text style={styles.tableRightHeading}>nr</Text>
            <Text style={styles.tableRightHeading}>pt.</Text>
            <Text style={[styles.tableRightHeading]}>nrr</Text>
            <Text style={{width: 18}}></Text>
          </View>
        </View>
      </View>

    <ScrollView>
      
      <View style={[styles.lightBackgroundColor]}>
        <TouchableOpacity
          style={[
            styles.performanceSection,
            // styles.lightBackgroundColor,
            // {backgroundColor: item.id % 2 === 0 ? '#ccc' : '#fff'},
          ]}
          id="jay shree ram 11"
          onPress={() => setTeamOneExpanded(!teamOneExpanded)}>
          <View
            style={[
              globalStyles.customFlexDirection,
              styles.bestPerformancetableData,
              teamOneExpanded ? styles.borderClass : '',
            ]}>
            <Text style={[styles.tableLeftData]}>jay shree ram 11</Text>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.scoreDetailsTitle,
              ]}>
              <Text style={styles.tableRightData}>2</Text>
              <Text style={[styles.tableRightData]}>1</Text>
              <Text style={styles.tableRightData}>1</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>2</Text>
              <Text style={[styles.tableRightData, styles.tableLastChild]}>
                2,500
              </Text>
              <TouchableOpacity
                onPress={() => setTeamOneExpanded(!teamOneExpanded)} style={teamOneExpanded ?  styles.trasformToUpSide : ""}>
                <AccordianDownArrow height={18} width={18} color={basicColor} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {teamOneExpanded ? (
          <TouchableOpacity style={styles.scoreboardcontainer} onPress={() => setModalVisible(!modalVisible)}>
            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.teamScoreboard,
                styles.borderClass
              ]}>
              <Text style={styles.matchDate}>19 Mar 23</Text>
              <Text style={styles.teamNames}>Royal 11 (Kesariya)</Text>
              <View style={globalStyles.customFlexDirection}>
                <Text style={styles.winnerTeamInfo}>Won by 57 runs</Text>
                <TouchableOpacity style={styles.rightArrow} onPress={() => setModalVisible(!modalVisible)}>
                  <AccordianDownArrow height={18} width={18} color="#ccc" />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.teamScoreboard,
              ]}>
              <Text style={styles.matchDate}>19 Mar 23</Text>
              <Text style={styles.teamNames}>
                Mahadev 11 (paldi) Mahadev 11
              </Text>
              <View style={globalStyles.customFlexDirection}>
                <Text style={styles.lossingTeamInfo}>Lost by 7 runs</Text>

                <TouchableOpacity style={styles.rightArrow} onPress={() => setModalVisible(!modalVisible)}>
                  <AccordianDownArrow height={18} width={18} color="#ccc" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>



      <View style={[styles.darkBackgroundColor]}>
        <TouchableOpacity
          style={[
            styles.performanceSection,
            // styles.lightBackgroundColor,
            // {backgroundColor: item.id % 2 === 0 ? '#ccc' : '#fff'},
          ]}
          id="bambhaniya 11(una)"
          onPress={() => setTeamTwoExpanded(!teamTwoExpanded)}>
          <View
            style={[
              globalStyles.customFlexDirection,
              styles.bestPerformancetableData,
              teamTwoExpanded ? styles.borderClass : '',
            ]}>
            <Text style={[styles.tableLeftData]}>bambhaniya 11(una)</Text>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.scoreDetailsTitle,
              ]}>
              <Text style={styles.tableRightData}>2</Text>
              <Text style={[styles.tableRightData]}>1</Text>
              <Text style={styles.tableRightData}>1</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>2</Text>
              <Text style={[styles.tableRightData, styles.tableLastChild]}>
              2,100
              </Text>
              <TouchableOpacity
                onPress={() => setTeamTwoExpanded(!teamTwoExpanded)} style={teamTwoExpanded ?  styles.trasformToUpSide : ""}>
                <AccordianDownArrow height={18} width={18} color={basicColor} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {teamTwoExpanded ? (
          <TouchableOpacity style={styles.scoreboardcontainer} onPress={() => setModalVisible(!modalVisible)}>
            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.teamScoreboard,
                styles.borderClass
              ]}>
              {/* <Text style={{color:darkColor}}>name</Text> */}
              <Text style={styles.matchDate}>16 Mar 23</Text>
              <Text style={styles.teamNames}>Mahadev 11 (una)</Text>
              <View style={globalStyles.customFlexDirection}>
                <Text style={styles.winnerTeamInfo}>Won by 43 runs</Text>
                <TouchableOpacity style={styles.rightArrow} onPress={() => setModalVisible(!modalVisible)}>
                  <AccordianDownArrow height={18} width={18} color="#ccc" />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.teamScoreboard,
              ]}>
              <Text style={styles.matchDate}>17 Mar 23</Text>
              <Text style={styles.teamNames}>
              Royal 11 (kesariya)
              </Text>
              <View style={globalStyles.customFlexDirection}>
                <Text style={styles.lossingTeamInfo}>Lost by 6 wickets</Text>
                <TouchableOpacity style={styles.rightArrow} onPress={() => setModalVisible(!modalVisible)}>
                  <AccordianDownArrow height={18} width={18} color="#ccc" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>


      <View style={[styles.lightBackgroundColor]}>
        <TouchableOpacity
          style={[
            styles.performanceSection,
            // styles.lightBackgroundColor,
            // {backgroundColor: item.id % 2 === 0 ? '#ccc' : '#fff'},
          ]}
          id="Mahadev 11(paldi)"
          onPress={() => setTeamThreeExpanded(!teamThreeExpanded)}>
          <View
            style={[
              globalStyles.customFlexDirection,
              styles.bestPerformancetableData,
              teamThreeExpanded ? styles.borderClass : '',
            ]}>
            <Text style={[styles.tableLeftData]}>Mahadev 11(paldi)</Text>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.scoreDetailsTitle,
              ]}>
              <Text style={styles.tableRightData}>1</Text>
              <Text style={[styles.tableRightData]}>1</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>2</Text>
              <Text style={[styles.tableRightData, styles.tableLastChild]}>
                1,700
              </Text>
              <TouchableOpacity
                onPress={() => setTeamThreeExpanded(!teamThreeExpanded)} style={teamThreeExpanded ?  styles.trasformToUpSide : ""}>
                <AccordianDownArrow height={18} width={18} color={basicColor} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {teamThreeExpanded ? (
          <TouchableOpacity style={styles.scoreboardcontainer} onPress={() => setModalVisible(!modalVisible)}>
            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.teamScoreboard,
              ]}>
              {/* <Text style={{color:darkColor}}>name</Text> */}
              <Text style={styles.matchDate}>19 Mar 23</Text>
              <Text style={styles.teamNames}>jay shree ram 11</Text>
              <View style={globalStyles.customFlexDirection}>
                <Text style={styles.winnerTeamInfo}>Won by 7 runs</Text>
                <TouchableOpacity style={styles.rightArrow} onPress={() => setModalVisible(!modalVisible)}>
                  <AccordianDownArrow height={18} width={18} color="#ccc" />
                </TouchableOpacity>
              </View>
            </View>

            
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>


      <View style={[styles.darkBackgroundColor]}>
        <TouchableOpacity
          style={[
            styles.performanceSection,
            // styles.lightBackgroundColor,
            // {backgroundColor: item.id % 2 === 0 ? '#ccc' : '#fff'},
          ]}
          id="Mahadev 11(una)"
          onPress={() => setTeamFourExpanded(!teamFourExpanded)}>
          <View
            style={[
              globalStyles.customFlexDirection,
              styles.bestPerformancetableData,
              teamFourExpanded ? styles.borderClass : '',
            ]}>
            <Text style={[styles.tableLeftData]}>Mahadev 11(una)</Text>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.scoreDetailsTitle,
              ]}>
              <Text style={styles.tableRightData}>2</Text>
              <Text style={[styles.tableRightData]}>1</Text>
              <Text style={styles.tableRightData}>1</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>2</Text>
              <Text style={[styles.tableRightData, styles.tableLastChild]}>
              -1,528
              </Text>
              <TouchableOpacity
                onPress={() => setTeamFourExpanded(!teamFourExpanded)} style={teamFourExpanded ?  styles.trasformToUpSide : ""} >
                <AccordianDownArrow height={18} width={18} color={basicColor} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {teamFourExpanded ? (
          <TouchableOpacity style={styles.scoreboardcontainer} onPress={() => setModalVisible(!modalVisible)}>
            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.teamScoreboard,
                styles.borderClass
              ]}>
              {/* <Text style={{color:darkColor}}>name</Text> */}
              <Text style={styles.matchDate}>04 Mar 23</Text>
              <Text style={styles.teamNames}>Mahadev 11</Text>
              <View style={globalStyles.customFlexDirection}>
                <Text style={styles.winnerTeamInfo}>Won by 7 wickets</Text>
                <TouchableOpacity style={styles.rightArrow} onPress={() => setModalVisible(!modalVisible)}>
                  <AccordianDownArrow height={18} width={18} color="#ccc" />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.teamScoreboard,
              ]}>
              <Text style={styles.matchDate}>16 Mar 23</Text>
              <Text style={styles.teamNames}>
              Bambhaniya 11 (una)
              </Text>
              <View style={globalStyles.customFlexDirection}>
                <Text style={styles.lossingTeamInfo}>Lost by 43 runs</Text>
                <TouchableOpacity style={styles.rightArrow} onPress={() => setModalVisible(!modalVisible)}>
                  <AccordianDownArrow height={18} width={18} color="#ccc" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>


      <View style={[styles.lightBackgroundColor]}>
        <TouchableOpacity
          style={[
            styles.performanceSection,
            // styles.lightBackgroundColor,
            // {backgroundColor: item.id % 2 === 0 ? '#ccc' : '#fff'},
          ]}
          id="Royal 11 (Kesariya)"
          onPress={() => setTeamFiveExpanded(!teamFiveExpanded)}>
          <View
            style={[
              globalStyles.customFlexDirection,
              styles.bestPerformancetableData,
              teamFiveExpanded ? styles.borderClass : '',
            ]}>
            <Text style={[styles.tableLeftData]}>Royal 11 (Kesariya)</Text>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.scoreDetailsTitle,
              ]}>
              <Text style={styles.tableRightData}>2</Text>
              <Text style={[styles.tableRightData]}>1</Text>
              <Text style={styles.tableRightData}>1</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>0</Text>
              <Text style={styles.tableRightData}>2</Text>
              <Text style={[styles.tableRightData, styles.tableLastChild]}>
                -2,800
              </Text>
              <TouchableOpacity
                onPress={() => setTeamFiveExpanded(!teamFiveExpanded)} style={teamFiveExpanded ?  styles.trasformToUpSide : ""}>
                <AccordianDownArrow height={18} width={18} color={basicColor} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {teamFiveExpanded ? (
          <TouchableOpacity style={styles.scoreboardcontainer} onPress={() => setModalVisible(!modalVisible)}>
            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.teamScoreboard,
                styles.borderClass
              ]}>
              {/* <Text style={{color:darkColor}}>name</Text> */}
              <Text style={styles.matchDate}>17 Mar 23</Text>
              <Text style={styles.teamNames}>bambhaniya 11(una)</Text>
              <View style={globalStyles.customFlexDirection}>
                <Text style={styles.winnerTeamInfo}>Won by 6 wickets</Text>
                <TouchableOpacity style={styles.rightArrow} onPress={() => setModalVisible(!modalVisible)}>
                  <AccordianDownArrow height={18} width={18} color="#ccc" />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={[
                globalStyles.customFlexDirectionWithJustify,
                styles.teamScoreboard,
              ]}>
              <Text style={styles.matchDate}>19 Mar 23</Text>
              <Text style={styles.teamNames}>
              jay shree ram 11
              </Text>
              <View style={globalStyles.customFlexDirection}>
                <Text style={styles.lossingTeamInfo}>Lost by 57 runs</Text>
                <TouchableOpacity style={styles.rightArrow} onPress={() => setModalVisible(!modalVisible)}>
                  <AccordianDownArrow height={18} width={18} color="#ccc" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>

      </ScrollView>



      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <TouchableOpacity
              style={styles.cardbackgroundShadow}
              onPress={() => setModalVisible(!modalVisible)}></TouchableOpacity>

            <View style={styles.modalView}>
              <View style={styles.aboutSection}>
                <AboutIcon
                  width={35}
                  height={35}
                  color={waringModalIconColor}
                />
              </View>
              <Text style={styles.modalTitle}>Full Scorecard</Text>
              <Text style={[styles.modalPara]}>
              Do you want to view the full scorecard of this match?
              </Text>
              <Pressable style={[styles.button]} onPress={() => {setModalVisible(!modalVisible);navigate('/pastMatchDetailsSinglePage')}}>
                <Text style={styles.textStyle}>yes, i'm sure</Text>
              </Pressable>

              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalCancle}>cancle</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      

      {/* {data.map(item => (
        <>
          <TouchableOpacity
            style={[
              styles.performanceSection,
              {backgroundColor: item.id % 2 === 0 ? '#ccc' : '#fff'},
            ]}
            key={item.id}
            onPress={e => handleData(e, item.teamName)}>
            <View
              style={[
                globalStyles.customFlexDirection,
                styles.bestPerformancetableData,
              ]}>
              <Text style={[styles.tableLeftData]}>{item.teamName}</Text>
              <View
                style={[
                  globalStyles.customFlexDirection,
                  styles.scoreDetailsTitle,
                ]}>
                <Text style={styles.tableRightData}>{item.m}</Text>
                <Text style={[styles.tableRightData]}>{item.w}</Text>
                <Text style={styles.tableRightData}>{item.l}</Text>
                <Text style={styles.tableRightData}>{item.t}</Text>
                <Text style={styles.tableRightData}>{item.nr}</Text>
                <Text style={styles.tableRightData}>{item.pt}</Text>
                <Text style={[styles.tableRightData, styles.tableLastChild]}>
                  {item.nrr}
                </Text>
                <TouchableOpacity>
                  <AccordianDownArrow
                    height={18}
                    width={18}
                    color={basicColor}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  calculated: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: primaryColor,
    marginHorizontal: 10,
    textAlign: 'right',
    paddingVertical: 10,
  },
  tableTitle: {
    fontSize: 14,
    color: basicColor,
    fontFamily: 'Roboto-Medium',
    padding: 10,
    backgroundColor: primaryLightBackgroundColor,
  },
  bestPerformanceSection: {
    paddingHorizontal: 10,
    backgroundColor: tableHeadingBackgroundColor,
  },
  tableLeftHeading: {
    color: basicColor,
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    textAlign: 'left',
    flexGrow: 1,
    textTransform: 'capitalize',
    maxWidth: '30%',
    paddingVertical: 10,
  },

  tableLeftData: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    color: basicColor,
    textAlign: 'left',
    flexGrow: 1,
    textTransform: 'capitalize',
    maxWidth: '30%',
  },

  scoreDetailsTitle: {
    justifyContent: 'space-between',
    flexGrow: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
  tableRightHeading: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    textAlign: 'right',
    textTransform: 'uppercase',
  },

  tableLastChild: {
    color: primaryColor,
    textDecorationLine: 'underline',
  },
  performanceSection: {
    padding: 10,
  },

  tableRightData: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: basicColor,
    textAlign: 'right',
  },
  bestPerformancetableData:{
    paddingBottom: 4,
    
  },


  matchDate: {
    color: secondaryColor,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  teamNames: {
    color: secondaryColor,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    width: '35%',
    textTransform:'capitalize'
  },
  matchResult: {
    color: primaryColor,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  winnerTeamInfo:{
    color: primaryColor,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  lossingTeamInfo:{
    color: warningColor,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  rightArrow: {
    transform: [{rotate: '-90deg'}],
    marginLeft: 8,
  },
  teamScoreboard: {
    paddingBottom:10,
    paddingTop:8
  },
  
  lightBackgroundColor: {
    backgroundColor: lightBackgroundColor,
    padding:5
  },
  darkBackgroundColor: {
    backgroundColor: dropDownBackgroundColor,
    padding:5

  },
  borderClass: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  scoreboardcontainer:{
    paddingHorizontal:10
  },
  trasformToUpSide:{
    transform: [{rotate: '180deg'}]
  },

  // modal

  centeredView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center',
  },
  modalView: {
    margin: 35,
    paddingVertical: 35,
    paddingHorizontal: 15,
    backgroundColor: lightBackgroundColor,
    alignItems: 'center',
    shadowColor: basicColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 2,
    backgroundColor: waringModalIconColor,
  },

  textStyle: {
    color: lightColor,
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    fontSize: 13,
  },

  aboutSection: {
    backgroundColor: waringModalIconBackgroundColor,
    padding: 20,
    borderRadius: 50,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: darkColor,
  },
  modalPara: {
    marginVertical: 15,
    fontSize: 14,
    color: secondaryColor,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  modalCancle: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    fontSize: 13,
    textTransform: 'uppercase',
    color:grayButtonColor,
    marginTop: 15,
  },
  cardbackgroundShadow: {
    backgroundColor: basicColor,
    opacity: 0.7,
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
  },
});
