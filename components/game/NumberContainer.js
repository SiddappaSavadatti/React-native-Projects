import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Constants/Colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer;

const { width, height } = Dimensions.get('window');

const padding = width < 360 ? 18 : width < 400 ? 22 : width < 600 ? 28 : 30;
const margin = width < 360 ? 20 : width < 400 ? 22  : 30;
const borderWidth = width < 400 ? 2 : 3;
const borderRadius = width < 400 ? 6 : 8;
const fontSize = width < 380 ? 36 : width < 600 ? 40 : 48;

const styles = StyleSheet.create({
    container:{
        borderWidth:borderWidth,
        borderColor:  Colors.accent500,
        padding:padding,
        margin:margin,
        borderRadius:borderRadius,
        alignItems:'center',
        justifyContent:'center',
    },
    numberText:{
        color: Colors.accent500,
        fontSize:fontSize,
        
    }
})