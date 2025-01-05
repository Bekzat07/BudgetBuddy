import React, {useEffect} from 'react';

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

// utils
import {load} from '../utils/storage';
import {useUser} from '../store/user';

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
  const {isAuthenticated, changeIsAuthenticatedStatus} = useAuth();
  const {getUser} = useUser();

  useEffect(() => {
    const initialState = async () => {
      try {
        const token = await load('accesToken');
        if (token) {
          const res = await getUser();
          changeIsAuthenticatedStatus();
          console.log('res', res);
        }
      } catch (error) {
        console.log('error', error);
        changeIsAuthenticatedStatus();
        // navigate to login or register screen
        // navigation.navigate('Login'); // for example
      }
    };
    initialState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
