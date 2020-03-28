import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/homeScreen';
import AddingItems from './../screens/addingItems';
import ItemPage from '../screens/itemPage';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
          }}
        />
         <Stack.Screen
          name="AddingItems"
          component={AddingItems}
          options={{
            header: () => null,
          }}
        />
         <Stack.Screen
          name="ItemPage"
          component={ItemPage}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigationContainer;
