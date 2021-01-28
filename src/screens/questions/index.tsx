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
  Safe,
  Title,
} from './styles';
import {questions} from '../../utils/questions';

const Questions = (Props) => {
  const {navigation} = Props;
  const [PosQuestion, setPosQuestion] = useState(0);
  const [TotalQuestion, setTotalQuestion] = useState(0);

  useEffect(() => {
    navigation.setOptions({title: 'Q.A'});
    getQuestionData()
  }, []);

  const getQuestionData = async() => {
    const total = questions.length;
    setTotalQuestion(total);
  }

  const handleSetResponse = () => {
      const ipos = PosQuestion + 1;
      if(ipos < TotalQuestion){
          setPosQuestion(pos => pos + 1);
      }else{
          navigation.navigate('Final');
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
            <ResponseButton>
              <ResponseButtonText onPress={() => handleSetResponse()}>
               {item.alternative}
              </ResponseButtonText>
            </ResponseButton>
          ))}
        </Footer>
      </Container>
    </Safe>
  );
};

export default Questions;
