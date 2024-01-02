import { RoomContainer } from './../Screens/Room';
import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './Main';
import { WelcomeContainer } from '../Screens/Welcome';
import { RootScreens } from '../Screens';
import { OnboardingContainer } from '../Screens/Onboarding';
import { LogInContainer } from '../Screens/LogIn';
// import { RegisterNavigator } from "./Register"
import { RegisterContainer } from './../Screens/Register';
import { TransactionHistoryContainer } from '../Screens/TransactionHistory/';
import { InvoiceContainer } from '../Screens/Invoice';

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.ONBOARDING]: undefined;
  [RootScreens.ROOM]: undefined;
  [RootScreens.LOGIN]: undefined;
  [RootScreens.REGISTER]: undefined;
  [RootScreens.TRANSACTION_HISTORY]: undefined;
  [RootScreens.INVOICE]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        // initialRouteName={RootScreens.MAIN}
      >
        <RootStack.Screen
          name={RootScreens.ONBOARDING}
          component={OnboardingContainer}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />

        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.LOGIN}
          component={LogInContainer}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={RootScreens.REGISTER}
          component={RegisterContainer}
          options={{
            headerShown: true,
            headerTitleAlign: 'left',
          }}
        />
        <RootStack.Screen
          name={RootScreens.TRANSACTION_HISTORY}
          component={TransactionHistoryContainer}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={RootScreens.INVOICE}
          component={InvoiceContainer}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
