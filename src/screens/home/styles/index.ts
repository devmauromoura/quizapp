import styled from 'styled-components';
import {colors} from '../../../utils';

export const Safe = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.background};
`;

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const SubContainer = styled.View`
    width: 100%;
    padding: 10px;
    background-color: ${colors.button};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const TextContainer = styled.View`
    border-radius: 5px;
    flex-direction: row;
    width: 100%;
    align-items: center;
`;
export const TextOne = styled.View`
    width: 40%;
`;
export const TextTwo = styled.View`
    width: 60%;
`;
export const TextTitle = styled.Text`
    color: ${colors.buttonText};
    font-weight: bold;
    font-size: 18px;
`;
export const TextMessage = styled.Text`
    color: ${colors.buttonText};
    font-size: 16px;
    text-align: justify;
    margin-right: 5px;
`;
export const TextImage = styled.Image`
    height: 150px;
    width: 150px;
`;

export const FormContainer = styled.View`
    margin-top: 20px;
    width: 100%;
    background-color: ${colors.button};
    padding: 5px;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
`;
export const FormLabel = styled.Text`
    font-weight: bold;
    color:${colors.buttonText};
    margin-bottom: 5px;
`;
export const FormInput = styled.TextInput`
    width: 100%;
    background-color: ${colors.white};
    border-radius: 2px;
    margin-bottom: 5px;
    color: ${colors.button};
    padding-left: 5px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${colors.button};
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${colors.buttonText};
`;