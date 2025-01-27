import React, {FC} from 'react';
import {View} from '@gluestack-ui/themed';
import FastImage from 'react-native-fast-image';

// assets
import Download from '../../assets/icons/Dowload';
import User from '../../assets/icons/User';

// styles
import styles from './styles';
import {ImageStyle} from 'react-native';

interface ImageProps {
  image: string;
  dowloadImage?: boolean;
  style?: ImageStyle | ImageStyle[];
  width?: number;
  height?: number;
}

const Image: FC<ImageProps> = ({
  image,
  dowloadImage = false,
  style,
  width,
  height,
}) => {
  return (
    <View>
      {image ? (
        <FastImage source={{uri: image}} style={[styles.image, style]} />
      ) : (
        <User
          width={width || 100}
          height={height || 100}
          style={[styles.logo]}
        />
      )}

      {dowloadImage && (
        <View position="absolute" right={0} bottom={0}>
          <Download width={32} color={'black'} />
        </View>
      )}
    </View>
  );
};
export default Image;
