/* eslint-disable react-hooks/exhaustive-deps */
import {HStack, Text, View} from '@gluestack-ui/themed';
import React, {useEffect, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useDebounce} from 'use-debounce';
import {FlatList} from 'react-native';

// components
import CommonLayout from '../../components/CommonLayout';
import TextField from '../../components/TextField';

// theme
import {palette} from '../../theme/palette';
import {useUser} from '../../store/user';
import {getErrorMessage} from '../../utils/getErrorMessage';
import {User} from '../../store/user/types';
import Image from '../../components/Image';

const validationSchema = yup.object({
  name: yup.string().email().required(),
});

const Invoices = () => {
  const {findUser} = useUser();
  const [users, setUsers] = useState<User[]>([]);

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const {watch} = methods;
  const [debouncedQuery] = useDebounce(watch('name'), 1000);

  useEffect(() => {
    const findCurrentUser = async () => {
      try {
        if (debouncedQuery) {
          const user = await findUser(debouncedQuery);
          setUsers(user);
        }
      } catch (error) {
        console.log('error', error);
        getErrorMessage(error);
      }
    };
    findCurrentUser();
  }, [debouncedQuery]);

  const renderItem = (item: User) => {
    return (
      <HStack
        mt={16}
        paddingHorizontal={16}
        alignItems="center"
        gap={16}
        borderRadius={16}
        borderWidth={1}
        borderColor={'gray'}>
        <Image
          image={item.image}
          style={{width: 80, height: 80}}
          width={80}
          height={80}
        />
        <Text>{item.name}</Text>
      </HStack>
    );
  };

  return (
    <FormProvider {...methods}>
      <CommonLayout>
        <HStack
          justifyContent="center"
          borderBottomColor={palette.black}
          pb={16}
          borderBottomWidth={1}>
          <TextField name="name" placeholder="Find user" />
        </HStack>
        <View flex={1}>
          <FlatList
            data={users}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
      </CommonLayout>
    </FormProvider>
  );
};
export default Invoices;
