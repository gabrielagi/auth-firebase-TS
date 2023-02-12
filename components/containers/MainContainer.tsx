import React, { FunctionComponent } from 'react';
import {StyledView} from '../../styles';

// Set the props object to any type
//If you don't need to pass any children to your component, simply use the component as <MyComponent />

type BoxProps = {
    children: React.ReactNode; // 👈️ define children prop
  };
  
  const MainContainer = (props: BoxProps) => {
    return <StyledView>{props.children}</StyledView>;
  };


export default MainContainer;