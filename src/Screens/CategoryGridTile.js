import React from 'react';
import { View, Pressable, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const tileSize = (width - 3 * 16) / 2; // 16px margin on both sides + 16px between tiles

const CategoryGridTile = ({ color, title , categoryId,}) => {
    const navigation = useNavigation();
  return (
    <View style={[styles.gridItem, { backgroundColor: color, width: tileSize, height: tileSize }]}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => navigation.navigate('Meals', {
            categoryId: categoryId,
        })} // Adjust navigation target as needed
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    margin: 8,
    borderRadius: 12,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
