import React, { useState, FunctionComponent } from 'react';
import { InputWapper, LeftIcon, colors, SmallTextStyled, InputField } from '../../styles';
import { InputProps } from '../../types'
import { MaterialCommunityIcons } from '@expo/vector-icons';

  const TextInput: FunctionComponent<InputProps> = ({icon, label, ...props}) => {
    const [inputBackground, setInputBanckground] = useState(colors.primary);

    const customOnFocus = () => {
      props?.onFocus;
      setInputBanckground(colors.secondary);
    }

    const customOnBlur = () => {
      props?.onBlur;
      setInputBanckground(colors.primary);
    }

    return <InputWapper>
    <LeftIcon>
      <MaterialCommunityIcons name={icon} size={30} color={colors.gray}/>
    </LeftIcon>
    <SmallTextStyled>{label}</SmallTextStyled>
    <InputField 
      {...props} 
      placeholderTextColor={colors.gray} 
      style={[{backgroundColor: inputBackground}, props.style]}
      onFocus={customOnFocus}
      onBlur={customOnBlur}
      />
    </InputWapper>;
  };


export default TextInput;