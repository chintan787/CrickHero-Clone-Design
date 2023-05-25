import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {globalStyles} from '../Global.css';
import MessageBar from '../MessageBar';
import {useNavigate} from 'react-router-native';


export default function TournamentsScreen() {
  const navigate = useNavigate();

    const [follow , setFollowing] = useState('follow');

    const handleButtonTitle = () =>{
        if(follow === "follow")
        {
            setFollowing("following");
        }
        else{
            setFollowing("follow")
        }
    }


  return (
    <View style={{flexGrow: 1}}>
      <MessageBar
        message="Want to start a match?"
        messageButtonText="start a match"
      />

      <View style={styles.pageContainer}>
        <Text style={styles.tournamentLocationHeading}>
          All Tournaments in{' '}
          <Text style={globalStyles.linkText}>Una (Gujarat)</Text>
        </Text>
      </View>

      <ScrollView style={styles.pageContainer}>
        {/* list */}
        <View style={[styles.cardContainer, styles.shadowProp]}>
            <TouchableOpacity onPress={() => navigate('/dashboardTournament')}>
          <ImageBackground
            style={styles.coverImage}
            source={require('../../images/article174347.jpg')}> 
            <View style={styles.textView}>
              <Text style={styles.imageText}>Cricket tournamnet (Delwada)</Text>
            </View>
            <View style={styles.badge}>
              <Text style={globalStyles.liveBadges}>ongoing</Text>
            </View>
          </ImageBackground>

          <View style={styles.tournamentDetailSection}>
            <View>
              <Text style={styles.tournamentLocationInfo}>
                04 Mar, 2023 to 19 Mar, 2023
              </Text>
              <Text style={styles.tournamentLocationInfo}>Una (Gujarat)</Text>
            </View>
            <TouchableOpacity id="1"   onPress={handleButtonTitle} >
              <Text style={follow === "follow" ? globalStyles.tournamentButtonwithFieldColor : globalStyles.tournamentButtonwithBorderColor}>
                {follow}
              </Text>
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.cardContainer, styles.shadowProp]}>
           <ImageBackground
            style={styles.coverImage}
            source={require('../../images/article174347.jpg')}>
            <View style={styles.textView}>
              <Text style={styles.imageText}>Cricket tournamnet (Delwada)</Text>
            </View>
            <View style={styles.badge}>
              <Text style={globalStyles.liveBadges}>ongoing</Text>
            </View>
          </ImageBackground>

          <View style={styles.tournamentDetailSection}>
            <View>
              <Text style={styles.tournamentLocationInfo}>
                04 Mar, 2023 to 19 Mar, 2023
              </Text>
              <Text style={styles.tournamentLocationInfo}>Una (Gujarat)</Text>
            </View>
            <TouchableOpacity>
              <Text style={globalStyles.tournamentButtonwithFieldColor}>
                follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.cardContainer, styles.shadowProp]}>
           <ImageBackground
            style={styles.coverImage}
            source={require('../../images/article174347.jpg')}> 
            <View style={styles.textView}>
              <Text style={styles.imageText}>Cricket tournamnet (Delwada)</Text>
            </View>
            <View style={styles.badge}>
              <Text style={globalStyles.liveBadges}>ongoing</Text>
            </View>
          </ImageBackground>

          <View style={styles.tournamentDetailSection}>
            <View>
              <Text style={styles.tournamentLocationInfo}>
                04 Mar, 2023 to 19 Mar, 2023
              </Text>
              <Text style={styles.tournamentLocationInfo}>Una (Gujarat)</Text>
            </View>
            <TouchableOpacity>
              <Text style={globalStyles.tournamentButtonwithFieldColor}>
                follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.cardContainer, styles.shadowProp]}>
           <ImageBackground
            style={styles.coverImage}
            source={require('../../images/article174347.jpg')}>
            <View style={styles.textView}>
              <Text style={styles.imageText}>Cricket tournamnet (Delwada)</Text>
            </View>
            <View style={styles.badge}>
              <Text style={globalStyles.liveBadges}>ongoing</Text>
            </View>
          </ImageBackground>

          <View style={styles.tournamentDetailSection}>
            <View>
              <Text style={styles.tournamentLocationInfo}>
                04 Mar, 2023 to 19 Mar, 2023
              </Text>
              <Text style={styles.tournamentLocationInfo}>Una (Gujarat)</Text>
            </View>
            <TouchableOpacity>
              <Text style={globalStyles.tournamentButtonwithFieldColor}>
                follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: 100}}></View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#EFEFEF',
  },
  tournamentLocationHeading: {
    color: '#000',
    marginVertical: 5,
    fontWeight:'600',
    fontSize:14,
    fontFamily:'Roboto-Medium'
  },
  tournamentLocationInfo: {
    color: '#717880',
    marginBottom: 5,
    fontSize:14,
    fontFamily:'Roboto-Regular'
  },
  cardContainer: {
    backgroundColor: '#fff',
    // overflow: 'hidden',
    width: '100%',
    borderRadius: 2,
    marginVertical: 5,
  },
  shadowProp: {
    shadowColor: '#D3D3D3',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  coverImage: {
    width: '100%',
    height: 150,
  },

  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    bottom: 5,
  },
  badge: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: 10,
  },
  imageText: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily:'Roboto-Bold'
  },

  tournamentDetailSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 8,
    justifyContent: 'space-between',
  },
});
