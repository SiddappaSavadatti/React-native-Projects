import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetails = ({ duration, complexity, affordability , style, textStyle}) => {
    return (
        <View style={[styles.infoContainer, style]}>
            <Text style={[styles.mealDetail, textStyle]}>{duration}m</Text>
            <Text style={[styles.mealDetail, textStyle]}>{complexity?.toUpperCase()}</Text>
            <Text style={[styles.mealDetail, textStyle]}>{affordability?.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
    mealDetail: {
        fontSize: 14,
        color: '#666',
    },
})