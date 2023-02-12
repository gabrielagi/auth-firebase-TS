import { ReactNode } from "react";
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

// export interface ContainerProps {
//     children: ReactNode;
//     style?: StyleProp<ViewStyle>;
// }

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
