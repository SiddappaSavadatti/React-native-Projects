import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummydata';
import MealDetails from './MealDetails';
import List from '../Components/mealDetail/List';
import Subtitle from '../Components/mealDetail/Subtitle';

const MealDetailScreen = ({ route, navigation }) => {
    const mealId = route.params?.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

 

    return (
        <ScrollView style={styles.rootContainer}>
            <View
                style={[
                    styles.imageContainer,
                    isLandscape && styles.imageContainerLandscape
                ]}
            >
                <Image
                    style={[
                        styles.image,
                        isLandscape && styles.imageLandscape
                    ]}
                    source={{ uri: selectedMeal.imageUrl }}
                />
            </View>


            <Text
                style={[
                    styles.title,
                    isLandscape && { fontSize: 20 } // 👈 Slightly smaller in landscape
                ]}
            >
                {selectedMeal.title}
            </Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View
                    style={[
                        styles.listContainer,
                        isLandscape && { width: '60%' } // 👈 Narrower list on wide screens
                    ]}
                >
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    imageContainer: {
        width: '100%',
        height: 350,
        borderRadius: 18,
        marginBottom: 8,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        elevation: 4,
        alignItems: 'center', // ensure image centers in landscape
    },

    imageContainerLandscape: {
        width: '100%',
        height: 200, // shrink height
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 18,
    },

    imageLandscape: {
        width: '60%',  // shrink width
        height: '100%',
        borderRadius: 8,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});
