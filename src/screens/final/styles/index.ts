import styled from 'styled-components';
import {colors} from '../../../utils';

export const Safe = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.backgroundDark};
`;
export const Container = styled.View`
    flex: 1;
    padding: 5px;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 5px;
`;
export const Name = styled.Text`
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
`;
export const Message = styled.Text`
    color: ${colors.white};
    font-size: 16px;
`;
export const Body = styled.View`
    width: 100%;
    align-items: center;
`;

export const Points = styled.Text`
    color: ${colors.white};
    font-size: 16px;
`;
export const Time = styled.Text`
    color: ${colors.white};
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: ${colors.button};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;
export const ButtonText = styled.Text`
    color: ${colors.buttonText};
    font-size: 16px;
    font-weight: bold;
`;