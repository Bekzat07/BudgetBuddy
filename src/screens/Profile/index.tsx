import {Text, View} from '@gluestack-ui/themed';
import React from 'react';

// components
import CommonLayout from '../../components/CommonLayout';
import CustomButton from '../../components/Button';
import {useAuth} from '../../store/auth';

const Profile = () => {
  const {logout} = useAuth();
  return (
    <CommonLayout>
      <View flex={1} justifyContent="space-between" pb={90}>
        <Text>{'Profile'}</Text>
        <CustomButton onPress={logout}>Logout</CustomButton>
      </View>
    </CommonLayout>
  );
};
export default Profile;
