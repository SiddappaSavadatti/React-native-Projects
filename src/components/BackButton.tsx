import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons';

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="chevron-back" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ECF0F4",
        height: s(32),
        width: s(32),
        borderRadius: s(16),
        justifyContent:'center',
        alignItems:'center',
    }
})