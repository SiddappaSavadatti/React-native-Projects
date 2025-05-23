import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
 import Ionicons from '@expo/vector-icons/Ionicons';
import { s } from 'react-native-size-matters'
import SendIcon from '../assets/Icons'

const SocialCircle = () => {
  return (
    <View style={styles.circle}>
  <Ionicons name="logo-whatsapp" size={24} color="#178AD9" />
    </View>
  )
}

export default SocialCircle;

const styles = StyleSheet.create({
    circle:{
        backgroundColor:'#fff',
        height:s(46),
        width:s(46),
        borderRadius:s(23),
        justifyContent:'center',
        alignItems:'center',
        borderWidth:s(1),
        borderColor:'#E4E6E8'
        
    }
})