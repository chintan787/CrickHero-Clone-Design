import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {
    basicColor,
  borderPrimaryColor,
  darkColor,
  globalStyles,
  primaryBackgroundColor,
  secondaryColor,
  waringModalIconColor,
} from '../../../Global.css';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {Dropdown} from 'react-native-element-dropdown';


export default function Field() {

    const [playerData, setPlayerData] = useState([
        {
          id: 1,
          profileImg: require('../../../../images/topplayer1.jpg'),
          name: 'jayehs bambhaniya',
          gameDetail: 'mat:2 | dismissal:2 | catches:1 | r/o:1',
          progressCount : 0.8
        },
        {
          id: 2,
          profileImg: require('../../../../images/topplayer2.jpg'),
          name: 'alpesh b',
          gameDetail: 'mat:2 | dismissal:2 | catches:2 | r/o:1',
          progressCount : 0.7
    
        },
        {
          id: 3,
          profileImg: require('../../../../images/topplayer3.jpg'),
          name: 'vipul bambhaniya',
          gameDetail: 'mat:2 | dismissal:2 | catches:2 | r/o:1',
          progressCount : 0.6
    
        },
        {
          id: 4,
          profileImg: require('../../../../images/topplayer4.jpg'),
          name: 'niraj shiyal (coach)',
          gameDetail: 'mat:2 | dismissal:2 | catches:2 | r/o:1',
          progressCount : 0.5
    
        },
        {
          id: 5,
          profileImg: require('../../../../images/topplayer1.jpg'),
          name: 'darshu solanki',
          gameDetail: 'mat:2 | dismissal:2 | catches:2 | r/o:1',
          progressCount : 0.4
    
        },
      ]);


      const [valueone, setValueone] = useState('India');
      const [valuetwo, setValuetwo] = useState('India');
    
      const [isFocus, setIsFocus] = useState(false);
    
      const dataone = [
        {label: 'India', value: 'India'},
        {label: 'Afghanistan', value: 'Afghanistan'},
        {label: 'Austalia', value: 'Austalia'},
        {label: 'Algeria', value: 'Algeria'},
        {label: 'Andorra', value: 'Andorra'},
        {label: 'Angola', value: 'Angola'},
        {label: 'Aruba', value: 'Aruba'},
        {label: 'Bahrian', value: 'Bahrian'},
        {label: 'India', value: 'India'},
        {label: 'Afghanistan', value: 'Afghanistan'},
        {label: 'Austalia', value: 'Austalia'},
        {label: 'Algeria', value: 'Algeria'},
        {label: 'Andorra', value: 'Andorra'},
        {label: 'Angola', value: 'Angola'},
        {label: 'Aruba', value: 'Aruba'},
        {label: 'Bahrian', value: 'Bahrian'},
        {label: 'India', value: 'India'},
        {label: 'Afghanistan', value: 'Afghanistan'},
        {label: 'Austalia', value: 'Austalia'},
        {label: 'Algeria', value: 'Algeria'},
        {label: 'Andorra', value: 'Andorra'},
        {label: 'Angola', value: 'Angola'},
        {label: 'Aruba', value: 'Aruba'},
        {label: 'Bahrian', value: 'Bahrian'},
      ];
    
      const datatwo = [
        {label: 'India', value: 'India'},
        {label: 'Afghanistan', value: 'Afghanistan'},
        {label: 'Austalia', value: 'Austalia'},
        {label: 'Algeria', value: 'Algeria'},
        {label: 'Andorra', value: 'Andorra'},
        {label: 'Angola', value: 'Angola'},
        {label: 'Aruba', value: 'Aruba'},
        {label: 'Bahrian', value: 'Bahrian'},
      ];

      const renderItemOne = item => {
        return (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
          </View>
        );
      };
    
      const renderItemTwo = item => {
        return (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
          </View>
        );
      };
    

  return (
    <ScrollView>
    {/* <Text style={{color:darkColor}}>Bat</Text> */}

    <View style={[styles.dropDownSection]}>
        <View style={styles.dropdownItem}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // selectedStyle={styles.selectedStyle}
            itemTextStyle={styles.itemTextStyle}
            data={dataone}
            // maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'India' : 'India'}
            value={valueone}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValueone(item.value);
              setIsFocus(false);
            }}
            renderItem={renderItemOne}
          />
        </View>
        <View style={styles.dropdownItem}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // selectedStyle={styles.selectedStyle}
            itemTextStyle={styles.itemTextStyle}
            data={datatwo}
            // maxHeight={800}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'India' : 'India'}
            value={valuetwo}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValuetwo(item.value);
              setIsFocus(false);
            }}
            renderItem={renderItemTwo}
          />
        </View>
      </View>


    {/* <Text style={styles.inputlebl}>most dismissals</Text> */}

    {playerData !== ''
      ? playerData.map(item => (
          <>
            <View
              style={[
                styles.playerList,
                globalStyles.customFlexDirection,
              ]}>
              <Image
                source={item.profileImg}
                style={styles.playerProfile}
              />
              <View style={styles.playerInfoSection}>
                <Text style={styles.playername}>{item.name}</Text>
                
                <Text style={styles.playerGameDetails}>
                  {item.gameDetail.split('|')[0]} |
                <Text style={styles.runs}>{item.gameDetail.split('|')[1]} | </Text> 
                {item.gameDetail.split('|')[2]} | <Text style={styles.sr}>{item.gameDetail.split('|')[3]}</Text>
                </Text>
              </View>
              <Text style={styles.rank}>{item.id > 9 ? item.id : `0${item.id}`}</Text>
            </View>
            <View style={styles.progressBarSection}>
              <ProgressBar
                styleAttr="Horizontal"
                indeterminate={false}
                progress={item.progressCount}
                color={primaryBackgroundColor}
              />
            </View>
          </>
        ))
      : ''}
  </ScrollView>
  )
}



const styles = StyleSheet.create({
    inputlebl: {
      color: secondaryColor,
      fontFamily: 'Roboto-Regular',
      fontSize: 15,
      textTransform: 'capitalize',
      marginHorizontal: 10,
      marginVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: borderPrimaryColor,
      paddingBottom: 10,
    },
    playerList: {
      marginHorizontal: 10,
    },
    playerProfile: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
    playername: {
      fontSize: 14,
      color: darkColor,
      fontFamily: 'Roboto-Bold',
      textTransform: 'capitalize',
    },
    playerGameDetails: {
      fontSize: 12,
      fontFamily: 'Roboto-Regular',
      color: darkColor,
      textTransform:'capitalize'
    },
    runs:{
      fontFamily:'Roboto-Bold',
      color:basicColor
    },
    rank: {
      color: waringModalIconColor,
      fontSize: 25,
      fontFamily: 'Roboto-Light',
    },
    progressBarSection: {
      marginVertical: 8,
    },
    sr:{
      textTransform:'uppercase'
    },
    playerInfoSection:{
      flexGrow:1,marginLeft:10
    },
    dropdown: {
      height: 40,
      borderBottomColor: borderPrimaryColor,
      borderBottomWidth: 1,
      color: darkColor,
  
    },
    placeholderStyle: {
      fontSize: 16,
      color: darkColor,
      fontFamily:'Roboto-Regular'
  
    },
    selectedTextStyle: {
      fontSize: 16,
      color: darkColor,
      padding:0,
      margin:0,
      fontFamily:'Roboto-Regular'
  
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      fontFamily:'Roboto-Regular',
  
    },
    itemTextStyle: {
      color: darkColor,
    },
    dropDownSection: {
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom:20
    },
    dropdownItem:{
      width:'48%',
      paddingHorizontal:4,
      height:'100%'
    },
    item: {
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      color:darkColor
    },
    textItem:{
      color:darkColor,
      fontSize:14,
      fontFamily:'Roboto-Regular'
    }
  });
  