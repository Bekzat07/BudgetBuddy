import {Image, Pressable, Text, View} from '@gluestack-ui/themed';
import React, {useState} from 'react';

// components
import CommonLayout from '../../components/CommonLayout';
import CustomButton from '../../components/Button';
import {useAuth} from '../../store/auth';
import {HStack} from '@gluestack-ui/themed';
import {palette} from '../../theme/palette';
import {useUser} from '../../store/user';

import {Box} from '@gluestack-ui/themed';
import User from '../../assets/icons/User';
import Download from '../../assets/icons/Dowload';
import styles from './styles';
import {
  ImageLibraryOptions,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';

const Profile = () => {
  const {logout} = useAuth();
  const {currentUser, updateProfileImage} = useUser();
  const [photo, setPhoto] = useState<string | null>(null);

  const selectImageFromGallery = async () => {
    try {
      const options: ImageLibraryOptions = {
        mediaType: 'photo' as MediaType,
        quality: 1,
      };

      const result = await launchImageLibrary(options);

      console.log('result?.assets[0].uri');
      if (result.assets) {
        const file = result?.assets[0];
        const formData = new FormData() as any;
        formData.append('file', {
          uri: file.uri,
          type: file.type,
          name: file.fileName || 'upload.jpg',
        });
        console.log('formData', formData._parts);
        const newImage = await updateProfileImage({
          userId: currentUser?._id || '',
          image: formData || '',
        });
        setPhoto(newImage.image);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

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
        <View alignSelf="center">
          <Box>
            <Pressable onPress={selectImageFromGallery}>
              {currentUser?.image || photo ? (
                <Image
                  alt="profile image"
                  my={16}
                  h={120}
                  w={120}
                  source={{uri: photo || currentUser?.image}}
                  borderRadius={999}
                />
              ) : (
                <User width={100} height={100} style={styles.logo} />
              )}

              <View position="absolute" right={0} bottom={0}>
                <Download width={32} color={'black'} />
              </View>
            </Pressable>
          </Box>
          <Text fontWeight={600} fontSize={24} textAlign="center">
            {currentUser?.name}
          </Text>
          <Text fontWeight={600} fontSize={16} textAlign="center">
            {`${currentUser?.phone}`}
          </Text>
        </View>
        <CustomButton onPress={logout} alignSelf="center">
          Log out
        </CustomButton>
      </View>
    </CommonLayout>
  );
};
export default Profile;
