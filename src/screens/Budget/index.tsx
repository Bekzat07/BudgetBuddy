/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Box, Text, View} from '@gluestack-ui/themed';
import {TouchableOpacity} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

// components
import CommonLayout from '../../components/CommonLayout';

// assets
import {styles} from './styles';
import {FormProvider, useForm} from 'react-hook-form';
import TextField from '../../components/TextField';

const validationSchema = yup.object({
  price: yup.string().email().required(),
});

const Budget = () => {
  const [inputValue, setInputValue] = useState('');

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const {
    formState: {isValid},
    setValue,
  } = methods;

  useEffect(() => {
    setValue('price', inputValue);
  }, [inputValue]);

  return (
    <FormProvider {...methods}>
      <CommonLayout>
        <View flex={1} justifyContent="center" alignItems="center">
          <Box width={250} pb={16}>
            <TextField name="price" />
          </Box>
          <View style={styles.pinCodeContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(digit => (
              <TouchableOpacity
                key={digit}
                style={styles.digitButton}
                onPress={() => setInputValue(inputValue + digit)}>
                <Text style={styles.digitText}>{digit}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.pinCodeContainer}>
            <TouchableOpacity
              style={styles.digitButton}
              onPress={() => setInputValue(inputValue.slice(0, -1))}>
              <Text style={styles.digitText}>{'X'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.digitButton}
              onPress={() => setInputValue(inputValue + '0')}>
              <Text style={styles.digitText}>{0}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.digitButton} disabled={!isValid}>
              <Text style={styles.digitText}>{'Ok'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CommonLayout>
    </FormProvider>
  );
};

export default Budget;
