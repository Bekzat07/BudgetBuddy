import {Image, Text, View} from '@gluestack-ui/themed';
import React from 'react';

// components
import CommonLayout from '../../components/CommonLayout';
import CustomButton from '../../components/Button';
import {useAuth} from '../../store/auth';
import {HStack} from '@gluestack-ui/themed';
import {palette} from '../../theme/palette';
import {useUser} from '../../store/user';

const Profile = () => {
  const {logout} = useAuth();
  const {currentUser} = useUser();

  return (
    <CommonLayout paddingHorizontal>
      <HStack
        justifyContent="center"
        borderBottomColor={palette.black}
        pb={16}
        borderBottomWidth={1}>
        <Text fontSize={24} fontWeight={600}>
          Profile
        </Text>
      </HStack>
      <View flex={1} justifyContent="space-between" pb={90} px={16}>
        <Image
          my={16}
          h={120}
          w={120}
          source={{uri: currentUser?.image}}
          borderRadius={999}
          alignSelf="center"
        />
        <CustomButton onPress={logout}>Logout</CustomButton>
      </View>
    </CommonLayout>
  );
};
export default Profile;
