import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RegisterContainer } from "../../Screens/Register";

const Tab = createMaterialTopTabNavigator();

// @refresh reset
export const RegisterNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'black',
      tabBarLabelStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#434343'
      },
      tabBarIndicatorStyle: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
      },
      tabBarStyle: {
        height: 75,
      },
    }}
    >
      <Tab.Screen
        name="Register"
        component={RegisterContainer}
      />
    </Tab.Navigator>
  );
};
