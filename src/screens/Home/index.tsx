import React from 'react';
import {
  AddIcon,
  HStack,
  Pressable,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';

// theme
import {palette} from '../../theme/palette';

// assets
import Coins from '../../assets/icons/Coins';

// components
import CommonLayout from '../../components/CommonLayout';

const Home = () => {
  return (
    <CommonLayout>
      <View flex={1} gap={16}>
        <HStack>
          <Pressable bg={palette.tertriary} padding={6} borderRadius={12}>
            <HStack alignItems="center">
              <Text fontSize={14}>Add bank</Text>
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

export default Home;
