import React, {useState, useRef} from 'react';
import MenuIcon from '../images/MenuIcon';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import QRCode from '../images/QRCode';
import GraphIcon from '../images/GraphIcon';
import Header from './Header';
import {basicColor,borderPrimaryColor, darkBackgroundColor, darkColor, drawerIconHeight, drawerIconWidth, globalStyles, iconBasicColor, lightBackgroundColor, lightColor, primaryBackgroundColor, primaryColor, secondaryBackgroundColor, statusbarColor} from './Global.css';
import TournamentIcon from '../images/TournamentIcon';
import TossIcon from '../images/TossIcon';
import LookingIcon from '../images/LookingIcon';
import GoLiveIcon from '../images/GoLiveIcon';
import PremiumIcon from '../images/PremiumIcon';
import TrophyIcon from '../images/TrophyIcon';
import MatchesIcon from '../images/MatchesIcon';
import TeamIcon from '../images/TeamIcon';
import BarChartIcon from '../images/BarChartIcon';
import PerfomanceArrowIcon from '../images/PerfomanceArrowIcon';
import FindFriendIcon from '../images/FindFriendIcon';
import BookingIcon from '../images/BookingIcon';
import AcademyIcon from '../images/AcademyIcon';
import AssociationIcon from '../images/AssociationIcon';
import CricketClubIcon from '../images/CricketClubIcon';
import NewsIcon from '../images/NewsIcon';
import HeadIcon from '../images/HeadIcon';
import ShareIcon from '../images/ShareIcon';
import DocumentsIcon from '../images/DocumentsIcon';
import FollowUsIcon from '../images/FollowUsIcon';
import LanguageIcon from '../images/LanguageIcon';
import ContactUSIcon from '../images/ContactUSIcon';
import RateUsIcon from '../images/RateUsIcon';
import RightIcon from '../images/RightIcon';
import { secondaryColor } from './Global.css';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Drawer() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const openCloseDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <View style={globalStyles.drawerBackground}>
        <StatusBar backgroundColor={statusbarColor} />
        {openDrawer === false ? (
          <Header
            openCloseDrawer={openCloseDrawer}
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
          />
        ) : (
          ''
        )}

        {openDrawer ? (
          <ScrollView style={styles.scrollView}>
            <View style={styles.drawerContent}>
              <TouchableOpacity
                style={styles.cardbackgroundShadow}
                onPress={openCloseDrawer}
                // onPress={() => setModalVisible(!modalVisible)}
              ></TouchableOpacity>

              <View style={[styles.drawerContainer]}>
                {/* profile */}
                <View style={styles.profileSection}>
                  <Image
                    style={styles.userProfile}
                    source={require('../images/user_profile.png')}
                  />
                  <View style={[styles.userData]}>
                    <Text style={styles.username}>User Name</Text>
                    <Text style={styles.userInfo}>9874561231</Text>
                    <Text style={styles.userInfo}>
                      nehaj.strokeinfotech@gmail.com
                    </Text>
                    <Text style={styles.badge}>Free user</Text>
                  </View>
                  <View style={[styles.verifyProfile]}>
                    <QRCode iconColor="#fff" />
                    <TouchableOpacity>
                      <Text style={styles.verifyText}>Verify</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* upgrade */}
                <View style={styles.upgradeSection}>
                  <GraphIcon height={drawerIconHeight} width={drawerIconWidth} color="#fff" />
                  <Text style={styles.upgradeText}>Upgrade To PRO</Text>
                  <Text style={globalStyles.proBadge}>Pro</Text>
                </View>

                {/* awards */}
                <View style={styles.awardsTitle}>
                  <Image
                    style={styles.awardsLogo}
                    source={require('../images/award-logo.png')}
                  />
                  <Text style={styles.awardsText}>CricHeroes Awards</Text>
                </View>

                {/* Menu List */}

                <View style={styles.menuList}>
                  <View style={styles.menuItem}>
                    <TournamentIcon height={drawerIconHeight} width={drawerIconWidth} color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>Add a tournament /</Text>
                    <Text style={globalStyles.freeBadge}>Free</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <TossIcon height={drawerIconHeight} width={drawerIconWidth} color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>start a match</Text>
                    <Text style={globalStyles.freeBadge}>Free</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <LookingIcon height={drawerIconHeight} width={drawerIconWidth} color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>looking</Text>
                  </View>

                  <View style={[styles.menuItem, styles.menuItemBorder]}>
                    <GoLiveIcon height={drawerIconHeight} width={drawerIconWidth} color={iconBasicColor}  />
                    <Text style={styles.menuItemTitle}>Go live</Text>
                  </View>

                  <View style={[styles.menuItem, styles.menuItemBorder]}>
                    <GraphIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={[styles.menuItemTitle]}>Leaderboards</Text>
                    <RightIcon height={15} width={15} color={secondaryColor} />
                  </View>

                  <View style={[styles.menuItem, styles.menuItemBorder]}>
                    <PremiumIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>Premium features</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <TrophyIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>My Tournaments</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <MatchesIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>My matches</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <TeamIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>My teams</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <GraphIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor}  />
                    <Text style={styles.menuItemTitle}>My stats</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <PerfomanceArrowIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />

                    <Text style={styles.menuItemTitle}>
                      My performance features
                    </Text>
                  </View>

                  <View style={[styles.menuItem, styles.menuItemBorder]}>
                    <FindFriendIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />

                    <Text style={styles.menuItemTitle}>find friends</Text>
                  </View>

                  <View style={[styles.menuItem]}>
                    <BookingIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>
                      booking manager app{' '}
                    </Text>
                  </View>

                  <View style={[styles.menuItem, styles.menuItemBorder]}>
                    <AcademyIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>academy App</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <AssociationIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />

                    <Text style={styles.menuItemTitle}>
                      cricket associations
                    </Text>
                  </View>

                  <View style={[styles.menuItem, styles.menuItemBorder]}>
                    <CricketClubIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>cricket clubs</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <NewsIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor}  />
                    <Text style={styles.menuItemTitle}>News</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <HeadIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>Quizzes</Text>
                  </View>

                  <View style={[styles.menuItem, styles.menuItemBorder]}>
                    <GraphIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>polls</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <ShareIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor}  />
                    <Text style={styles.menuItemTitle}>share the app</Text>
                  </View>

                  <View style={[styles.menuItem, styles.menuItemBorder]}>
                    <RateUsIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>rate the app</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <ContactUSIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>contact us</Text>
                  </View>

                  <View style={[styles.menuItem, styles.menuItemBorder]}>
                    <LanguageIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>change language</Text>
                    <Text style={globalStyles.liveBadges}>New</Text>
                  </View>

                  <View style={styles.menuItem}>
                    <FollowUsIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor}  />
                    <Text style={styles.menuItemTitle}>follow us</Text>
                    <RightIcon height={15} width={15} color={secondaryColor} />

                  </View>

                  <View style={styles.menuItem}>
                    <DocumentsIcon height={drawerIconHeight} width={drawerIconWidth}  color={iconBasicColor} />
                    <Text style={styles.menuItemTitle}>others/Help</Text>
                    <RightIcon height={15} width={15} color={secondaryColor} />

                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        ) : (
          ''
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogoSection: {
    flexGrow: 1,
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeWithBorder: {
    borderColor: primaryBackgroundColor,
    borderWidth: 1,
    borderRadius: 5,
    color: primaryColor,
    paddingHorizontal: 4,
    paddingVertical: 2,
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    marginLeft: 6,
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    backgroundColor: lightBackgroundColor,
    width: '80%',
    borderWidth: 1,
    overflow: 'scroll',
  },
  cardbackgroundShadow: {
    backgroundColor:darkBackgroundColor,
    opacity: 0.8,
    width: windowWidth,
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  drawerContent: {
    flex: 1,
    position: 'relative',
    zIndex: 11111,
    minHeight: '100%',
    flexGrow: 1,
    overflow: 'scroll',
  },
  userProfile: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  username: {
    color: lightColor,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  userInfo: {
    color: lightColor,
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  badge: {
    color: lightColor,
    // padding:2,
    borderWidth: 1,
    borderColor: lightColor,
    maxWidth: 70,
    borderRadius: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Roboto-Regular',
  },
  profileSection: {
    backgroundColor: darkColor,
    flexDirection: 'row',
    padding: 15,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: lightColor,
  },
  userData: {
    maxWidth: '64%',
  },
  verifyProfile: {
    alignSelf: 'flex-start',
  },
  verifyText: {
    color: lightColor,
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  upgradeSection: {
    backgroundColor: darkColor,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  upgradeText: {
    color: lightColor,
    fontSize: 14,
    paddingLeft: 10,
    alignSelf: 'flex-start',
    flexGrow: 1,
    fontFamily: 'Roboto-Medium',
  },
  awardsTitle: {
    backgroundColor: secondaryBackgroundColor,
    padding: 15,
    flexDirection: 'row',
  },
  awardsText: {
    color: lightColor,
    paddingLeft: 15,
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  awardsLogo: {
    height: 22,
    width: 22,
  },
  menuItemTitle: {
    color:basicColor,
    paddingLeft: 10,
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    textTransform: 'capitalize',
    flexGrow: 1,
  },
  menuList: {
    flexGrow: 1,
  },
  menuItem: {
    padding: 15,
    flexDirection: 'row',
  },

  menuItemBorder: {
    borderBottomColor:borderPrimaryColor,
    borderBottomWidth: 1,
  },
});
