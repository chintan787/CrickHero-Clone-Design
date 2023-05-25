import React ,{useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions
} from 'react-native';
import { useNavigate } from 'react-router-native';
import { globalStyles } from '../../../Global.css';

const HEADER_MAX_HEIGHT = 280;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const windowHeight = Dimensions.get('window').height;

export default function PastMatch() {
  const navigation = useNavigate();
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={[styles.pageContainer,]}>
      <Animated.ScrollView
      // contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT}}
      scrollEventThrottle={20}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: true},
      )}
      >
        <View style={[styles.cardContainer, styles.shadowProp,{marginTop:15}]}>
          <TouchableOpacity onPress={() => navigation('/pastMatchDetailsSinglePage')}>
            <View style={styles.matchInfoSection}>
              <Text style={styles.matchInfoText}>
                Shyam sundar Cricket Ground (Delwada), Una(Gujarat) | 12-Mar-23
                | 10 Ov.
              </Text>
              <Text style={globalStyles.customBadge}>result</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.teamInfo}>
              <Text style={styles.WinningteamName}>sada adda 11 (una)</Text>
              <Text style={styles.teamScore}>
                116/7 <Text style={styles.teamOver}>(10.0 Ov)</Text>
              </Text>
            </View>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>Bhingran 11 (una)</Text>
              <Text style={styles.teamScore}>
                52/10 <Text style={styles.teamOver}>(8.4 Ov)</Text>
              </Text>
            </View>
            <View style={styles.hr}></View>

            <Text style={styles.winner}>Sada adda 11 (una) won by 64 runs</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.cardContainer, styles.shadowProp]}>
          <TouchableOpacity>
            <View style={styles.matchInfoSection}>
              <Text style={styles.matchInfoText}>
                Shyam sundar Cricket Ground (Delwada), Una(Gujarat) | 12-Mar-23
                | 10 Ov.
              </Text>
              <Text style={globalStyles.customBadge}>result</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.teamInfo}>
              <Text style={styles.WinningteamName}>sada adda 11 (una)</Text>
              <Text style={styles.teamScore}>
                116/7 <Text style={styles.teamOver}>(10.0 Ov)</Text>
              </Text>
            </View>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>Bhingran 11 (una)</Text>
              <Text style={styles.teamScore}>
                52/10 <Text style={styles.teamOver}>(8.4 Ov)</Text>
              </Text>
            </View>
            <View style={styles.hr}></View>

            <Text style={styles.winner}>Sada adda 11 (una) won by 64 runs</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.cardContainer, styles.shadowProp]}>
          <TouchableOpacity>
            <View style={styles.matchInfoSection}>
              <Text style={styles.matchInfoText}>
                Shyam sundar Cricket Ground (Delwada), Una(Gujarat) | 12-Mar-23
                | 10 Ov.
              </Text>
              <Text style={globalStyles.customBadge}>result</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.teamInfo}>
              <Text style={styles.WinningteamName}>sada adda 11 (una)</Text>
              <Text style={styles.teamScore}>
                116/7 <Text style={styles.teamOver}>(10.0 Ov)</Text>
              </Text>
            </View>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>Bhingran 11 (una)</Text>
              <Text style={styles.teamScore}>
                52/10 <Text style={styles.teamOver}>(8.4 Ov)</Text>
              </Text>
            </View>
            <View style={styles.hr}></View>

            <Text style={styles.winner}>Sada adda 11 (una) won by 64 runs</Text>
          </TouchableOpacity>
        </View>


        <View style={[styles.cardContainer, styles.shadowProp]}>
          <TouchableOpacity>
            <View style={styles.matchInfoSection}>
              <Text style={styles.matchInfoText}>
                Shyam sundar Cricket Ground (Delwada), Una(Gujarat) | 12-Mar-23
                | 10 Ov.
              </Text>
              <Text style={globalStyles.customBadge}>result</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.teamInfo}>
              <Text style={styles.WinningteamName}>sada adda 11 (una)</Text>
              <Text style={styles.teamScore}>
                116/7 <Text style={styles.teamOver}>(10.0 Ov)</Text>
              </Text>
            </View>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>Bhingran 11 (una)</Text>
              <Text style={styles.teamScore}>
                52/10 <Text style={styles.teamOver}>(8.4 Ov)</Text>
              </Text>
            </View>
            <View style={styles.hr}></View>

            <Text style={styles.winner}>Sada adda 11 (una) won by 64 runs</Text>
          </TouchableOpacity>
        </View>


        <View style={[styles.cardContainer, styles.shadowProp]}>
          <TouchableOpacity>
            <View style={styles.matchInfoSection}>
              <Text style={styles.matchInfoText}>
                Shyam sundar Cricket Ground (Delwada), Una(Gujarat) | 12-Mar-23
                | 10 Ov.
              </Text>
              <Text style={globalStyles.customBadge}>result</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.teamInfo}>
              <Text style={styles.WinningteamName}>sada adda 11 (una)</Text>
              <Text style={styles.teamScore}>
                116/7 <Text style={styles.teamOver}>(10.0 Ov)</Text>
              </Text>
            </View>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>Bhingran 11 (una)</Text>
              <Text style={styles.teamScore}>
                52/10 <Text style={styles.teamOver}>(8.4 Ov)</Text>
              </Text>
            </View>
            <View style={styles.hr}></View>

            <Text style={styles.winner}>Sada adda 11 (una) won by 64 runs</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.cardContainer, styles.shadowProp]}>
          <TouchableOpacity>
            <View style={styles.matchInfoSection}>
              <Text style={styles.matchInfoText}>
                Shyam sundar Cricket Ground (Delwada), Una(Gujarat) | 12-Mar-23
                | 10 Ov.
              </Text>
              <Text style={globalStyles.customBadge}>result</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.teamInfo}>
              <Text style={styles.WinningteamName}>sada adda 11 (una)</Text>
              <Text style={styles.teamScore}>
                116/7 <Text style={styles.teamOver}>(10.0 Ov)</Text>
              </Text>
            </View>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>Bhingran 11 (una)</Text>
              <Text style={styles.teamScore}>
                52/10 <Text style={styles.teamOver}>(8.4 Ov)</Text>
              </Text>
            </View>
            <View style={styles.hr}></View>

            <Text style={styles.winner}>Sada adda 11 (una) won by 64 runs</Text>
          </TouchableOpacity>
        </View>

      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 10,
    // flexGrow:1,
    // backgroundColor:'blue',
    // overflow:'scroll'
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 2,
    marginVertical: 5,
  
    // marginHorizontal:5,
    padding: 10,
    // borderWidth:1,
    // borderColor:"#ccc",
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  // customBadge: {
  //   backgroundColor: '#14212A',
  //   color: '#fff',
  //   paddingVertical: 3,
  //   paddingHorizontal: 8,
  //   borderRadius: 15,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   textTransform: 'uppercase',
  // },
  matchInfoSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginBottom: 10,
  },
  matchInfoText: {
    color: '#717880',
    width: '80%',
    textTransform: 'capitalize',
    fontSize:14,
    fontFamily:'Roboto-Regular'
  },
  hr: {
    height: 2,
    width: '100%',
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  teamInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  WinningteamName: {
    color: '#14B492',
    fontSize: 15,
    fontFamily:'Roboto-Bold'
  },
  teamName: {
    color: '#717880',
    fontSize: 15,
    fontFamily:'Roboto-Bold'

  },
  teamScore: {
    color: '#000',
    fontSize: 16,
    fontFamily:'Roboto-Bold'
  },
  teamOver: {
    // color:"#ccc",
    fontSize: 11,
  },
  winner: {
    fontSize: 14,
    color: '#000',
    fontFamily:'Roboto-Medium'
  },
});
