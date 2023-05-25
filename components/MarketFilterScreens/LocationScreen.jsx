import React, {useState, useRef, useEffect} from 'react';
import {
  borderPrimaryColor,
  darkColor,
  dropDownBackgroundColor,
  globalStyles,
  lightBackgroundColor,
  lightColor,
  primaryBackgroundColor,
  secondaryColor,
} from '../Global.css';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SearchIcon from '../../images/SearchIcon';
import CheckBox from 'react-native-check-box';
import {useNavigate} from 'react-router-native';
import {useScrollToTop} from '@react-navigation/native';
import ScrollToTop from 'react-scroll-to-top';

const windowHeight = Dimensions.get('window').height;

export default function LocationScreen() {
  const [data, setData] = useState([
    {value: 'Abohar', key: '1', checked: false},
    {value: 'Amaravati', key: '2', checked: false},
    {value: 'Anantapur', key: '3', checked: false},
    {value: 'Ahmedabad', key: '22', checked: false},
    {value: 'Alexandria', key: '23', checked: false},
    {value: 'Abidjan', key: '24', checked: false},
    {value: 'Almaty', key: '25', checked: false},
    {value: 'Agra', key: '26', checked: false},
    {value: 'Adana', key: '27', checked: false},
    {value: 'Abuja', key: '28', checked: false},
    {value: 'Amritsar', key: '29', checked: false},
    {value: 'Anyang', key: '30', checked: false},
    {value: 'Austin', key: '31', checked: false},
    {value: 'Bengaluru', key: '32', checked: false},
    {value: 'Bhopal', key: '33', checked: false},
    {value: 'Bangkok', key: '34', checked: false},
    {value: 'Basrah', key: '35', checked: false},
    {value: 'Berlin', key: '36', checked: false},
    {value: 'Chandragiri', key: '4', checked: false},
    {value: 'Chittoor', key: '5', checked: false},
    {value: 'Dowlaiswaram', key: '6', checked: false},
    {value: 'Eluru', key: '7', checked: false},
    {value: 'Guntur', key: '8', checked: false},
    {value: 'Kadapa', key: '9', checked: false},
    {value: 'Kakinada', key: '10', checked: false},
    {value: 'Kurnool', key: '11', checked: false},
    {value: 'Machilipatnam', key: '12', checked: false},
    {value: 'Nagarjunakoṇḍa', key: '13', checked: false},
    {value: 'Rajahmundry', key: '14', checked: false},
    {value: 'Srikakulam', key: '15', checked: false},
    {value: 'Tirupati', key: '16', checked: false},
    {value: 'Vijayawada', key: '17', checked: false},
    {value: 'Visakhapatnam', key: '18', checked: false},
    {value: 'Vizianagaram', key: '19', checked: false},
    {value: 'Yemmiganur', key: '20', checked: false},
    {value: 'lillie-Mai Allen', key: '21', checked: false},
  ]);

  const customIndex = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const scrollRef = useRef();

  // useEffect(() => {
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }, []);

  const handleSelectedItems = (e, index) => {
    let newState = [...data];
    if (newState[index].checked === true) {
      newState[index].checked = false;
      setData(newState);
    } else {
      newState[index].checked = true;
      setData(newState);
    }
  };

  const handleLetterIndex = (e, i) => {
    console.log('i', i);
    let phonelist = data.map(item => item.value.toLocaleLowerCase());
    console.log('phonelist', phonelist);

    const startsWithN = phonelist.filter(country => country.startsWith(i));
    console.log('startWidth', startsWithN);
  };

  const resetValues = () => {
    let newState = [...data];
    for (let i = 0; i < newState.length; i++) {
      if (newState[i] !== '') {
        if (newState[i].checked === true) {
          newState[i].checked = false;
          setData(newState);
        }
      }
    }

  };

  const temp = data.map(i => i.value.toLocaleLowerCase());

  const filtered = data.filter(
    item =>
      !searchValue.length ||
      item.value
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase()) ||
      item.value
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase()),
  );

  
  return (
    <View style={{flex: 1}}>
      <View style={{position: 'relative'}}>
        <View style={[globalStyles.customFlexDirection, styles.searchBar]}>
          <View style={{marginLeft: 10}}>
            <SearchIcon height={18} width={18} color={secondaryColor} />
          </View>
          <TextInput
            style={styles.input}
            placeholderTextColor={secondaryColor}
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder="Quick Search"
            // keyboardType="numeric"
          />
        </View>
      </View>

      <View style={{position: 'relative', height: 500, flexGrow: 1}}>
        <ScrollView>
          <View>
            {filtered.map((item, index) => (
              <CheckBox
                style={styles.checkboxContainer}
                onClick={e => handleSelectedItems(e, index)}
                isChecked={item.checked}
                rightText={item.value}
                uncheckedCheckBoxColor={borderPrimaryColor}
                checkedCheckBoxColor={darkColor}
                rightTextStyle={{
                  color: darkColor,
                  fontSize: 15,
                  fontFamily: 'Roboto-Regular',
                  textTransform: 'capitalize',
                }}
              />
            ))}
          </View>
        </ScrollView>

        <View style={styles.letterIndexSection}>
          {customIndex.map(i => (
            <TouchableOpacity key={i} onPress={e => handleLetterIndex(e, i)}>
              <Text style={styles.letterIndex}>{i}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => resetValues()}>
          <Text style={styles.buttonText}>Reset all</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => navigate('/dashboard')}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  letterIndexSection: {
    borderWidth: 1,
    borderColor: secondaryColor,
    width: 20,
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: windowHeight,
    // marginHorizontal: 1,
    position: 'absolute',
    top: 0,
    right: 1,
    overflow: 'scroll',
  },
  letterIndex: {
    color: secondaryColor,
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
  },
  input: {
    height: 35,
    padding: 10,
    color: secondaryColor,
    flexGrow: 1,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  nameList: {
    color: '#000',
    padding: 10,
  },
  searchBar: {
    // borderWidth: 1,
    backgroundColor: lightBackgroundColor,
    margin: 12,
  },
  checkboxContainer: {
    flex: 1,
    padding: 15,
    color: darkColor,
  },
  buttonText: {
    color: lightColor,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    textTransform: 'uppercase',
  },
  buttonSection: {
    width: '100%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
  },
  leftButton: {
    backgroundColor: '#72797F',
    padding: 15,
    width: '50%',
  },
  rightButton: {
    backgroundColor: primaryBackgroundColor,
    padding: 15,
    width: '50%',
  },
});
