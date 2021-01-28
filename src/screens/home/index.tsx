import {Alert} from 'react-native';
import React, {useState} from 'react';
import {
    Button,
    ButtonText,
  Container,
    FormContainer,
    FormInput,
    FormLabel,
  Safe,
  TextContainer,
  TextImage,
  TextMessage,
  TextOne,
  TextTitle,
  TextTwo,
  SubContainer
} from './styles';
import personagemfalando from '../../assets/img/personagemfalando.png';
import {IUsuario} from './typescript';

const Home = (Props) => {
  const {navigation} = Props;
  const [usuario, setUsuario] = useState<IUsuario>({
    nome: null
  })

  const handleSave = () => {
    const {nome} = usuario;
    if(!nome || nome.length == 0){
      Alert.alert('Atenção!', 'Preencha o nome para continuar.');
    }else{
      navigation.navigate('Questions');
    }
  }

  return (
    <Safe>
      <Container>
        <SubContainer>
        <TextContainer>
          <TextOne>
            <TextImage source={personagemfalando} resizeMode="contain" />
          </TextOne>
          <TextTwo>
            <TextTitle>Olá usuário!</TextTitle>
            <TextMessage>
              Antes de iniciarmos as perguntas, por gentileza, informe seu nome no campo abaixo.
            </TextMessage>
          </TextTwo>
        </TextContainer>
        <FormContainer>
            <FormLabel>Seu nome</FormLabel>
            <FormInput value={usuario.nome} onChangeText={text => setUsuario({nome: text})}/>
        </FormContainer>
        </SubContainer>
        <Button onPress={() => handleSave()}>
            <ButtonText>Salvar</ButtonText>
        </Button>
      </Container>
    </Safe>
  );
};

export default Home;
