import React from 'react';
import CategoriesScreen from './src/Screens/CategoriesScreen';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverScreen from './src/Screens/MealsOverScreen';
import MealDetailScreen from './src/Screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }
        }>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: 'Meal Categories',
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsOverScreen}
          />
          <Stack.Screen  name='MealDetails' component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
