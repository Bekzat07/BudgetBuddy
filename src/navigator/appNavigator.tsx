import React, {useEffect} from 'react';

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './tabNavigator';

// screens
import Login from '../screens/Login';
import Register from '../screens/Register';

// redux
import {useAuth} from '../store/auth';

// utils
import {load} from '../utils/storage';
import {useBudget} from '../store/budget';
import {setAuthHeader} from '../init/axios/baseService';
import {getErrorMessage} from '../utils/getErrorMessage';
import {useUser} from '../store/user';

export type MainStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  tabNavigator: any;
};

export type AppStackScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Onboarding'
>;

const Stack = createNativeStackNavigator<MainStackParamList>();
export const noHeaderStyle = {headerShown: false};
export const gestureDisabled = {gestureEnabled: false};

const AppNavigator = () => {
  const {isAuthenticated, changeIsAuthenticatedStatus, user} = useAuth();
  const {getBudget} = useBudget();
  const {getUser} = useUser();

  useEffect(() => {
    const initialState = async () => {
      try {
        const token = await load('accesToken');
        setAuthHeader(token);
        if (token) {
          changeIsAuthenticatedStatus();
          await getUser();
          await getBudget();
        }
      } catch (error) {
        console.log('error', error);
        getErrorMessage(error);
      }
    };
    initialState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <>
            {/* <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{...noHeaderStyle, ...gestureDisabled}}
            /> */}
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
