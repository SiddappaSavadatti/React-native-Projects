import React from 'react';
import { View, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import { CATEGORIES } from '../data/dummydata';
import CategoryGridTile from './CategoryGridTile';

const CategoriesScreen = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const numColumns = isLandscape ? 4 : 2;

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        key={numColumns} // 👈 force FlatList to remount if orientation changes
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryGridTile
            title={item.title}
            color={item.color}
            categoryId={item.id}
          />
        )}
        numColumns={numColumns}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  contentContainer: {
    paddingBottom: 16,
  },
});

export default CategoriesScreen;
