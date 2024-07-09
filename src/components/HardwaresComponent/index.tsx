import { useNavigation } from '@react-navigation/native';
import React from 'react';

import HeaderComponent from '~/components/HeaderComponent';
import DocumentCard from '../DocumentCard';
import { InputComponent } from '../InputComponent';
import { Container, Icon, IconContainer, InputContainer, InputContent, SafeArea, SearchContainer, SearchIcon, Title, TitleContainer } from './styles';

const HardwaresComponent: React.FC = () => {
    const navigation = useNavigation();
    
  return (
    <SafeArea>
    <HeaderComponent />
    <Container>
        <TitleContainer>
            <IconContainer onPress={() => navigation.goBack()}>
                <Icon source={require('assets/images/arrowBlue.png')}/>
            </IconContainer>
            <Title>Hardwares</Title>
        </TitleContainer>
        <InputContainer>
<InputContent>
<InputComponent placeholder='Buscar por...' />
</InputContent>
       
   
          <SearchContainer>
            <SearchIcon source={require('assets/images/search.png')}/>
          </SearchContainer>
        </InputContainer>

        <DocumentCard  code="J6X " cadaster="V 1.234" background="#DF780D" />

    </Container>
</SafeArea>
);
}

export default HardwaresComponent;