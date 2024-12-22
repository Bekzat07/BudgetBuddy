import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {
  BellIcon,
  EditIcon,
  HStack,
  SunIcon,
  AddIcon,
} from '@gluestack-ui/themed';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// styles
import styles from './styles';

type Route = {
  key: string;
  name: string;
};

export const tabBarIcons: Record<
  string,
  {default: JSX.Element; focused: JSX.Element}
> = {
  home: {
    default: <SunIcon />,
    focused: <SunIcon />,
  },
  budget: {
    default: <AddIcon />,
    focused: <AddIcon />,
  },
  readkuran: {
    default: <EditIcon />,
    focused: <EditIcon />,
  },
  profile: {
    default: <BellIcon />,
    focused: <BellIcon />,
  },
};

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <HStack
      style={styles.container}
      paddingBottom={Platform.OS === 'android' ? bottom : bottom - 8}>
      {state.routes.map((route: Route, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            style={styles.button}
            hitSlop={{top: 0, bottom: 30, left: 30, right: 30}}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            key={index}
            onPress={onPress}
            activeOpacity={1}>
            {isFocused
              ? tabBarIcons[route.name.toLowerCase()].focused
              : tabBarIcons[route.name.toLowerCase()].default}
          </TouchableOpacity>
        );
      })}
    </HStack>
  );
};

export default TabBar;
