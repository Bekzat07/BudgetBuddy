import React from 'react';
import {
  AddIcon,
  HStack,
  Pressable,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';

// components
import CommonLayout from '../../components/CommonLayout';

// theme
import {palette} from '../../theme/palette';

// assets
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Budget = () => {
  return (
    <CommonLayout>
      <View flex={1} gap={16} justifyContent="center" alignItems="center">
        <HStack>
          <Pressable bg={palette.tertriary} padding={6} borderRadius={12}>
            <HStack alignItems="center">
              <Text fontSize={14}>Budget</Text>
              <AddIcon size="xs" />
            </HStack>
          </Pressable>
        </HStack>
        <View style={styles.pinCodeContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(digit => (
            <TouchableOpacity key={digit} style={styles.digitButton}>
              <Text style={styles.digitText}>{digit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </CommonLayout>
  );
};

export default Budget;
