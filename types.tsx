import { StyleProp, ViewStyle, TextStyle, TextInputProps } from 'react-native';
import { ReactNode, ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Set the props object to any type
//If you don't need to pass any children to your component, simply use the component as <MyComponent />

export type ContainerProps = {
    children: React.ReactNode; // 👈️ define children prop
    style?: StyleProp<ViewStyle>;
  };

export type TextProps = {
    children: React.ReactNode; // 👈️ define children prop
    style?: StyleProp<TextStyle>;
  };

  interface InterfaceInputProps {
    label: ReactNode;
    icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
    isPassword?: Boolean;
}

export type InputProps = TextInputProps & InterfaceInputProps;