import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import MainContainer from '../containers/MainContainer';
import SmallText from '../Texts/SmallText';
import TextInput from '../Inputs/TextInput';

export default function Register() {
const [email, setEmail] = useState("");
const [fullName, setFullName] = useState("");
const [password, setPassword] = useState("");

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
      style={{marginVertical: -40}}
      >
      </TextInput>
      <TextInput
      label="Profile"
      icon="account"
      value={fullName}
      onChangeText={setFullName}
      placeholder="Full Name"
      style={{marginVertical: -40}}
      >
      </TextInput>
      <TextInput
      label="Password"
      icon="lock-open"
      value={password}
      onChangeText={setPassword}
      placeholder="Password"
      isPassword={true}
      style={{marginVertical: -40}}
      >
      </TextInput>
    </MainContainer>
  );
}

