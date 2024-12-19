import {
  KeyboardAvoidingView,
  Pressable,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React, {useEffect, useState} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

// components
import TextField from '../../components/TextField';
import CustomButton from '../../components/Button';
import CommonLayout from '../../components/CommonLayout';

import {AppStackScreenProps} from '../../navigator/appNavigator';
import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';
import {Text} from '@gluestack-ui/themed';
import {palette} from '../../theme/palette';
import ArrowLeftIcon from '../../assets/icons/ArrowLeft';

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const [error, setError] = useState(false);
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const {
    formState: {isValid},
    handleSubmit,
    watch,
  } = methods;

  const formData = watch();

  useEffect(() => {
    setError(false);
  }, [formData.email, formData.password]);

  const onPress = async (values: any) => {
    console.log('onPress', values);
    navigation.navigate('tabNavigator');
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
                  errorReguest={error}
                />
                <TextField
                  name="password"
                  label="Password"
                  errorReguest={error}
                  secureTextEntry
                  placeholder="Password"
                />
              </VStack>
              <VStack gap={10}>
                <CustomButton
                  opacity={isValid ? 1 : 0.4}
                  bg={palette.secondary}
                  disabled={!isValid || error}
                  onPress={handleSubmit(onPress)}>
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
