import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigate } from 'react-router-native';
import BarChartIcon from '../../../images/BarChartIcon';
import RightIcon from '../../../images/RightIcon';
import { globalStyles , primaryLightBackgroundColor} from '../../Global.css';


export default function InfoTabScreen() {
  const navigate = useNavigate();
  return (
    <View style={styles.pageContainer}>
      <ScrollView>
        <Text style={[styles.pageHeading, styles.firstHeading,globalStyles.pageHeading]}>Insights</Text>

        <View style={styles.insightBar}>
          <Text style={globalStyles.insightHeading}>What went right or wrong?</Text>
          <TouchableOpacity style={styles.insightBarButton}>
            <BarChartIcon />
            <Text style={styles.buttonText}>Insights</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.pageHeading,globalStyles.pageHeading]}>Squads</Text>

        <View style={styles.teams}>
          <TouchableOpacity style={styles.teamNameSection} onPress={() => navigate('/teamPlayersList')}>
          <Image
              source={require('../../../images/Team1.png')}
              style={styles.teamLogo}
            /> 
            <Text style={[styles.teamName,globalStyles.teamName]}>Sadda adda 11(una)</Text>
            <TouchableOpacity onPress={() => navigate('/teamPlayersList')}><RightIcon height={20} width={20} color="#969B9F" /></TouchableOpacity>
           </TouchableOpacity>

          <TouchableOpacity style={styles.teamNameSection} onPress={() => navigate('/teamPlayersList')}>
             <Image
              source={require('../../../images/Team1.png')}
              style={styles.teamLogo}
            /> 
            <Text style={[styles.teamName,globalStyles.teamName]}>Sadda adda 11(una)</Text>
            <TouchableOpacity><RightIcon height={20} width={20} color="#969B9F" /></TouchableOpacity>

           </TouchableOpacity>
        </View>

        <Text style={[styles.pageHeading,globalStyles.pageHeading]}>Info</Text>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Tournament</Text>
            <Text style={styles.informationHighLight}>
              Cricket tournament (Delwada)
            </Text>
            <TouchableOpacity><RightIcon height={20} width={20} color="#969B9F" /></TouchableOpacity>

            </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Round</Text>
            <Text style={styles.information}>League Matches</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Match type</Text>
            <Text style={styles.information}>Limited Overs</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Overs</Text>
            <Text style={styles.information}>10</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Date & time</Text>
            <Text style={styles.information}>
              12-MAR-23 04:48
              <Text style={{textTransform: 'uppercase'}}>pm</Text>
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Venue</Text>
            <Text
              style={[styles.informationHighLight, {textTransform: 'none'}]}>
              Shayam sundar Cricket Ground (Delwada),Una (Gujarat)
            </Text>
            <TouchableOpacity><RightIcon height={20} width={20} color="#969B9F" /></TouchableOpacity>

          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Toss</Text>
            <Text style={[styles.information, {textTransform: 'none'}]}>
              Sadda adda 11(una) opt to bat
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Ball Type</Text>
            <Text style={[styles.information, {textTransform: 'uppercase'}]}>
              Tennis
            </Text>
          </View>


          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>match id</Text>
            <Text style={[styles.information]}>6091244</Text>
          </View>
        </View>

        <Text style={[styles.pageHeading,globalStyles.pageHeading]}>Match notes</Text>
        <Text style={styles.subHeading}>Sada adda 11 (una)</Text>

        <View style={styles.winningTeamInfoSection}>
          <Text style={styles.matchDescription}>Match started at 12 Mar,04:48 PM.</Text>
          <Text style={styles.matchDescription}>Sada adda 11 (una):50 runs in 5.2 overs, Extras 4</Text>
          <Text style={styles.matchDescription}>Sada adda 11 (una):102 runs in 9.1 overs, c 6</Text>
          <Text style={styles.matchDescription}>Innings Break: Sada adda 11 (una)-116/7 in 10 overs(Nil 4,vipul Bambhaniya 30)</Text>
          <Text style={styles.matchDescription}>Innings Ended at 12 Mar,05:33 PM</Text>
        </View>

        <Text style={styles.subHeading}>Bhingran 11</Text>
        <View style={styles.lossingTeamInfoSection}>
          <Text style={styles.matchDescription}>Innings Started at 12 Mar,05:38 PM</Text>
          <Text style={styles.matchDescription}>Bhingran 11: 50 runs in 7.3 overs, Extras 12</Text>
          <Text style={styles.matchDescription}>End of Day: Bhingran 11 - 52/10 in 8.4 overs(Mr._Hitubha0)</Text>
          <Text style={styles.matchDescription}>Match ended at 12 Mar,06:15 PM.</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flexGrow: 1,
  },
  pageHeading: {
    paddingHorizontal: 10,
  },
  firstHeading: {
    marginTop: 10,
  },

  insightBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: primaryLightBackgroundColor,
    padding: 10,
    borderRadius: 4,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  
  insightBarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#14B492',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily:'Roboto-Medium',
    fontSize: 12,
    marginLeft: 10,
  },
  teams: {
    marginVertical: 15,
    // paddingHorizontal:0
  },
  teamNameSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 2,

    // borderWidth:1
  },
  teamLogo: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  teamName: {

    marginLeft: 15,
  },

  infoSection: {
    marginVertical: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  infoTitle: {
    color: '#737780',
    fontSize: 14,
  fontFamily:'Roboto-Regular',
    textTransform: 'capitalize',
    width: '25%',
  },
  information: {
    color: '#2D363B',
    marginLeft: 15,
    flexGrow: 1,
    textTransform: 'capitalize',
    maxWidth: '70%',
    fontFamily:'Roboto-Regular',

  },

  informationHighLight: {
    color: '#23AC90',
    marginLeft: 15,
    flexGrow: 1,
    textTransform: 'uppercase',
    maxWidth: '70%',
    fontFamily:'Roboto-Medium'
  },
  subHeading: {
    backgroundColor: '#EEEEEE',
    color: '#000',
    paddingHorizontal: 14,
    paddingVertical:10,
    fontSize: 15,
    fontFamily:'Roboto-Medium'
    
  },
  matchDescription:{
    backgroundColor:'#fff',
    color:'#434E54',
    paddingHorizontal: 14,
    paddingVertical:10,
    fontSize:13,
    fontFamily:'Roboto-Medium'
  },
  lossingTeamInfoSection:{
    marginBottom:10
  }
});
