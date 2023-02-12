import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainContainer from './components/containers/MainContainer';
import SmallText from './components/Texts/SmallText';

export default function App() {
  return (
    // <MainContainer>
    //   <Text>Hola Ale!</Text>
    //   <StatusBar style='auto'/>
    // </MainContainer>
    <SmallText>
      <MainContainer>
      <Text>Hola Ale!</Text>
      <StatusBar style='auto'/> 
      </MainContainer>
      <Text>Hola Ale!</Text>
      <StatusBar style='auto'/>
    </SmallText>
  );
}

