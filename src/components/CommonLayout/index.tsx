import React, {ReactNode} from 'react';
import {Platform} from 'react-native';
import {VStack} from '@gluestack-ui/themed';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// theme
import {palette} from '../../theme/palette';

interface CommonLayoutProps {
  children: ReactNode;
  paddingHorizontal?: boolean | true;
  bottomDevice?: boolean;
  bgColor?: 'default' | 'green';
}

const CommonLayout = ({
  children,
  paddingHorizontal,
  bottomDevice = false,
  bgColor = 'default',
}: CommonLayoutProps) => {
  const {top, bottom} = useSafeAreaInsets();
  const paddingStyle = {
    paddingTop: Platform.OS === 'ios' ? top : top + 15,
    paddingBottom: bottomDevice
      ? 0
      : Platform.OS === 'ios'
      ? bottom + 5
      : bottom + 15,
  };
  return (
    <VStack
      flex={1}
      backgroundColor={bgColor === 'default' ? palette.white : palette.green}
      paddingHorizontal={!paddingHorizontal ? 16 : 0}
      style={paddingStyle}>
      {children}
    </VStack>
  );
};

export default CommonLayout;
