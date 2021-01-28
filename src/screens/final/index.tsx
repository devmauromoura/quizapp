import {Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Body, Container, Header, Message, Name, Safe, Time, Points, Button, ButtonText} from './styles';
import {BarChart} from 'react-native-chart-kit';
import { colors } from '../../utils';

const Final = (Props) => {
  const {navigation} = Props;

  useEffect(() => {
    navigation.setOptions({title: 'Resultado Final'});
  }, []);

  return (
    <Safe>
      <Container>
        <Header>
          <Message>
            <Name>FULANO</Name>, veja aqui seus resultados.
          </Message>
        </Header>
        <Body>
          <BarChart
            data={{
              labels: ['Acertos', 'Erros'],
              datasets: [
                {
                  data: [3, 1],
                },
              ],
            }}
            width={Dimensions.get('window').width / 2 + 100} // from react-native
            height={200}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
                backgroundGradientFrom: colors.background,
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: colors.backgroundDark,
                backgroundGradientToOpacity: 0.5,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 1,
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <Points>Acertou 0 e errou 0 de um total de 0 perguntas.</Points>
          <Time>Quiz respondido em 00 minutos.</Time>
        </Body>
        <Button>
            <ButtonText>Finalizar</ButtonText>
        </Button>
      </Container>
    </Safe>
  );
};

export default Final;
