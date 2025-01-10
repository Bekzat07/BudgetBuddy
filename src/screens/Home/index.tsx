import React from 'react';
import {HStack, Text, VStack, View} from '@gluestack-ui/themed';

// theme
import {palette} from '../../theme/palette';

// assets;

// components
import CommonLayout from '../../components/CommonLayout';
import {useBudget} from '../../store/budget';
import {currencies} from '../../utils/helpers';

const Home = () => {
  const {budget} = useBudget();

  const incomes = budget?.incomes.reduce((acc, e) => acc + e, 0) || 0;
  const expenses = budget?.expenses.reduce((acc, e) => acc + e, 0) || 0;
  const budgetCurrency: string = budget?.currency || 'USD';

  return (
    <CommonLayout paddingHorizontal>
      <HStack
        justifyContent="center"
        borderBottomColor={palette.black}
        pb={16}
        borderBottomWidth={1}>
        <Text fontSize={24} fontWeight={600}>
          Счета
        </Text>
      </HStack>
      <View flex={1} gap={16} p={16}>
        <VStack justifyContent="center" alignItems="center">
          <Text fontSize={32} fontWeight={900}>
            {`${incomes - expenses} ${currencies[budgetCurrency]}`}
          </Text>
          <Text fontSize={20} fontWeight={600}>
            Общий баланс
          </Text>
        </VStack>
        <VStack bg={'$blueGray300'} py={16} px={8} gap={8}>
          <HStack justifyContent="space-between">
            <Text fontSize={20} fontWeight={600}>
              Доходы
            </Text>
            <Text fontSize={22} fontWeight={900}>
              {`${incomes} ${currencies[budgetCurrency]}`}
            </Text>
          </HStack>
          <View borderWidth={1} borderColor={palette.gray} />
          <HStack justifyContent="space-between">
            <Text fontSize={20} fontWeight={600}>
              Расходы
            </Text>
            <Text fontSize={22} fontWeight={900}>
              {`${expenses} ${currencies[budgetCurrency]}`}
            </Text>
          </HStack>
        </VStack>
      </View>
    </CommonLayout>
  );
};

export default Home;
