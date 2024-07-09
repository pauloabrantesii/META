import { useNavigation } from '@react-navigation/native';
import React from 'react';

import HeaderComponent from '~/components/HeaderComponent';
import DocSection from '../DocSection';
import { InputComponent } from '../InputComponent';
import { Container, Icon, IconContainer, InputContainer, InputContent, SafeArea, SearchContainer, SearchIcon, Title, TitleContainer } from './styles';

const WorkSpaceCardsComponent: React.FC = () => {
    const navigation = useNavigation();
    
  return (
    <SafeArea>
    <HeaderComponent />
    <Container>
        <TitleContainer>
            <IconContainer onPress={() => navigation.goBack()}>
                <Icon source={require('assets/images/arrowBlue.png')}/>
            </IconContainer>
            <Title>Workspaces</Title>
        </TitleContainer>
        <InputContainer>
<InputContent>
<InputComponent placeholder='Buscar por...' />
</InputContent>
       
   
          <SearchContainer>
            <SearchIcon source={require('assets/images/search.png')}/>
          </SearchContainer>
        </InputContainer>

        <DocSection horizontal={false} width='300' />

    </Container>
</SafeArea>
);
}

export default WorkSpaceCardsComponent;