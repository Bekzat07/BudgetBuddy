import {KeyboardAvoidingView, VStack, View} from '@gluestack-ui/themed';
import React, {useEffect, useState} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/appNavigator';
import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';
import {Text, Pressable} from '@gluestack-ui/themed';

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

const validationSchema = yup.object({
  name: yup.string().email().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
});

const Register = () => {
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

  const onSubmit = async (values: any) => {
    console.log('onPress', values);
    navigation.navigate('Login');
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
                <TextField
                  name="name"
                  placeholder="Name"
                  errorReguest={error}
                />
                <TextField
                  name="email"
                  placeholder="Email"
                  errorReguest={error}
                />
                <TextField
                  inputStyle={styles.fontWeight}
                  name="phone"
                  errorReguest={error}
                  phoneVariant
                  placeholder="Phone number"
                />
                <TextField
                  inputStyle={styles.fontWeight}
                  name="password"
                  errorReguest={error}
                  phoneVariant
                  placeholder="Password"
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
                  disabled={!isValid || error}
                  bg={palette.secondary}
                  onPress={() => handleSubmit(onSubmit)}>
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
