import React from 'react';
import CommonLayout from '../../components/CommonLayout';
import {Text, View} from '@gluestack-ui/themed';

// palette
import {palette} from '../../theme/palette';

// assets
import Cuate from '../../assets/icons/Cuate';
import CustomButton from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/appNavigator';

const Onboarding = () => {
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  return (
    <CommonLayout bgColor="green">
      <View flex={1} justifyContent="space-between" alignItems="center">
        <View pt={24}>
          <Cuate />
        </View>
        <Text color={palette.white}>
          {'Create your budget and visualize your progress'}
        </Text>
        <View w={'100%'} gap={16}>
          <CustomButton
            bg={palette.secondary}
            onPress={() => navigation.navigate('Register')}>
            Create an account
          </CustomButton>
          <CustomButton
            bg={palette.greenDark}
            onPress={() => navigation.navigate('Login')}>
            Login
          </CustomButton>
        </View>
      </View>
    </CommonLayout>
  );
};

export default Onboarding;
