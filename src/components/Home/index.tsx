import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, TouchableOpacityProps } from 'react-native';
import DocSection from '~/components/DocSection';
import DocumentCard from '~/components/DocumentCard';
import { StoryComponents } from '~/components/StoryComponents';
import { InputComponent } from '../InputComponent';
import { Container, DocumentContainer, Header, Icon, IconContainer, InputConatiner, Logo, SearchContainer, SearchIcon, StoryHeader } from './styles';

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
            <StoryComponents title="Simcards" icon={require('assets/images/chip.png')}/>
            <StoryComponents background='#4CA6A8' title="Devices" icon={require('assets/images/truck.png')}/>
            <StoryComponents background='#7A4CA8' title="Mapa" onPress={() => navigation.navigate('MapContainer')} icon={require('assets/images/map.png')}/>
            <StoryComponents background='#EA4C89' title="Hardwares" icon={require('assets/images/cpu.png')}/>
          </ScrollView>
        </StoryHeader>

        <InputConatiner>
          <InputComponent placeholder='Buscar por...' />
          <SearchContainer>
            <SearchIcon source={require('assets/images/search.png')}/>
          </SearchContainer>
        </InputConatiner>

        <DocSection />

        <DocumentContainer>
          <DocumentCard />

        </DocumentContainer>





      </ScrollView>
    </Container>
  );
};
