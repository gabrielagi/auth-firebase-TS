import React from 'react';
import { RegularTextStyled } from '../../styles';
import { TextProps } from '../../types'
  
  const RegularText = (props: TextProps) => {
    return <RegularTextStyled>{props.children}</RegularTextStyled>;
  };


export default RegularText;