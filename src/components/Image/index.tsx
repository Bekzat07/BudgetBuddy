import React, {FC} from 'react';
import {View} from '@gluestack-ui/themed';
import FastImage from 'react-native-fast-image';

// assets
import Download from '../../assets/icons/Dowload';
import User from '../../assets/icons/User';

// styles
import styles from './styles';

interface ImageProps {
  image: string;
}

const Image: FC<ImageProps> = ({image}) => {
  return (
    <View>
      {image ? (
        <FastImage source={{uri: image}} style={styles.image} />
      ) : (
        <User width={100} height={100} style={styles.logo} />
      )}

      <View position="absolute" right={0} bottom={0}>
        <Download width={32} color={'black'} />
      </View>
    </View>
  );
};
export default Image;
