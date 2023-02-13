// import original module declarations
//We are using styled.tsx to house all our styled components to be reused in other components

import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const colors = {
    primary: "#ECFDF5",
    secondary: "#A7F3D0",
    black: "0F172A",
    gray: "#64748B",
    accent: '#0475857',
}

export const MainContainerStyled = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 40px;
    background-color: ${colors.primary};
    align-items: center;
    justify-content: center;
`;


// Text components
export const SmallTextStyled = styled.Text`
    font-size: 16px;
    padding-top: 40px;
    text-align: left;
    color: ${colors.black};
`;
export const RegularTextStyled = styled.Text`
    font-size: 22px;
    padding-top: 40px;
    text-align: left;
    color: ${colors.black};
`;
export const BigTextStyled = styled.Text`
    font-size: 42px;
    padding-top: 40px;
    text-align: left;
    color: ${colors.black};
`;

// Input components
export const TexInputStyled = styled.Text`
    font-size: 42px;
    padding-top: 40px;
    text-align: left;
    color: ${colors.black};
`;
export const InputWapper = styled.View`
    width: 100%;
`;
export const LeftIcon = styled.View`
    position: absolute;
    top: 80px;
    left: 15px;
    z-index: 1;
    border-right-width: 2px;
    border-color: ${colors.secondary};
    padding-right: 10px;
`;
export const InputField = styled.TextInput`
    background-color: ${colors.black};
    height: 60px;
    border-width: 2px;
    border-radius: 10px;
    border-color: ${colors.secondary};
    margin-vertical: 3px;
    margin-bottom: 10px;
    padding: 15px;
    padding-left: 65px;
    padding-right: 55px;
    font-size: 16px;
    color: ${colors.black};
`;