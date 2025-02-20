import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screen1, Screen2, Screen3, Screen4 } from '../Components/Component41';

const Tab = createBottomTabNavigator();

export function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }}
      >
        <Tab.Screen
          name="Screen1"
          component={Screen1}
          options={{ tabBarLabel: 'Screen 1' }} 
        />
        <Tab.Screen
          name="Screen2"
          component={Screen2}
          options={{ tabBarLabel: 'Screen 2' }}
        />
        <Tab.Screen
          name="Screen3"
          component={Screen3}
          options={{ tabBarLabel: 'Screen 3' }} 
        />
        <Tab.Screen
          name="Screen4"
          component={Screen4}
          options={{ tabBarLabel: 'Screen 4' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Task41;
