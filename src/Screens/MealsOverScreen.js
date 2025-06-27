import { View, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummydata';
import MealItem from './MealItem';

const MealsOverScreen = ({ route, navigation }) => {
  const catId = route.params?.categoryId;
  const displayMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));
  const categoryTitle = CATEGORIES.find(category => category.id === catId)?.title;

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const numColumns = isLandscape ? 2 : 1;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return (
      <View style={[styles.mealItemWrapper, isLandscape && styles.mealItemLandscape]}>
        <MealItem {...mealItemProps} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        key={numColumns} // 🔁 Forces FlatList to re-render when columns change
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        numColumns={numColumns}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  listContent: {
    paddingBottom: 16,
  },
  mealItemWrapper: {
    flex: 1,
    marginBottom: 16,
  },
  mealItemLandscape: {
    marginHorizontal: 8,
  },
});

export default MealsOverScreen;
