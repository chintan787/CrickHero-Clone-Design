import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
  Modal,
  Dimensions,
} from 'react-native';
import MessageIcon from '../../images/MessageIcon';
import PlusIcon from '../../images/PlusIcon';
import {
  basicColor,
  globalStyles,
  iconPrimaryColor,
  lightBackgroundColor,
  lightColor,
  secondaryIconBackgroundColor,
  primaryColor,
  darkColor,
  waringModalIconColor,
  waringModalIconBackgroundColor,
  secondaryColor,
  darkBackgroundColor,
  grayButtonColor,
} from '../Global.css';
import CorrectIcon from '../../images/CorrectIcon';
import {primaryBackgroundColor, captionBackgroundColor} from '../Global.css';
import RightArrowWithRoundedBorder from '../../images/RightArrowWithRoundedBorder';
import {useNavigate} from 'react-router-native';
import RightIcon from '../../images/RightIcon';
import AboutIcon from '../../images/AboutIcon';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TeamPlayer() {
  const navigate = useNavigate();

  const [yesclick , setYesClicked] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [playerName, setPlayerName] = useState();
  const [unfollow, setUnFollow] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [following, setFollowing] = useState([
    {
      id: 1,
      imgpath: require('../../images/topplayer3.jpg'),
      playername: 'Jayesh Bambhaniya',
      follow: false,
    },
    {
      id: 2,
      imgpath: require('../../images/topplayer4.jpg'),
      playername: 'Alpesh B',
      follow: false,
    },
    {
      id: 3,
      imgpath: require('../../images/topplayer2.jpg'),
      playername: 'chagan sadda adda',
      follow: false,
    },
    {
      id: 4,
      imgpath: require('../../images/topplayer1.jpg'),
      playername: 'darshan solanki',
      follow: false,
    },
    {
      id: 5,
      imgpath: require('../../images/topplayer3.jpg'),
      playername: 'dipu',
      follow: false,
    },
    {
      id: 6,
      imgpath: require('../../images/topplayer4.jpg'),
      playername: 'nill',
      follow: false,
    },
    {
      id: 7,
      imgpath: require('../../images/topplayer1.jpg'),
      playername: 'niraj shiyal (coach)',
      follow: false,
    },
    {
      id: 8,
      imgpath: require('../../images/topplayer2.jpg'),
      playername: 'pinak maiya',
      follow: false,
    },
    {
      id: 9,
      imgpath: require('../../images/topplayer1.jpg'),
      playername: 'rakesh',
      follow: false,
    },
    {
      id: 10,
      imgpath: require('../../images/topplayer3.jpg'),
      playername: 'vaja nirbhay',
      follow: false,
    },
    {
      id: 11,
      imgpath: require('../../images/topplayer4.jpg'),
      playername: 'vipul bambhaniya',
      follow: false,
    },
  ]);

  // const handleUnFollowers = () => {
  //   setUnFollow(!unfollow);
  //   console.log("unfollow from function",unfollow)
  // }
  console.log('unfollow', unfollow);
  // useEffect(()=>{
  //   if(unfollow === true)
  //   {
  //     console.log("useEffect call!");
  //     handleFollowers();
  //   }
  // },[unfollow])

  const handleFollowers = (e, id) => {
    let index = id - 1;
    let newState = [...following];

    if (newState[index].follow === true) {
      newState[index].follow = false;
        setFollowing(newState);
      setPlayerName(newState[index].playername);
      setModalVisible(true);
      setUnFollow(true);


    } else {
      console.log('else condition');
      newState[index].follow = true;
      setFollowing(newState);
      setShowToast(true);
    }

    // if(yesclick === true)
    // {
    //   if(newState[index].follow = true){
    //     console.log("yesclicked true",yesclick);
    //     newState[index].follow = false;
    //     setFollowing(newState);
    //     setYesClicked(!yesclick)
    //   }
    // }


  };

 

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);

  return (
    <>
      <ScrollView>
        <View
          style={[
            globalStyles.customFlexDirectionWithJustify,
            styles.headings,
          ]}>
          <Text style={styles.leftHeading}>Playing Squad</Text>
          <TouchableOpacity
            style={globalStyles.customFlexDirection}
            onPress={() => navigate('/teamProfilePage')}>
            <Text style={styles.rightHeading}>Team Profile </Text>
            <RightArrowWithRoundedBorder
              width={20}
              height={20}
              color={iconPrimaryColor}
            />
          </TouchableOpacity>
        </View>

        {following !== ''
          ? following.map(item => (
              <>
                <View
                  key={item.id}
                  style={[
                    globalStyles.customFlexDirectionWithJustify,
                    styles.cardContainer,
                  ]}>
                  <View style={globalStyles.customFlexDirection}>
                    <View style={{position: 'relative'}}>
                      <Image
                        source={item.imgpath}
                        style={styles.imageContainer}
                      />
                      {item.id === 1 ? (
                        <Text style={styles.caption}>c</Text>
                      ) : (
                        <View style={styles.verify}>
                          <CorrectIcon width="10" height="10" color="#fff" />
                        </View>
                      )}
                    </View>
                    <Text style={styles.teamName}>{item.playername}</Text>
                  </View>
                  <View
                    style={[
                      globalStyles.customFlexDirection,
                      styles.iconSection,
                    ]}>
                    <TouchableOpacity
                      id={item.id}
                      style={[
                        styles.iconBackground,
                        {
                          backgroundColor:
                            item.follow === true
                              ? secondaryIconBackgroundColor
                              : iconPrimaryColor,
                        },
                      ]}
                      onPress={e => handleFollowers(e, item.id)}>
                      {item.follow === true ? (
                        <CorrectIcon height={20} width={20} color="#fff" />
                      ) : (
                        <PlusIcon height={20} width={20} color="#fff" />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.iconBackground,
                        {backgroundColor: iconPrimaryColor},
                      ]} onPress={() => navigate('/chatWithPlayer',{playername : playerName})}>
                        
                      <MessageIcon width="20" height="20" color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ))
          : ''}
      </ScrollView>
      {showToast ? (
        <View style={styles.toast}>
          <Text style={styles.toastText}>
            Awesome! You will remain updated with this player's cricketing
            activities.
          </Text>
        </View>
      ) : (
        ''
      )}

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
              <Text style={styles.modalTitle}>Following</Text>
              <Text style={[styles.modalPara]}>
                Are you sure you want to unfollow {playerName}?
              </Text>
              <Pressable style={[styles.button]} onPress={() => {setModalVisible(!modalVisible); setYesClicked(!yesclick)}}>
                <Text style={styles.textStyle}>yes, i'm sure</Text>
              </Pressable>

              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalCancle}>cancle</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headings: {
    marginHorizontal: 10,
    marginVertical: 18,
  },
  leftHeading: {
    color: basicColor,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  rightHeading: {
    color: primaryColor,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    textTransform: 'uppercase',
    marginRight: 2,
  },
  teamName: {
    color: basicColor,
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    textTransform: 'capitalize',
    marginLeft: 10,
  },
  iconBackground: {
    borderRadius: 20,
    padding: 6,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  cardContainer: {
    backgroundColor: lightBackgroundColor,
    padding: 8,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconSection: {
    width: '22%',
    justifyContent: 'space-between',
  },
  verify: {
    color: lightColor,
    backgroundColor: primaryBackgroundColor,
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 4,
    borderRadius: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  caption: {
    color: lightColor,
    backgroundColor: captionBackgroundColor,
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    fontSize: 15,
    lineHeight: 15,
    fontFamily: 'Roboto-Black',
  },
  toast: {
    backgroundColor: primaryBackgroundColor,
    marginHorizontal: 20,
    padding: 10,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  toastText: {
    fontFamily: 'Roboto-Medium',
    color: lightColor,
    fontSize: 16,
    lineHeight: 22,
  },

  //  ///////

  centeredView: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
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
    margin: 30,
    paddingVertical: 35,
    paddingHorizontal: 25,
    backgroundColor: lightBackgroundColor,
    // padding: 20,
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
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: darkColor,
  },
  modalPara: {
    marginVertical: 15,
    fontSize: 15,
    color: secondaryColor,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
  modalCancle: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    fontSize: 13,
    textTransform: 'uppercase',
    color: grayButtonColor,
    // marginVertical: 10,
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
