import styled from 'styled-components';
import {colors} from '../../../utils';

export const Safe = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.backgroundDark}
`;

export const Container = styled.View`
    flex: 1;
    padding: 10px;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
`; 
export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.white}
`;

export const Body = styled.View`
    margin-bottom: 10px;
`;
export const BoxQuestion = styled.View`
    border-width: 5px;
    border-color: ${colors.boxBorder};
    border-radius: 10px;
    background-color: ${colors.boxBackground};
    min-height: 200px;
    padding: 5px;
    align-items: center;
    justify-content: center;
`;
export const BoxMessage = styled.Text`
    text-align: center;
`;

export const Footer = styled.View`
    width: 100%;
`;
export const ResponseButton = styled.TouchableOpacity`
    margin-bottom: 10px;
    background-color: ${colors.responseOption};
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    padding: 5px;
`;
export const ResponseButtonText = styled.Text`
    color: ${colors.responseOptionText};
`;
