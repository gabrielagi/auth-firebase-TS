import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainContainer from './components/containers/MainContainer';
import SmallText from './components/Texts/SmallText';
import RegularText from './components/Texts/RegularText';
import BigText from './components/Texts/BigText';
import TextInput from './components/Inputs/TextInput';

export default function App() {
  return (
    <MainContainer>
      <SmallText>Soy small text</SmallText>
      <RegularText>Soy regular text</RegularText>
      <BigText>Soy big text</BigText>
    </MainContainer>
  );
}

