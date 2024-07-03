import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, TouchableOpacityProps } from 'react-native';
import DocSection from '~/components/DocSection';
import DocumentCard from '~/components/DocumentCard';
import { StoryComponents } from '~/components/StoryComponents';
import { InputComponent } from '../InputComponent';
import { Container, DocumentContainer, Header, Icon, IconContainer, InputConatiner, Logo, StoryHeader } from './styles';

type HomeComponentProps = TouchableOpacityProps & {
  title: string;
  onPress?: () => void;
  color?: string;
  borderColor?: string;
  background?: string;
  fontSize?: number;
  isIcon?: boolean;
};

export const HomeComponent: React.FC<HomeComponentProps> = ({
  title,
  onPress,
  color,
  borderColor,
  background,
  fontSize,
  isIcon,
  disabled,
  ...rest
}) => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  return (
    <Container>
      <ScrollView 
        showsHorizontalScrollIndicator={false} 
        horizontal={false} 
        contentContainerStyle={{ flexGrow: 1, width: screenWidth }}
      >
        <Header>
          <Logo source={require('assets/images/meta_logo.png')} />
          <IconContainer>
            <Icon source={require('assets/images/nav_menu.png')} />
          </IconContainer>
        </Header>

        <StoryHeader>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <StoryComponents title="Simcards" />
            <StoryComponents background='#4CA6A8' title="Devices" />
            <StoryComponents background='#7A4CA8' title="Mapa" onPress={() => navigation.navigate('MapContainer')}/>
            <StoryComponents background='#EA4C89' title="Hardwares" />
          </ScrollView>
        </StoryHeader>

        <InputConatiner>
          <InputComponent placeholder='Buscar por...' />
        </InputConatiner>

        <DocSection />
        <DocumentContainer>
          <DocumentCard />
        </DocumentContainer>
        <DocumentContainer>
          <DocumentCard />
        </DocumentContainer>
        <DocumentContainer>
          <DocumentCard />
        </DocumentContainer>
        <DocumentContainer>
          <DocumentCard />
        </DocumentContainer>
      </ScrollView>
    </Container>
  );
};
