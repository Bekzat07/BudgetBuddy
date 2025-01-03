/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Box, HStack, Pressable, Text, View} from '@gluestack-ui/themed';
import {TouchableOpacity} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FormProvider, useForm} from 'react-hook-form';

// components
import CommonLayout from '../../components/CommonLayout';
import TextField from '../../components/TextField';

// assets
import {styles} from './styles';

// theme
import {palette} from '../../theme/palette';
import {useBudget} from '../../store/budget';
import CustomButton from '../../components/Button';

const validationSchema = yup.object({
  price: yup.string().email().required(),
});

const Budget = () => {
  const {addExpense, addIncome, isLoading} = useBudget();
  const [inputValue, setInputValue] = useState<string>('');
  const [budgetType, setBudgetType] = useState<string>('');

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

  const onSubmit = async () => {
    console.log('onSubmit');

    try {
      if (budgetType === 'Доходы') {
        await addIncome({
          incomes: +inputValue,
          currency: 'Tenge',
          userId: '123',
        });
      } else if (budgetType === 'Расходы') {
        await addExpense({
          expenses: +inputValue,
          currency: 'Tenge',
          userId: '123',
        });
      }
      setInputValue('');
      setValue('price', '');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <CommonLayout>
        <View flex={1} justifyContent="center" alignItems="center">
          <HStack
            mb={16}
            bg={palette.gray}
            borderColor={palette.gray}
            borderWidth={3}
            gap={6}>
            <Pressable onPress={() => setBudgetType('Доходы')}>
              <Text
                bg={budgetType === 'Доходы' ? palette.black : palette.gray}
                color={palette.white}
                p={4}>
                {'Доходы'}
              </Text>
            </Pressable>
            <Pressable onPress={() => setBudgetType('Расходы')}>
              <Text
                p={4}
                color={palette.white}
                bg={budgetType === 'Расходы' ? palette.black : palette.gray}>
                {'Расходы'}
              </Text>
            </Pressable>
          </HStack>
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
            <CustomButton
              isLoading={isLoading}
              style={styles.digitButton}
              disabled={isLoading}
              opacity={isValid ? 0.4 : 1}
              onPress={onSubmit}>
              <Text style={styles.digitText}>{'Ok'}</Text>
            </CustomButton>
          </View>
        </View>
      </CommonLayout>
    </FormProvider>
  );
};

export default Budget;
