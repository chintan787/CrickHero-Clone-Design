import React from 'react'
import {View ,Text} from 'react-native';
import { useNavigate } from 'react-router-native';

export default function ChatWithPlayer() {
    const naviagte = useNavigate();
    let name = naviagte
    console.log("name",name)
  return (
    <View>
    <Text>Chat with player</Text>
  </View>
  )
}
