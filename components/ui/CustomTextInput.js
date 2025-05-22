import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../../Constants/Colors'
const CustomTextInput = ({ children }) => {
    return (
        <TextInput style={styles.numberInput}>
            {children}
        </TextInput>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})