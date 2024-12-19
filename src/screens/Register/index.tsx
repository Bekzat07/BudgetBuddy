import {KeyboardAvoidingView, VStack, View} from '@gluestack-ui/themed';
import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/appNavigator';
import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';
import {Text, Pressable} from '@gluestack-ui/themed';
import {getErrorMessage} from '../../utils/getErrorMessage';

// components
import TextField from '../../components/TextField';
import CustomButton from '../../components/Button';
import CommonLayout from '../../components/CommonLayout';

// styles
import styles from './styles';

// theme
import {palette} from '../../theme/palette';

// assets
import ArrowLeftIcon from '../../assets/icons/ArrowLeft';

// redux
import {RegisterForm} from '../../store/auth/types';
import {useAuth} from '../../store/auth';

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
});

const Register = () => {
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const {register, isLoading} = useAuth();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  });

  const {
    formState: {isValid, errors},
    handleSubmit,
  } = methods;
  const onSubmit = async (values: RegisterForm) => {
    try {
      await register(values);
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
                  Sign up
                </Text>
                <TextField name="name" placeholder="Name" error={errors.name} />
                <TextField
                  name="email"
                  placeholder="Email"
                  error={errors.email}
                />
                <TextField
                  error={errors.phone}
                  inputStyle={styles.fontWeight}
                  name="phone"
                  phoneVariant
                  placeholder="Phone number"
                />
                <TextField
                  error={errors.password}
                  inputStyle={styles.fontWeight}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />
              </VStack>
              <VStack gap={10}>
                <Text textAlign="center">
                  Already have an account?
                  <Text
                    color={palette.primary}
                    onPress={() => navigation.navigate('Login')}>
                    {' Login'}
                  </Text>
                </Text>
                <CustomButton
                  opacity={!isValid ? 0.4 : 1}
                  isLoading={isLoading}
                  disabled={!isValid}
                  bg={palette.secondary}
                  onPress={handleSubmit(onSubmit)}>
                  Next
                </CustomButton>
              </VStack>
            </View>
          </TouchableWithoutFeedback>
        </CommonLayout>
      </KeyboardAvoidingView>
    </FormProvider>
  );
};

export default Register;
