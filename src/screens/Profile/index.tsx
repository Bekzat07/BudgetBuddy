import {Pressable, Text, View} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {HStack, Box} from '@gluestack-ui/themed';
import {
  ImageLibraryOptions,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';

// components
import CommonLayout from '../../components/CommonLayout';
import CustomButton from '../../components/Button';
import Image from '../../components/Image';

// redux
import {useAuth} from '../../store/auth';
import {useUser} from '../../store/user';

// theme
import {palette} from '../../theme/palette';

// utils
import {getErrorMessage} from '../../utils/getErrorMessage';

const Profile = () => {
  const {logout} = useAuth();
  const {currentUser, updateProfileImage} = useUser();
  const [image, setImage] = useState<string | null>(null);

  const selectImageFromGallery = async () => {
    try {
      const options: ImageLibraryOptions = {
        mediaType: 'photo' as MediaType,
        quality: 1,
      };

      const result = await launchImageLibrary(options);

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
        setImage(newImage.image);
      }
    } catch (error) {
      getErrorMessage(error);
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
              <Image image={image || currentUser?.image || ''} />
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
