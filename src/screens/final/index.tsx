import {Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Body, Container, Header, Message, Name, Safe, Time, Points, Button, ButtonText} from './styles';
import {BarChart} from 'react-native-chart-kit';
import { colors } from '../../utils';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as QuestionsActions from '../questions/redux/actions';

const Final = (Props) => {
  const {navigation, QuestionsReducers, QuestionsDispatch} = Props;
  const {name, correct, incorrect} = QuestionsReducers;

  useEffect(() => {
    navigation.setOptions({title: 'Resultado Final'});
  }, []);

  const handleFinish = () => {
    QuestionsDispatch.callFinish();
  }

  return (
    <Safe>
      <Container>
        <Header>
          <Message>
            <Name>{name.toUpperCase()}</Name>, veja aqui seus resultados.
          </Message>
        </Header>
        <Body>
          <BarChart
            data={{
              labels: ['Acertos', 'Erros'],
              datasets: [
                {
                  data: [correct, incorrect],
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
          <Points>Acertou {correct} e errou {incorrect} de um total de {correct+incorrect} perguntas.</Points>
        </Body>
        <Button onPress={() => handleFinish()}>
            <ButtonText>Finalizar</ButtonText>
        </Button>
      </Container>
    </Safe>
  );
};

const mapStateToProps = (state) => ({
    QuestionsReducers: state.Question
});

const mapDispatchToProps = (dispatch) => ({
  QuestionsDispatch: bindActionCreators(QuestionsActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Final);

