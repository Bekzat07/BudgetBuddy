import React, {FC} from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';
import {palette} from '../../theme/palette';

type GluestackButtonProps = React.ComponentProps<typeof Button>;

interface CustomButtonProps extends Omit<GluestackButtonProps, 'children'> {
  children: React.ReactNode;
  textColor?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  textColor,
  ...props
}) => {
  return (
    <Button h={52} width={'100%'} {...props}>
      <ButtonText color={textColor || palette.white}>{children}</ButtonText>
    </Button>
  );
};

export default CustomButton;
