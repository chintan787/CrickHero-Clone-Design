import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  Alert,
  Pressable,
  Dimensions,
} from 'react-native';
import MobileIcon from '../images/MobileIcon';
import WhatsAppIcon from '../images/WhatsAppIcon';
import {useNavigate} from 'react-router-native';

import {Dropdown} from 'react-native-element-dropdown';
import AboutIcon from '../images/AboutIcon';
import {
  globalStyles,
  lightBackgroundColor,
  borderPrimaryColor,
  secondaryColor,
  dropDownBackgroundColor,
  darkColor,
  primaryBackgroundColor,
  lightColor,
  darkBackgroundColor,
  secondaryIconBackgroundColor
} from '../components/Global.css';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Register() {
  const [value, setValue] = useState('India');
  const [isFocus, setIsFocus] = useState(false);
  const [openMobileNumberSection, setOpenMobileNumberSection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [mobileNumber, setMobileNumber] = useState();

  const data = [
    {label: 'India', value: 'India'},
    {label: 'Afghanistan', value: 'Afghanistan'},
    {label: 'Austalia', value: 'Austalia'},
    {label: 'Algeria', value: 'Algeria'},
    {label: 'Andorra', value: 'Andorra'},
    {label: 'Angola', value: 'Angola'},
    {label: 'Aruba', value: 'Aruba'},
    {label: 'Bahrian', value: 'Bahrian'},
  ];

  const navigate = useNavigate();

  const onChangeNumber = e => {
    console.log('e', e);
  };

  if (openMobileNumberSection) {
    console.log('mobileNumber', mobileNumber);
    try {
      //  AsyncStorage.setItem('phone', mobileNumber)
    } catch (e) {
      // saving error
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.bannerImage}
        source={require('../images/pexelsphoto.jpeg')}
      />

      {openMobileNumberSection ? (
        <View style={styles.AllContent}>
          <View style={styles.mobileContainer}>
            <Text style={styles.mobilePrefix}>+91</Text>
            <View style={{flexGrow: 1}}>
              <Text style={[styles.phoneLabel, globalStyles.inputLabel]}>
                Phone Number
              </Text>

              <TextInput
                // label="Phone number"
                // autoComplete="tel"
                style={styles.input}
                onChangeText={setMobileNumber}
                value={mobileNumber}
                placeholder="Phone number"
                keyboardType="numeric"
                placeholderTextColor="#ccc"
                placeholderStyle={styles.placehoder}
              />
            </View>
          </View>

          <View style={styles.mobilebuttonContainer}>
            <TouchableOpacity onPress={() => navigate('/dashboard')}>
              <Text style={globalStyles.primaryButtonWithFixedWidth}>
                Let's Play
              </Text>
            </TouchableOpacity>
            {/* <Button title="Let's Play" color="#14B492" style={{padding:10}} /> */}

            <TouchableOpacity onPress={() => navigate('/login')}>
              <Text style={globalStyles.secondaryLinkButtom}>Have a pin?</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.AllContent}>
          <View style={{marginTop: 8}}>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              // selectedStyle={styles.selectedStyle}
              itemTextStyle={styles.itemTextStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'India' : 'India'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          <View>
            <View
              style={[
                styles.infomationBorder,
                globalStyles.customFlexDirection,
              ]}>
              <View style={styles.borders} />
              <View>
                <Text style={styles.infoTitle}>Countinue with</Text>
              </View>
              <View style={styles.borders} />
            </View>

            <View>
              <TouchableOpacity style={[globalStyles.primaryButtonWithIcon]}>
                <View>
                  <WhatsAppIcon />
                </View>
                <Text style={globalStyles.primaButtonText}> WhatsApp</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.secondaryButtonWithIcon}
                onPress={() =>
                  setOpenMobileNumberSection(!openMobileNumberSection)
                }>
                <View>
                  <MobileIcon />
                </View>
                <Text style={globalStyles.secondaryButtonText}>
                  {' '}
                  Mobile Number
                </Text>
              </TouchableOpacity>
            </View>
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
                    <AboutIcon width={40} height={40} color={darkColor} />
                  </View>

                  <View>
                    <Text style={[styles.modalText, globalStyles.headingH3]}>
                      Why my phone number?
                    </Text>
                    <Text
                      style={[styles.modalPara, globalStyles.modalParagraph]}>
                      CricHeroes uses phone nuber to uniquely identify players.
                      No one would have access to your phone number without your
                      consent.
                      <Text style={styles.notes}>
                        we don't spam or sell your data
                      </Text>
                    </Text>
                  </View>
                  <Pressable
                    style={[styles.modalbutton, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Ok</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.bottomContent}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={globalStyles.modalLinkText}>
                Why my mobile number?
              </Text>
            </TouchableOpacity>
            <Text style={globalStyles.paragraph}>
              By signing in, you agree to our{' '}
              <TouchableOpacity style={styles.touchableText}>
                <Text style={globalStyles.pageLinkText}>Terms of Service</Text>
              </TouchableOpacity>{' '}
              and{' '}
              <TouchableOpacity>
                <Text style={globalStyles.pageLinkText}>Privacy Policy</Text>
              </TouchableOpacity>{' '}
            </Text>

            <View style={styles.guestLink}>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.guestLinkText,
                    globalStyles.coloredLinkTextWithUnderline,
                  ]}>
                  Explore as a guest
                </Text>
              </TouchableOpacity>
            </View>
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

  infomationBorder: {
    marginVertical: 25,
    width: '100%',
  },
  borders: {
    flex: 1,
    height: 1,
    backgroundColor: borderPrimaryColor,
  },
  infoTitle: {
    paddingHorizontal: 10,
    color: secondaryColor,
    width: '100%',
    textAlign: 'center',
  },
  buttonContainer: {
    textTransform: 'uppercase',
  },

  bottomContent: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flexGrow: 1,
    alignItems: 'center',
    width: '100%',
  },
  touchableText: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  guestLinkText: {
    marginTop: 28,
  },

  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: darkColor,
    backgroundColor: dropDownBackgroundColor,
  },

  placeholderStyle: {
    fontSize: 16,
    color: darkColor,
  },
  selectedTextStyle: {
    fontSize: 16,

    color: darkColor,
  },

  itemTextStyle: {
    color: darkColor,
  },
  input: {
    height: 30,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: primaryBackgroundColor,
    paddingVertical: 5,
    paddingRight: 5,
    paddingLeft: 0,
    color: darkColor,
    fontSize: 18,
  },
  phoneLabel: {
    marginLeft: 12,
  },

  mobileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  mobilePrefix: {
    color: darkColor,
    paddingTop: 10,
    alignSelf: 'center',
    height: 'auto',
    fontSize: 18,
    fontWeight: '600',
  },
  mobilebuttonContainer: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  mobileText: {
    backgroundColor: primaryBackgroundColor,
    textAlign: 'center',
    padding: 15,
    color: lightColor,
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
    paddingHorizontal: 25,
  },

  //

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
    margin: 30,
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

  modalbutton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: primaryBackgroundColor,
    borderRadius: 4,
  },

  textStyle: {
    color: lightColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    textTransform: 'uppercase',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalPara: {
    marginBottom: 15,
  },
  aboutIconSection: {
    backgroundColor:secondaryIconBackgroundColor,
    padding: 20,
    borderRadius: 50,
    marginBottom: 15,
  },
});
