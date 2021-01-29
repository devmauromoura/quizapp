import React, {useEffect, useState} from 'react';
import {
  Body,
  BoxMessage,
  BoxQuestion,
  Container,
  Footer,
  Header,
  ResponseButton,
  ResponseButtonText,
  ResultContainer,
  ResultMessage,
  Safe,
  Title,
} from './styles';
import {questions} from '../../utils/questions';
import * as Animatable from 'react-native-animatable';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as QuestionsActions from './redux/actions';
import ProgressBar from 'react-native-progress/Bar';

const Questions = (Props) => {
  const {navigation} = Props;
  const [PosQuestion, setPosQuestion] = useState(0);
  const [TotalQuestion, setTotalQuestion] = useState(0);
  const [Result, setResult] = useState(0);
  const [ShowSuccess, setShowSuccess] = useState(false);
  const [ShowError, setShowError] = useState(false);
  const [Block, setBlock] = useState(false);

  useEffect(() => {
    navigation.setOptions({title: 'Q.A'});
    getQuestionData()
  }, []);

  const getQuestionData = async() => {
    const total = questions.length;
    setTotalQuestion(total);
  }

  const handleSetResponse = (id: number) => {
      const {QuestionsDispatch} = Props;
      //Posição de questão para exibir em tela.
      const ipos = PosQuestion + 1;

      setBlock(true);
      setResult(id);

      if(ipos < TotalQuestion){
        if(questions[PosQuestion].response == id){
          setShowSuccess(true);
          QuestionsDispatch.callSaveResponseCorrect();
          setTimeout(() => {
            setShowSuccess(false);
            setPosQuestion(pos => pos + 1);
            setResult(0);
            setBlock(false);
          }, 5000);
        }else{
          setShowError(true);
          QuestionsDispatch.callSaveResponseIncorrect();
          setTimeout(() => {
            setShowError(false);
            setPosQuestion(pos => pos + 1);
            setResult(0);
            setBlock(false);
          }, 5000);
        }
      }else{
        if(questions[PosQuestion].response == id){
          setShowSuccess(true);
          QuestionsDispatch.callSaveResponseCorrect();
          setTimeout(() => {
            setShowSuccess(false);
            setResult(0);
            setBlock(false);
            navigation.navigate('Final');
          }, 5000);
        }else{
          setShowError(true);
          QuestionsDispatch.callSaveResponseIncorrect();
          setTimeout(() => {
            setShowError(false);
            setResult(0);
            setBlock(false);
            navigation.navigate('Final');
          }, 5000);
        }
      }
  }

  return (
    <Safe>
      <Container>
        <Header>
          <Title>Questão {PosQuestion+1} de {TotalQuestion}</Title>
        </Header>
        <Body>
          <BoxQuestion>
            <BoxMessage>{questions[PosQuestion].question}</BoxMessage>
          </BoxQuestion>
        </Body>
        <Footer>
          {questions[PosQuestion].alternatives.map((item) => (
            <ResponseButton key={item.id} disabled={Block} correct={questions[PosQuestion].response} itemid={item.id} result={Result} onPress={() => handleSetResponse(item.id)}>
              <ResponseButtonText correct={questions[PosQuestion].response} itemid={item.id} result={Result}>
               {item.alternative}
              </ResponseButtonText>
            </ResponseButton>
          ))}
        </Footer>
        {
          ShowSuccess ? (
            <Animatable.View animation="bounceInLeft">
            <ResultContainer>
              <ResultMessage correct={true}>Correto! Parabéns!!!</ResultMessage>
            </ResultContainer>
            <ProgressBar indeterminate width={197} color="white" style={{marginTop: 10, alignSelf: 'center'}}/>
          </Animatable.View>
          ) : null
        }
        {
          ShowError ? (
            <Animatable.View animation="bounceInLeft">
            <ResultContainer>
              <ResultMessage correct={false}>Incorreto!</ResultMessage>
            </ResultContainer>
            <ProgressBar indeterminate width={197} color="white" style={{marginTop: 10, alignSelf: 'center'}}/>
          </Animatable.View>
          ) : null
        }
      </Container>
    </Safe>
  );
};

const mapDispatchToProps = (dispatch) => ({
  QuestionsDispatch: bindActionCreators(QuestionsActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Questions);
