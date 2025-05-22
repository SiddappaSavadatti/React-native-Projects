import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Constants/Colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:  Colors.accent500,
        padding:50,
        margin:40,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    },
    numberText:{
        color: Colors.accent500,
        fontSize:40,
        
    }
})