import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import BottomMenu from '../components/BottomMenu';
import Drawer from '../components/Drawer';
import {BottomSheet} from 'react-native-btr';

// import Modals from '../components/Modals';
import Calender from '../images/Calender';
// import CricketIcon from '../images/CricketIcon';
import EmojiIconOne from '../images/EmojiIconOne';
import EmojiIconTwo from '../images/EmojiIconTwo';
import EmojiIconThree from '../images/EmojiIconThree';
// import FeedIcon from '../images/FeedIcon';
import HeadIcon from '../images/HeadIcon';
// import MarketIcon from '../images/MarketIcon';
// import MoreIcon from '../images/MoreIcon';
// import WatchIcon from '../images/WatchIcon';
import LikeIcon from '../images/LikeIcon';
import ShareIcon from '../images/ShareIcon';
import CommentIcon from '../images/CommentIcon';
import AboutIcon from '../images/AboutIcon';
import {useNavigate} from 'react-router-native';
import {
  darkColor,
  globalStyles,
  lightBackgroundColor,
  lightColor,
} from '../components/Global.css';
// import DrawerComponent from '../components/DrawerComponent'
// const windowHeight = Dimensions.get('window').height;

export default function Dashboard() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(visible => !visible);
  };

  return (
    <View style={styles.dashboard}>
      <Drawer />

      <ScrollView style={[styles.scrollView]}>
        <View style={{flexGrow: 1}}>
          {/* status section */}
          <View style={styles.statusSection}>
            <View style={{marginRight: 10}}>
              <View style={styles.statusIcons}>
                <View style={styles.statusIcon}>
                  <Calender />
                </View>
              </View>
              <Text style={styles.hastags}>#onthisday</Text>
            </View>

            <View style={{marginRight: 10}}>
              <View style={styles.statusIcons}>
                <View style={styles.statusIcon}>
                  <HeadIcon height={40} width={40} color="#000" />
                </View>
              </View>
              <Text style={styles.hastags}>#cricquiz</Text>
            </View>
          </View>

          {/* post data */}

          <View style={styles.feedSection}>
            <Text style={styles.feedTitle}>What do you think?</Text>
            <View>
              <Image
                style={styles.postImage}
                source={require('../images/article174347.jpg')}
              />
            </View>
            <View style={styles.feedTimeInfo}>
              <Text style={styles.date}>07-03-2023 06:00 PM</Text>
              <Text style={styles.comment}>1 comments</Text>
            </View>
            <View style={styles.reactionSection}>
              <EmojiIconOne />
              <EmojiIconTwo />
              <EmojiIconThree />
              <Text style={styles.reactions}>7 reactions</Text>
            </View>

            <View style={styles.likeCommentSection}>
              <View style={styles.likeCommentItems}>
                <LikeIcon />
                <Text style={styles.likeCommentText}>React</Text>
              </View>
              <View style={styles.likeCommentItems}>
                <CommentIcon />
                <Text style={styles.likeCommentText}>comments</Text>
              </View>

              <View style={styles.likeCommentItems}>
                <ShareIcon height={15} width={14} color="#000" />
                <Text style={styles.likeCommentText}>share</Text>
              </View>
            </View>
          </View>

          {/* comment Suggestion */}
          <ScrollView horizontal={true}>
            <View style={styles.commentSuggestions}>
              <Text style={styles.commentText}>Congratualtions!</Text>
              <Text style={styles.commentText}>Amazing!</Text>
              <Text style={styles.commentText}>Well Bowled!</Text>
              <Text style={styles.commentText}>Kepp going</Text>
            </View>
          </ScrollView>

          {/* post data 2 */}
          <View style={styles.feedSection}>
            <Text style={styles.feedTitle}>What do you think?</Text>
            <View>
              <Image
                style={styles.postImage}
                // source={require('../images/hqdefault.jpg')}
                source={require('../images/cricheroes_fb_cover.png')}
              />
            </View>
            {/* <Image source={require('../images/article174341.jpg')} /> */}
            <View style={styles.feedTimeInfo}>
              <Text style={styles.date}>07-03-2023 06:00 PM</Text>
              <Text style={styles.comment}>1 comments</Text>
            </View>
            <View style={styles.reactionSection}>
              <EmojiIconOne />
              <EmojiIconTwo />
              <EmojiIconThree />
              <Text style={styles.reactions}>7 reactions</Text>
            </View>

            <View style={styles.likeCommentSection}>
              <View style={styles.likeCommentItems}>
                <LikeIcon />
                <Text style={styles.likeCommentText}>React</Text>
              </View>
              <View style={styles.likeCommentItems}>
                <CommentIcon />
                <Text style={styles.likeCommentText}>comments</Text>
              </View>

              <View style={styles.likeCommentItems}>
                <ShareIcon height={15} width={14} color="#000" />
                <Text style={styles.likeCommentText}>share</Text>
              </View>
            </View>
          </View>

          {/* shortcuts */}
          <View style={styles.shortcuts}>
            <View style={styles.shortcutSection}>
              <Text style={globalStyles.headingH4}>shortcuts</Text>
              <TouchableOpacity>
                <Text style={globalStyles.coloredLinkText}>Change</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              <View style={[styles.commentSuggestions, styles.shortcutsItems]}>
                <Text style={[styles.shortcutText]}>create team!</Text>
                <Text style={styles.shortcutText}>start a match!</Text>
                <Text style={styles.shortcutText}> looking</Text>
                <Text style={styles.shortcutText}>my status </Text>
              </View>
            </ScrollView>
          </View>

          {/* post data 3 */}
          <View style={styles.feedSection}>
            <Text style={styles.feedTitle}>What do you think?</Text>
            <View>
              <Image
                style={styles.postImage}
                // source={require('../images/hqdefault.jpg')}
                source={require('../images/cricheroes_fb_cover.png')}
              />
            </View>
            {/* <Image source={require('../images/article174341.jpg')} /> */}
            <View style={styles.feedTimeInfo}>
              <Text style={styles.date}>07-03-2023 06:00 PM</Text>
              <Text style={styles.comment}>1 comments</Text>
            </View>
            <View style={styles.reactionSection}>
              <EmojiIconOne />
              <EmojiIconTwo />
              <EmojiIconThree />
              <Text style={styles.reactions}>7 reactions</Text>
            </View>

            <View style={styles.likeCommentSection}>
              <View style={styles.likeCommentItems}>
                <LikeIcon />
                <Text style={styles.likeCommentText}>React</Text>
              </View>
              <View style={styles.likeCommentItems}>
                <CommentIcon />
                <Text style={styles.likeCommentText}>comments</Text>
              </View>

              <View style={styles.likeCommentItems}>
                <ShareIcon height={15} width={14} color="#000" />
                <Text style={styles.likeCommentText}>share</Text>
              </View>
            </View>
          </View>

          {/* photo gallery */}
          <View style={styles.photogallery}>
            <View style={styles.photoGridHeaderSection}>
              <Text style={styles.photoGridTitle}>Daily top performers</Text>
              <AboutIcon width={22} height={20} color={darkColor} />
            </View>

            <View style={styles.allImages}>
              <View>
                {/* <Text style={styles.rankBadge}>1 <Text style={{fontSize:10,marginBottom:10,paddingBottom:10,backgroundColor:'red'}}>st</Text></Text> */}

                <Image
                  source={require('../images/topplayer1.jpg')}
                  style={styles.playerImage}
                />
              </View>
              <Image
                source={require('../images/topplayer2.jpg')}
                style={styles.playerImage}
              />
              <Image
                source={require('../images/topplayer3.jpg')}
                style={styles.playerImage}
              />
              <Image
                source={require('../images/topplayer4.jpg')}
                style={styles.playerImage}
              />
              <Image
                source={require('../images/topplayer1.jpg')}
                style={styles.playerImage}
              />
              <Image
                source={require('../images/topplayer2.jpg')}
                style={styles.playerImage}
              />
              <Image
                source={require('../images/topplayer3.jpg')}
                style={styles.playerImage}
              />
              <Image
                source={require('../images/topplayer4.jpg')}
                style={styles.playerImage}
              />
              <Image
                source={require('../images/topplayer2.jpg')}
                style={styles.playerImage}
              />
            </View>

            <View style={styles.mobilebuttonContainer}>
              <TouchableOpacity onPress={() => navigate('/dashboard')}>
                <Text style={globalStyles.primaryButtonWithFixedWidth}>
                  View leaderboard
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* <BottomSheet
          visible={visible}
          onBackButtonPress={toggle}
          onBackdropPress={toggle}>
          <View style={styles.scrollBar}></View>
          <View style={styles.card}>
            <Text style={{color: darkColor}}>Set Your PIN</Text>
          </View>
        </BottomSheet> */}
      </ScrollView>

      {/* <BottomSheet
          visible={visible}
          onBackButtonPress={toggle}
          onBackdropPress={toggle}>
          <View style={styles.scrollBar}></View>
          <View style={styles.card}> */}


                {/* <View style={styles.iconSection}>
                  <View style={styles.iconWidthText}>
                    <MatchesIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>Matches</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <TrophyIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>Tournaments</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <LookingIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>Looking</Text>
                  </View>
                  <View style={styles.iconWidthText}>
                    <LookingIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>challenge</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <PayIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>pay</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <FindFriendIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>find friends</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <EcoSystemIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>ecosystem</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <PremiumIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>premium</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <ContactUSIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>support</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <ShareIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>Share app</Text>
                  </View>

                  <View style={styles.iconWidthText}>
                    <RateUsIcon height={40} width={40} color={darkColor} />
                    <Text style={styles.iconTitle}>rate app</Text>
                  </View>

                </View> */}
                {/* </View>

        </BottomSheet>  */}

      <BottomMenu toggle={toggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  iconLabel: {
    color: '#000',
    marginBottom: 0,
    paddingBottom: 0,
  },
  iconItem: {
    alignItems: 'center',
  },
  statusSection: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginVertical: 10,
    padding: 15,
  },
  statusIcons: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#14B393',
  },
  statusIcon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#626B70',
  },
  hastags: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },

  // post
  feedSection: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  postImage: {
    width: '100%',
    // maxHeight:250,
    height: 400,
    resizeMode: 'cover',
  },
  feedTimeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  date: {
    color: '#72797F',
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  comment: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  reactions: {
    color: '#000',
    marginLeft: 8,
    fontFamily: 'Roboto-Regular',
  },
  feedTitle: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',

    padding: 15,
  },
  reactionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  likeCommentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 15,
  },
  likeCommentText: {
    color: '#000',
    paddingLeft: 5,
    fontFamily: 'Roboto-Regular',
  },
  likeCommentItems: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignContent:'center',
    // backgroundColor:"#ccc"
  },
  commentSuggestions: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    // marginVertical:4
  },
  commentText: {
    color: '#72797F',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#72797F',
    borderRadius: 20,
    marginRight: 4,
    backgroundColor: '#F7F7F7',
  },

  // shortcut

  shortcuts: {
    backgroundColor: '#fff',
    // padding:15
  },
  shortcutSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    paddingHorizontal: 15,
    marginVertical: 10,
  },

  shortcutButton: {
    color: '#14B492',
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '500',
  },
  shortcutText: {
    color: '#fff',
    backgroundColor: '#14B492',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#14B492',
    borderRadius: 20,
    marginRight: 5,
    textTransform: 'uppercase',
    fontSize: 12,
    // padding:8
  },
  shortcutsItems: {
    paddingTop: 15,
    paddingBottom: 25,
  },

  // photo gallery
  photoGridHeaderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  photoGridTitle: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',

    textTransform: 'capitalize',
  },
  photogallery: {
    backgroundColor: '#fff',
  },
  allImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // marginVertical:10
  },
  playerImage: {
    width: 110,
    height: 110,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  rankBadge: {
    color: '#fff',
    backgroundColor: '#F99F0D',
    borderRadius: 10,
    width: 30,
    padding: 4,
  },
  mobilebuttonContainer: {
    marginVertical: 10,
    flex: 1,
    alignSelf: 'center',
  },
  mobileText: {
    backgroundColor: '#14B492',
    textAlign: 'center',
    padding: 12,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },

  //   bottomsheet
  card: {
    backgroundColor: lightBackgroundColor,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // position:'absolute',
    // bottom:50,
    // left:0,
    // right:0
    // marginBottom:75
  },
  scrollBar: {
    width: 30,
    height: 2,
    borderWidth: 1,
    borderColor: lightColor,
    borderRadius: 2,
    overflow: 'hidden',
    marginVertical: 5,
    alignSelf: 'center',
  },

  cutomBottomSheet: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#000',
    // padding:20,
    // margin:20
    bottom: 80,
  },
});
