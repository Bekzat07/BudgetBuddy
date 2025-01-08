import {
  KeyboardAvoidingView,
  Pressable,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';
import {Text} from '@gluestack-ui/themed';

// components
import TextField from '../../components/TextField';
import CustomButton from '../../components/Button';
import CommonLayout from '../../components/CommonLayout';

import {AppStackScreenProps} from '../../navigator/appNavigator';

// theme
import {palette} from '../../theme/palette';

// assets
import ArrowLeftIcon from '../../assets/icons/ArrowLeft';

// redux
import {useAuth} from '../../store/auth';
import {LoginForm} from '../../store/auth/types';

// utils
import {getErrorMessage} from '../../utils/getErrorMessage';
import {save} from '../../utils/storage';

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const {login, isLoading, changeIsAuthenticatedStatus} = useAuth();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const {
    formState: {isValid, errors},
    handleSubmit,
  } = methods;

  const onSubmit = async (values: LoginForm) => {
    try {
      const response = await login(values);
      console.log('response', response);
      await save('accesToken', response.accessToken);
      await save('refreshToken', response.refreshToken);
      changeIsAuthenticatedStatus();
    } catch (error) {
      getErrorMessage(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <CommonLayout>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View gap={24} flex={1} justifyContent="space-between">
              <VStack gap={10}>
                <Pressable py={16} onPress={() => navigation.goBack()}>
                  <ArrowLeftIcon />
                </Pressable>
                <Text fontWeight={900} fontSize={20}>
                  Log in
                </Text>
                <TextField
                  name="email"
                  label="Username/ Email"
                  placeholder="Email"
                  error={errors.email}
                />
                <TextField
                  name="password"
                  label="Password"
                  secureTextEntry
                  placeholder="Password"
                  error={errors.password}
                />
              </VStack>
              <VStack gap={10}>
                <CustomButton
                  isLoading={isLoading}
                  opacity={isValid ? 1 : 0.4}
                  bg={palette.secondary}
                  disabled={!isValid || isLoading}
                  onPress={handleSubmit(onSubmit)}>
                  Login
                </CustomButton>
                <CustomButton
                  bg={palette.greenDark}
                  onPress={() => navigation.navigate('Register')}>
                  Create An Account
                </CustomButton>
              </VStack>
            </View>
          </TouchableWithoutFeedback>
        </CommonLayout>
      </KeyboardAvoidingView>
    </FormProvider>
  );
};

export default Login;
