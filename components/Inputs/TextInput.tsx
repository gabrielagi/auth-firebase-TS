import React, { FunctionComponent } from 'react';
import { InputWapper, LeftIcon, colors, SmallTextStyled, InputField } from '../../styles';
import { InputProps } from '../../types'
import { MaterialCommunityIcons } from '@expo/vector-icons';

  const TextInput: FunctionComponent<InputProps> = ({icon, label, ...props}) => {
    return <InputWapper>
    <LeftIcon>
      <MaterialCommunityIcons name={icon} size={30} color={colors.gray}/>
    </LeftIcon>
    <SmallTextStyled>{label}</SmallTextStyled>
    <InputField {...props} placeholderTextColor={colors.gray}/>
    </InputWapper>;
  };


export default TextInput;