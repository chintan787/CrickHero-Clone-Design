import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';
import Location from '../../../images/Location';
import QRCode from '../../../images/QRCode';
import SearchIcon from '../../../images/SearchIcon';
import {globalStyles} from '../../Global.css';

export default function MyTeamsScreen() {
  const [searchVal, setSearchVal] = useState();

  return (
    <View style={styles.pageContainer}>
      {/* search bar */}
      <View style={styles.searchInput}>
        <View style={{padding: 5}}>
          <SearchIcon height={20} width={20} color="#73787C" />
        </View>

        <TextInput
          style={[globalStyles.inputWithoutborder]}
          onChangeText={setSearchVal}
          value={searchVal}
          placeholder="Quick Search"
          placeholderTextColor="#717880"
        />
      </View>

      {/* Team list */}

      <View>
        <View style={styles.team}>
          <View style={styles.profileImageSection}>
            <Image
              source={require('../../../images/topplayer2.jpg')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.taemInfoSection}>
            <View style={styles.teamNameContainer}>
              <Text style={styles.teamName}>Team One</Text>
                <QRCode iconColor="#14B492" />
            </View>

            <View style={styles.teamInfo}>
              <View style={styles.locationDetails}>
                <View style={styles.iconBackground}>
                  <Location />
                </View>
                <Text style={styles.infoText}>Location</Text>
              </View>

              <View style={styles.locationDetails}>
                <View style={styles.iconBackground}>
                  <Location />
                </View>
                <Text style={styles.infoText}>Caption Name</Text>
              </View>
            </View>
          </View>
        </View>

        {/* team 2 */}

        <View style={styles.team}>
          <View style={styles.profileImageSection}>
            <View style={styles.nameBadge}>
              <Text style={styles.teamNickName}>TA</Text>
            </View>
            {/* <Image
              source={require('../../../images/topplayer2.jpg')}
              style={styles.profileImage}
            /> */}
          </View>
          <View style={styles.taemInfoSection}>
            <View style={styles.teamNameContainer}>
              <Text style={styles.teamName}>Team Two</Text>
                <QRCode iconColor="#14B492" />
            </View>

            <View style={styles.teamInfo}>
              <View style={styles.locationDetails}>
                <View style={styles.iconBackground}>
                  <Location />
                </View>
                <Text style={styles.infoText}>Location</Text>
              </View>

              <View style={styles.locationDetails}>
                <View style={styles.iconBackground}>
                  <Location />
                </View>
                <Text style={styles.infoText}>Caption Name</Text>
              </View>
            </View>
          </View>
        </View>
        

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 0,
    marginVertical: 10,

    // borderWidth:1,
    // borderColor:'#ccc'
  },
  pageContainer: {
    paddingHorizontal: 10,
  },
  profileImageSection: {
    height: 70,
    width: 70,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  team: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:4
  },
  taemInfoSection: {
    marginLeft: 10,
    flexGrow: 1,
  },

  infoText: {
    color: '#717880',
    marginLeft: 4,
    fontSize:14,
    fontFamily:'Roboto-Regular'
  },
  locationDetails: {
    flexDirection: 'row',
    alignItems: 'center',

    marginRight: 15,
  },
  teamInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  iconBackground: {
    backgroundColor: '#ccc',
    borderRadius: 50,
    padding: 4,
  },
  teamName: {
    color: '#000',
    marginBottom: 4,
    fontSize:14,
    fontFamily:'Roboto-Regular'
  },
  teamNameContainer:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  nameBadge:{
    backgroundColor:'orange',
    height:'100%',
    width:'100%',
    flex:1,justifyContent:'center',
    borderRadius:50
  },
  teamNickName:{
    textAlign:'center',
    fontSize:35
  }
});
