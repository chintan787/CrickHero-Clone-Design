import React from 'react'
import { TouchableOpacity, View ,StyleSheet ,Text} from 'react-native'
import { useNavigate } from 'react-router-native'

export default function MessageBar(props) {
  const navigate = useNavigate();
  return (
    <View style={styles.messageBar}>
      <Text style={styles.messageText}>{props.message}</Text>
      <TouchableOpacity onPress={() => navigate(`/${props.pageLink ? props.pageLink : ""}`)}>
        <Text style={styles.messageBtnText}>{props.messageButtonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles =  StyleSheet.create({
  messageBar:{
    backgroundColor:'#000',
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    padding:8,
    marginVertical:10,
    borderRadius:5
  },
  messageText:{
    color:'#fff',
    fontFamily:'Roboto-Regular',
    fontSize:14
  },
  messageBtnText:{
    color:'#14B492',
    textTransform:'uppercase',
    fontSize:14,
    fontFamily:'Roboto-Regular',

  }
})
