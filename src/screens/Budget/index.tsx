import React from 'react';
import CommonLayout from '../../components/CommonLayout';
import {AddIcon, HStack, Pressable, Text, VStack} from '@gluestack-ui/themed';
import {palette} from '../../theme/palette';
import {View} from '@gluestack-ui/themed';
import Coins from '../../assets/icons/Coins';

const Budget = () => {
  return (
    <CommonLayout>
      <View flex={1} gap={16}>
        <HStack>
          <Pressable bg={palette.tertriary} padding={6} borderRadius={12}>
            <HStack alignItems="center">
              <Text fontSize={14}>Budget</Text>
              <AddIcon size="xs" />
            </HStack>
          </Pressable>
        </HStack>
        <HStack
          justifyContent="space-between"
          backgroundColor={palette.primary}
          h={120}
          borderRadius={24}
          padding={16}>
          <VStack>
            <Text color={palette.white} fontSize={10}>
              Total cash
            </Text>
            <Text color={palette.white} fontSize={24}>
              67$
            </Text>
            <Text color={palette.white} fontSize={10}>
              You saved $550 in this month $800 goal
            </Text>
          </VStack>
          <Coins />
        </HStack>
      </View>
    </CommonLayout>
  );
};

export default Budget;
