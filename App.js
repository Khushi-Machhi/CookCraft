import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return <Drawer.Navigator
  screenOptions={{  
    headerStyle: { backgroundColor: 'rgb(63, 59, 56)' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: 'rgb(104, 95, 90)' },
    drawerContentStyle: { backgroundColor: 'rgb(74, 66, 61)'},
    drawerActiveTintColor: 'black',
    drawerInactiveTintColor: 'white',
    drawerActiveBackgroundColor: 'rgb(213, 207, 202)',
  }}
  >
    <Drawer.Screen 
      name="Categories" 
      component={CategoriesScreen} 
      options={{
        title: 'All Categories',
        drawerIcon: ({color,size}) => (
        <Ionicons name="list" color={color} size={size} />
        )
      }}
    />
    <Drawer.Screen 
      name="Favorites" 
      component={FavoritesScreen} 
      options={{
        drawerIcon: ({color,size}) => (
        <Ionicons name="star" color={color} size={size} />
        )
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
    <StatusBar style='dark' />

    <FavoritesContextProvider>

    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
        headerStyle: { backgroundColor: 'rgb(63, 59, 56)' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: 'rgb(104, 95, 90)' } 
        }}
      >
        <Stack.Screen 
          // name="MealsCategories" 
          // component={CategoriesScreen} 
          name = "Drawer"
          component={DrawerNavigator}
          options={{
            // title: 'All Categories',  
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverviewScreen}
          // options={( { route , navigation } ) =>{
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   };
          // }} 
        />

        <Stack.Screen 
          name="Meal Detail" 
          component={MealDetailScreen}
          options={{
            title: 'About the Meal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    </FavoritesContextProvider>

    </>
  );
}

const styles = StyleSheet.create({
  
});
