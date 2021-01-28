import styled from 'styled-components';
import {colors} from '../../../utils';

export const Safe = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.background};
`;

export const StatusB = styled.StatusBar``;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    height: 200px;
    width: 200px;
`;

export const Button = styled.TouchableOpacity`
    height: 50px;
    width: 60%;
    background-color: ${colors.button};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const ButtonText = styled.Text`
    color: ${colors.buttonText};
    font-size: 16px;
    font-weight: bold;
`;