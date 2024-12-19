import React, {useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {TextInputProps, TextStyle, View, ViewStyle} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {HStack, Input, InputField, InputSlot} from '@gluestack-ui/themed';

// assets
import Eye from '../../assets/icons/Eye';

// style
import styles, {inputWrapper} from './styles';
import {palette} from '../../theme/palette';
import {Text} from '@gluestack-ui/themed';
import EyeClosed from '../../assets/icons/EyeClosed';

// assets

export interface TextFieldProps extends TextInputProps {
  style?: ViewStyle | ViewStyle[];
  backgroundStyle?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
  textInputStyle?: TextStyle | TextStyle[];
  name: string;
  defaultValue?: string;
  error?: any | undefined;
  mask?: string;
  label?: string;
  placeholder?: string;
  prefix?: string;
  autoTransliterate?: boolean;
  rightComponent?: JSX.Element;
  inputLabelStyle?: TextStyle | TextStyle[];
  search?: boolean;
  maxLength?: number;
  greenBorder?: boolean;
  phoneVariant?: boolean;
  plusPhoneVariant?: boolean;
  isDisabled?: boolean;
}

export default function TextField(props: TextFieldProps) {
  const {
    style: styleOverride,
    backgroundStyle,
    secureTextEntry,
    name,
    defaultValue = '',
    inputStyle,
    error,
    label,
    prefix,
    search,
    placeholder,
    greenBorder,
    maxLength,
    phoneVariant = false,
    plusPhoneVariant = true,
    isDisabled = false,
    ...rest
  } = props;

  const {control} = useFormContext();

  const [passwordVisibility, setPasswordVisibility] = useState(secureTextEntry);

  const togglePasswordIcon = () => {
    setPasswordVisibility(prevState => !prevState);
  };

  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => {
        return (
          <>
            <View style={styleOverride}>
              {label && (
                <HStack space="xs">
                  <Text>{label}</Text>
                </HStack>
              )}
              <View
                style={[
                  backgroundStyle,
                  inputWrapper({
                    error: error,
                    search: search,
                    greenBorder: greenBorder,
                  }),
                ]}>
                <Input
                  variant="outline"
                  borderWidth={0}
                  h={52}
                  w={'100%'}
                  isReadOnly={isDisabled}>
                  {phoneVariant ? (
                    <MaskInput
                      style={[styles.maskInput, inputStyle]}
                      value={value}
                      placeholder={placeholder}
                      keyboardType="numeric"
                      placeholderTextColor={palette.gray}
                      onChangeText={(formatted: string) => {
                        if (!value && prefix) {
                          onChange(`${prefix} ${formatted}`);
                        } else {
                          onChange(formatted);
                        }
                      }}
                      mask={
                        plusPhoneVariant
                          ? [
                              '+',
                              '(',
                              /\d/,
                              /\d/,
                              /\d/,
                              ')',
                              ' ',
                              /\d/,
                              /\d/,
                              /\d/,
                              '-',
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                            ]
                          : [
                              '(',
                              /\d/,
                              /\d/,
                              /\d/,
                              ')',
                              ' ',
                              /\d/,
                              /\d/,
                              /\d/,
                              '-',
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                            ]
                      }
                    />
                  ) : (
                    <InputField
                      marginRight={15}
                      maxLength={maxLength}
                      value={value}
                      color={palette.black}
                      secureTextEntry={passwordVisibility}
                      placeholder={placeholder}
                      onChangeText={(formatted: string) => {
                        if (!value && prefix) {
                          onChange(`${prefix} ${formatted}`);
                        } else {
                          onChange(formatted);
                        }
                      }}
                      {...rest}
                    />
                  )}

                  {secureTextEntry && (
                    <InputSlot
                      onPress={togglePasswordIcon}
                      pr={20}
                      hitSlop={{left: 5, right: 5, top: 5, bottom: 5}}>
                      {passwordVisibility ? <Eye /> : <EyeClosed />}
                    </InputSlot>
                  )}
                </Input>
              </View>
            </View>
          </>
        );
      }}
      name={name}
      defaultValue={defaultValue}
    />
  );
}
