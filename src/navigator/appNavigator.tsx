import * as React from 'react';

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './tabNavigator';

// screens
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Register from '../screens/Register';

// redux
import {useAuth} from '../store/auth';

export type MainStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  tabNavigator: undefined;
};

export type AppStackScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Onboarding'
>;

const Stack = createNativeStackNavigator<MainStackParamList>();
export const noHeaderStyle = {headerShown: false};
export const gestureDisabled = {gestureEnabled: false};

const AppNavigator = () => {
  const {isAuthenticated} = useAuth();
  console.log('isAuthenticated', isAuthenticated);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{...noHeaderStyle, ...gestureDisabled}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{...noHeaderStyle, ...gestureDisabled}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{...noHeaderStyle, ...gestureDisabled}}
            />
          </>
        ) : (
          <Stack.Screen
            name="tabNavigator"
            component={TabNavigator}
            options={{...noHeaderStyle, ...gestureDisabled}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
