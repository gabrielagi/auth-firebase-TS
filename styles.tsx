// import original module declarations
//We are using styled.tsx to house all our styled components to be reused in other components

import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const colors = {
    primary: "#ECFDF5",
    secondary: "#A7F3D0",
    black: "0F172A",
    gray: "#64748B",
    BUTTON_COLOR: '#111216',
}

export const Container = styled.SafeAreaView`
    background-color: ${colors.primary};
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
    padding-top: ${Constants.statusBarHeight + 'px'};
`;
export const StyledView = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 40px;
    background-color: ${colors.primary};
`;
export const ThemeButtonText = styled.Text`
    font-size: 16px;
    color: ${colors.BUTTON_COLOR}
`;