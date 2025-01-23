import {HStack, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

// components
import CommonLayout from '../../components/CommonLayout';
import TextField from '../../components/TextField';

// theme
import {palette} from '../../theme/palette';

const validationSchema = yup.object({
  name: yup.string().email().required(),
});

const Invoices = () => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const {} = methods;

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
          <Text>{'Je'}</Text>
        </View>
      </CommonLayout>
    </FormProvider>
  );
};
export default Invoices;
