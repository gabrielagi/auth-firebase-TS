import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import MainContainer from './components/containers/MainContainer';
import SmallText from './components/Texts/SmallText';
import RegularText from './components/Texts/RegularText';
import BigText from './components/Texts/BigText';
import TextInput from './components/Inputs/TextInput';

export default function App() {
const [email, setEmail] = useState("");
  
  return (
    <MainContainer>
      <SmallText style={{marginBottom: 20}}>Soy small text</SmallText>
      <StatusBar style="auto" />
      <TextInput
      label="Email Addres"
      icon="email-variant"
      value={email}
      onChangeText={setEmail}
      placeholder="youremail@gmail.com"
      keyboardType="email-address"
      style={{marginBottom: 20}}
      >
      </TextInput>
      {/* <TextInput
      label="Profile"
      icon="account"
      value={email}
      onChangeText={setEmail}
      placeholder="youremail@gmail.com"
      keyboardType="email-address"
      style={{marginBottom: 20}}
      >
      </TextInput> */}
    </MainContainer>
  );
}

