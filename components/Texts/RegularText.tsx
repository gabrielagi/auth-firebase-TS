import React from 'react';
import { RegularTextStyled } from '../../styles';
import { TextProps } from '../containers/types'
  
  const SmallText = (props: TextProps) => {
    return <RegularTextStyled>{props.children}</RegularTextStyled>;
  };


export default SmallText;