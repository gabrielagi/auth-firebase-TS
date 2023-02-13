import React from 'react';
import { InputWapper, LeftIcon } from '../../styles';
import { InputProps } from '../../types'
  
  const TextInput = (props: InputProps) => {
    return <InputWapper>
    <LeftIcon>
        
    </LeftIcon>
    {props.children}</InputWapper>;
  };


export default TextInput;