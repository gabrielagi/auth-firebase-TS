import React from 'react';
import { SmallTextStyled } from '../../styles';
import { TextProps } from '../containers/types'
  
  const SmallText = (props: TextProps) => {
    return <SmallTextStyled>{props.children}</SmallTextStyled>;
  };


export default SmallText;