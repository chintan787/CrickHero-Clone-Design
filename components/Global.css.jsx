import { StyleSheet } from "react-native";
 
export const primaryColor = "#14B393"; //sea gree
export const secondaryColor ="#797E82"; //gray color
export const darkColor = "#2A373F"; //light black shade
export const lightColor = "#fff";
export const warningColor = "#AD2112"; //brick red //A32517
export const notesColor = "#CFCFCF";
export const basicColor = "#000";


export const primaryBackgroundColor = "#14B493" ; //sea green

export const secondaryBackgroundColor = "#AD2112"; //Fire Brick [red shade]
export const primaryLightBackgroundColor = "#B9E8DE" //light sea green color [insights bar]
export const captionBackgroundColor = "#0A86A0" //Aqua Color
export const screenBackgroundColor = "#EFEFEF";
export const lightBackgroundColor = "#fff"; 
export const darkBackgroundColor = "#000";
export const dropDownBackgroundColor = "#F2F2F2";
export const primaryIconBackgroundColor = "#C5EDE5";
export const tableHeadingBackgroundColor ="#88D9CA";

export const secondaryIconBackgroundColor = "#CBCFD2";
export const FilterHeaderBackgroundColor = "#14212A"; //black


export const primaryTabActiveColor = "#FFBC01";
export const borderPrimaryColor = "#ccc";
export const borderSecondaryColor = "#A1A6AA"; 
export const borderAutoFocusColor ="#14B493"  //sea green


export const iconPrimaryColor = "#14B393";
export const iconSecondaryColor = "#fff";
export const iconBasicColor = "#000"
//717880
export const drawerIconHeight = 20;
export const drawerIconWidth = 20;

export const waringModalIconColor = "#F39F18";
export const waringModalIconBackgroundColor = "#FFE8C6";

export const statusbarColor = "#96352C";
export const grayButtonColor = '#A1A6AA'

// active inactive tabs

export const primaryActiveTab = "#fff";
export const primaryInActiveTab = "#DD8D84" 
export const secondaryActiveTab = "#fff";
export const secondaryInAciveTab = "#72797F";

export const innerActiveBackgroundColor = "#14B492";
export const innerInActiveBackgroundColor = "#ccc";




export const globalStyles = StyleSheet.create({

    // in one row button 
    buttonSection:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginHorizontal:30,
        marginVertical:10
        },

        // with bg color
        buttonwithFieldColor:{
        backgroundColor: primaryBackgroundColor,
        textAlign: 'center',
        padding: 10,
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'uppercase',
    },

    // button with border color
    buttonWithBorder:{
        borderWidth:1,
        borderColor:'#14B492',
        textAlign: 'center',
        padding: 10,
        color: '#14B492',
        fontSize: 15,
        fontFamily:'Roboto-Medium',
        textTransform: 'uppercase',
        backgroundColor:"#fff"
    },



    // full width buttons
    primaryButton:{
        padding: 15,
        backgroundColor: '#14B492',
        borderRadius: 4,
    },
    primaButtonText:{
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 5,
        textTransform: 'uppercase',
        fontFamily:'Roboto-Medium'
    },
    primaryButtonWithIcon:{
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#14B492',
        borderRadius: 4,
    },


    secondaryButtonWithIcon:{
        marginBottom: 10,
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    secondaryButtonText:{
        color: '#000',
        textAlign: 'center',
        paddingLeft: 5,
        textTransform: 'uppercase',
        fontFamily:'Roboto-Medium'
    },


    // auto width button
    primaryButtonWithFixedWidth:{
    backgroundColor: '#14B492',
    textAlign: 'center',
    padding: 15,
    color: '#fff',
    fontSize: 15,
    fontFamily:'Roboto-Medium',
    textTransform: 'uppercase',
    paddingHorizontal:25
    },
    secondaryLinkButtom:{
        color: '#14B492',
        textTransform: 'uppercase',
        fontSize: 15,
        fontFamily: 'Roboto-Medium',
        textAlign: 'center',
        marginVertical: 15,
    },


// color link text 
coloredLinkText:{
    color:"#14B492",
    textAlign:'center',
    textTransform:'uppercase',
    fontFamily:'Roboto-Medium',

},
coloredLinkTextWithUnderline :{
    color: '#14B492',
   
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto-Bold',
},

// red color link text
modalLinkText:{
    color: '#A32517',
    textTransform: 'uppercase',
    fontSize: 14,
    marginBottom: 16, 
    fontFamily:'Roboto-Medium',
    textAlign:'center'
},
pageLinkText:{
    color: '#A32517',
    textDecorationLine: 'underline',
    fontFamily:'Roboto-Regular',
    fontSize:13
},

// color link text with capitalize
linkText:{
    color:"#14B492",
    textAlign:'center',
    textTransform:'capitalize',
    textDecorationLine:'underline'
},

// input with border
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

//   input Without Border
inputWithoutborder:{
    height: 35,
    paddingLeft:6,
    // margin: 10,
    padding:10,
    color:"#717880",
    fontSize:14,
    fontFamily:'Roboto-Regular'
    
    
},

// pageWidth
pageWidth:{
    paddingHorizontal:15
},

// screen paragraph css
para:{
    color: '#74797F',
//    padding:10,
    fontSize: 15,
    textAlign: 'center',
    fontFamily:'Roboto-Regular'
},

//red badges

liveBadges:{
backgroundColor:'#AD2112',
color:"#fff",
padding:6,
textTransform:'uppercase',
borderRadius:15,
fontSize:10,
// fontFamily:'Roboto-Regular'
fontFamily:'Roboto-Medium'
},

// black background
customBadge: {
    backgroundColor: '#14212A',
    color: '#fff',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 15,
    fontSize: 12,
    fontFamily:'Roboto-Bold',
    textTransform: 'uppercase',
  },

//  c green background
proBadge:{
    backgroundColor: '#14B393',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 20,
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
},

// yellow background
freeBadge:{
    color: '#000',
    backgroundColor: '#F99F0D',
    alignSelf: 'flex-end',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    textTransform: 'uppercase',
    fontSize:13,
    fontFamily:'Roboto-Medium'
},

// tournament buuton
// with bg color
tournamentButtonwithFieldColor:{
    backgroundColor: '#14B492',
    textAlign: 'center',
    paddingVertical:6,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 11,
    fontFamily:'Roboto-Medium',
    textTransform: 'uppercase',
    borderRadius:4,
},

tournamentButtonwithBorderColor:{
    borderWidth:1,
    borderColor:'#F2F2F2',
    backgroundColor: '#F2F2F2',
    textAlign: 'center',
    paddingVertical:6,
    paddingHorizontal: 10,
    color: '#797E82',
    fontSize: 11,
    fontFamily:'Roboto-Medium',
    textTransform: 'uppercase',
    borderRadius:4
},


// flexDirection:'row'
customFlexDirectionWithJustify:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
},

customFlexDirection:{
    flexDirection:'row',
    alignItems:'center',
},
inputLabel:{
    color: '#14B492',
    fontSize: 12,
    fontFamily:'Roboto-Regular'
},

// 
paragraph:{
    textAlign: 'center',
    color: '#919191',
    fontSize: 14,
    alignItems: 'center',
fontFamily:'Roboto-Regular'
},

modalParagraph:{
    color: '#7D8286',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 24,
    textAlign:'center'
},


headingh1:{
    color: '#000',
    fontSize: 25,
    fontFamily:'Roboto-Black',
    textAlign:'center'
},

headingH3:{
  
    color: '#2A3740',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
},
headingH4:{
    color: '#000',
    fontSize: 16,
   fontFamily:'Roboto-Medium',
    textTransform: 'capitalize',
},


drawerBackground:{
    backgroundColor:"#fff"
},

pageBackgroundColor:{
    backgroundColor:'#EFEFEF'
},




// match single page 

insightHeading: {
    color: '#000',
    fontSize: 15,
    fontFamily:'Roboto-Medium'
  },

  teamName: {
    color: '#000',
    fontSize: 14,
    fontFamily:'Roboto-Medium',
    flexGrow: 1,
  },
  pageHeading: {
    color: '#000',
    fontSize: 15,
    fontFamily:'Roboto-Bold',
    textTransform: 'uppercase',
  },


  pageContainer:{
    flex: 1,
    backgroundColor: '#EFEFEF'
  }


})