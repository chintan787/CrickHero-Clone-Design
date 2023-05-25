import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  Pressable,
  SafeAreaView,
  Dimensions,
  Modal,
} from 'react-native';
import MobileIcon from '../images/MobileIcon';
import WhatsAppIcon from '../images/WhatsAppIcon';
import {useNavigate} from 'react-router-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import {BottomSheet} from 'react-native-btr';
import CorrectIcon from '../images/CorrectIcon';
import { 
  borderAutoFocusColor, 
  dropDownBackgroundColor,
  borderPrimaryColor, 
  borderSecondaryColor, 
  secondaryColor,
  primaryColor,notesColor,
  primaryIconBackgroundColor,
  darkColor, globalStyles, lightBackgroundColor, lightColor, primaryBackgroundColor, warningColor, screenBackgroundColor, darkBackgroundColor } from '../components/Global.css';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoginWithPin() {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [newPin, setNewPin] = useState('');
  const refs = useBlurOnFulfill({newPin, cellCount: CELL_COUNT});
//   const [properties, getCellLayoutHandler] = useClearByFocusCell({
//     newPin,
//     setNewPin,
//   });

  const [havePin, setHavePin] = useState(false);
  const [mobileNumber, setMobileNumber] = useState();
  const [enterOtp, setEnterOtp] = useState();
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigate();

  const toggle = () => {
    setVisible(visible => !visible);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = '6351867811'
      // const value = await AsyncStorage.getItem('phone');
      if (value !== null) {
        setMobileNumber(value);
      }
    } catch (e) {
      console.log('e', e);
    }
  };

  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="*"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bannerImage}
        source={require('../images/hqdefault.jpg')}
      />

      {!havePin ? (
        <>
          <View style={styles.AllContent}>
            <View style={styles.pageHeading}>
              <Text style={globalStyles.headingh1}>Welcome back</Text>
              <View style={[styles.headingBorder]}></View>
            </View>

            <View>
              <Text style={styles.rootTitle}>
                Please enter your existing 4-digit{' '}
                <Text style={styles.highLightWord}>pin</Text> to continue.
              </Text>
            </View>
            <View style={styles.root}>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
              />
            </View>

            <View style={{paddingHorizontal: 15}}>
           
              <TouchableOpacity style={[globalStyles.primaryButton, styles.buttonSpacing]} onPress={() => navigate('/dashboard')}>
                <Text style={globalStyles.primaButtonText}> continue</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setHavePin(!havePin)}>
                <Text style={[globalStyles.modalLinkText,styles.forgotPinText]}>Forgot pin?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonwithIconContainer}
              onPress={() => navigate('/')}>
              <Text style={styles.buttonText}>Cancle</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.AllContent}>
          <View style={styles.pageHeading}>
            <Text style={[globalStyles.headingh1]}>
              +91 {mobileNumber}
            </Text>
            <View style={styles.mobileBorder}></View>

            <View>
              <Text style={styles.resetPinTitle}>Reset PIN</Text>
              <Text style={globalStyles.para}>
                Please enter OTP received via SMS to verify your mobile number
              </Text>
              <Text style={styles.codeTitle}>Enter Code</Text>
              <TextInput
                style={styles.inputForOTP}
                onChangeText={setEnterOtp}
                value={enterOtp}
                maxLength={4}
                keyboardType="number-pad"
              />
            </View>
            <View style={{marginVertical: 28, marginHorizontal: 40}}>
              <TouchableOpacity
                style={styles.buttonwithIconFilledContainer}
                onPress={() => {
                  toggle();
                }}>
                <Text style={styles.buttonFilledText}> continue</Text>
              </TouchableOpacity>
              <Text style={styles.resendOTP}>
                Resend otp <Text style={styles.otpTimer}>(00:52)</Text>
              </Text>
            </View>

            <BottomSheet
              visible={visible}
              onBackButtonPress={toggle}
              onBackdropPress={toggle}>
              <View style={styles.scrollBar}></View>
              <View style={styles.card}>
                <Text style={styles.setNewPinTitle}>Set Your PIN</Text>
                <Text style={styles.setNewPindesc}>
                  Set up a PIN for your account to login faster next time.
                </Text>

                <View style={styles.root}>
                  <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={renderCell}
                  />
                </View>

                <TouchableOpacity
                  style={[
                    globalStyles.primaryButton,
                    {marginBottom: 0},
                  ]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={globalStyles.primaButtonText}> continue</Text>
                </TouchableOpacity>
              </View>
            </BottomSheet>
          </View>

          <View style={[styles.centeredViewNew]}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                
              }}>
              <View style={styles.centeredView}>
                <TouchableOpacity
                  style={styles.cardbackgroundShadow}
                  onPress={() =>
                    setModalVisible(!modalVisible)
                  }></TouchableOpacity>
                <View style={styles.modalView}>
                  <View style={styles.aboutIconSection}>
                    <CorrectIcon width="40" height="40" color="#14B492" />
                  </View>

                  <View>
                    <Text style={styles.modalText}>Success</Text>
                    <Text style={styles.modalPara}>
                      Now you can use this PIN to login next time.you can also
                      login with OTP in case you forgot your PIN.
                    </Text>
                  </View>
                  <Pressable
                    style={[styles.modalbutton]}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setHavePin(!havePin)
                    }}>
                    <Text style={styles.modalbtnText}>Ok</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightBackgroundColor,
    flexGrow: 1,
    justifyContent: 'center',
  },
  AllContent: {
    padding: 15,
    width: '100%',
    flexGrow: 1,
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },

  heading: {
    color: darkColor,
    fontSize: 25,
  },
  headingBorder: {
    width: 45,
    height: 3,
    backgroundColor: borderSecondaryColor,
    marginVertical: 25,
    alignSelf: 'center',
    borderRadius: 4,
  },
  mobileBorder: {
    width: 45,
    height: 3,
    backgroundColor:borderSecondaryColor,
    marginVertical: 20,
    alignSelf: 'center',
    borderRadius: 4,
  },

  pageHeading: {
    alignSelf: 'center',
  },
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  //   color: secondaryColor,
  // },

  root: {paddingHorizontal: 30, paddingVertical: 18},
  title: {textAlign: 'center', fontSize: 30},
  cell: {
    width: 55,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: borderPrimaryColor,
    textAlign: 'center',
    color:darkColor,
    fontFamily:'Roboto-Regular'

  },
  focusCell: {
    borderColor:borderAutoFocusColor,
    color: borderAutoFocusColor,
  },
  rootTitle: {
    color: darkColor,
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    lineHeight: 28,
    fontFamily:'Roboto-Regular'
  },
  highLightWord: {
    fontFamily:'Roboto-Bold',
    textTransform: 'uppercase',
  },
  buttonwithIconFilledContainer: {
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: primaryBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonSpacing:{
    marginBottom: 10,

  },
  buttonFilledText: {
    color: lightColor,
    textAlign: 'center',
    paddingLeft: 5,
    textTransform: 'uppercase',
    fontFamily:'Roboto-Medium',
  },

  forgotPinText: {
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  buttonwithIconContainer: {
    // marginBottom: 10,
    padding: 15,
    // flexDirection: 'row',
    backgroundColor: dropDownBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color:secondaryColor,
    textAlign: 'center',
    paddingLeft: 5,
    textTransform: 'uppercase',
    fontFamily:'Roboto-Medium'
  },
  resetPinTitle: {
    // color: '#BC4235',
    color:warningColor,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily:'Roboto-Bold'
  },
  description: {
    color: secondaryColor,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  codeTitle: {
    color: primaryColor,
    textAlign: 'center',
    marginTop: 15,
    fontFamily:'Roboto-Regular'
  },
  inputForOTP: {
    width: 150,
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: primaryBackgroundColor,
    padding: 10,
    color: darkColor,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily:'Roboto-Medium'
  },
  resendOTP: {
    color: notesColor,
    textTransform: 'uppercase',
    fontSize: 15,
   fontFamily:'Roboto-Medium',
    textAlign: 'center',
    marginVertical: 5,
  },
  otpTimer: {
    color: warningColor,
  },
  
  //   modal

  aboutIconSection: {
    backgroundColor:primaryIconBackgroundColor,
    padding: 20,
    borderRadius: 50,
    marginBottom: 15,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 111,
    position: 'relative',
  },
  cardbackgroundShadow: {
    backgroundColor: darkBackgroundColor,
    opacity: 0.8,
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
  },
  modalView: {
    // margin: 30,
    backgroundColor: lightBackgroundColor,
    // borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 25,
    alignItems: 'center',
    shadowColor: darkColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    // shadowRadius: 1,
    elevation: 5,
    opacity: 1,
    zIndex: 1,
  },
  notes: {
    textTransform: 'uppercase',
  },

  modalText: {
    marginTop: 15,
    textAlign: 'center',
    color: darkColor,
    fontSize: 22,
    fontFamily:'Roboto-Medium',
  },
  modalPara: {
    color:secondaryColor,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'center',
    padding: 5,
    marginTop: 4,
  },

  modalbtnText: {
    color: lightColor,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    marginHorizontal: 30,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  modalbutton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: primaryBackgroundColor,
    borderRadius: 4,
  },

  //   bottomsheet
  card: {
    backgroundColor: lightBackgroundColor,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  setNewPinTitle: {
    color: darkColor,
    textAlign: 'center',
    fontSize: 20,
    fontFamily:'Roboto-Bold',
    marginVertical: 10,
  },
  setNewPindesc: {
    color: secondaryColor,
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 10,
    fontFamily: 'Roboto-Regular',
  },



  

});
