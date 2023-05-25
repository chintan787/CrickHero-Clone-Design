import React, {useState} from 'react';
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
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-check-box';

export default function ProductsScreen() {

  const [data, setData] = useState([
    {value: 'cricket bat', key: '1', checked: false},
    {value: 'stumps', key: '2', checked: false},
    {value: 'protective gears', key: '3', checked: false},
    {value: 'cricket kit', key: '4', checked: false},
    {value: 'commentator', key: '5', checked: false},
    {value: 'scoreer', key: '6', checked: false},
    {value: 'cricket academy', key: '7', checked: false},
    {value: 'sports shop', key: '8', checked: false},
    {value: 'live streaming', key: '9', checked: false},
    {value: 'others', key: '10', checked: false},
    {value: 'cricket bat', key: '1', checked: false},
    {value: 'stumps', key: '2', checked: false},
    {value: 'protective gears', key: '3', checked: false},
    {value: 'cricket kit', key: '4', checked: false},
    {value: 'commentator', key: '5', checked: false},
    {value: 'scoreer', key: '6', checked: false},
    {value: 'cricket academy', key: '7', checked: false},
    {value: 'sports shop', key: '8', checked: false},
    {value: 'live streaming', key: '9', checked: false},
    {value: 'others', key: '10', checked: false},
  ]);

  const handleSelectedItems = (e, id) => {
    console.log('id', id);
    let index = id - 1;
    let newState = [...data];
    console.log('new id', index);
    if (newState[index].checked === true) {
      newState[index].checked = false;
      setData(newState);
    } else {
      newState[index].checked = true;
      setData(newState);
    }
  };


  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View>
          {data.map(item => (
            <CheckBox
              style={styles.checkboxContainer}
              onClick={e => handleSelectedItems(e, item.key)}
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

      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.leftButton}>
          <Text style={styles.buttonText}>Reset all</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightButton}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flex: 1,
    padding: 15,
    color: darkColor,
  },
  buttonSection: {
    width: '100%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: lightColor,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    textTransform: 'uppercase',
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
