import React from 'react';
import { BigTextStyled } from '../../styles';
import { TextProps } from '../containers/types'
  
  const BigText = (props: TextProps) => {
    return <BigTextStyled>{props.children}</BigTextStyled>;
  };


export default BigText;