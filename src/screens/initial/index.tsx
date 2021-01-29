import React, {useRef} from 'react';
import {colors} from '../../utils';
import {Button, ButtonText, Container, Logo, Safe, StatusB} from './styles';
import logofull from '../../assets/img/logofull.png';
import * as Animatable from 'react-native-animatable';

const Initial = (props) => {
    const {navigation} = props;
  return (
    <Safe>
      <StatusB backgroundColor={colors.background} />
      <Animatable.View style={{flex: 1}} animation="bounceInLeft">
        <Container>
          <Logo source={logofull} resizeMode="contain" />
          <Button onPress={() => navigation.navigate('Home')}>
            <ButtonText>Acessar</ButtonText>
          </Button>
        </Container>
      </Animatable.View>
    </Safe>
  );
};

export default Initial;
