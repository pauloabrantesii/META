import React from 'react';
import { ScrollView, TouchableOpacityProps } from 'react-native';
import DocSection from '~/components/DocSection';
import DocumentCard from '~/components/DocumentCard';
import { StoryComponents } from '~/components/StoryComponents';
import { InputComponent } from '../InputComponent';
import { Container, Header, Icon, IconContainer, Logo, StoryHeader } from './styles';

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
  return (
    <Container>
 <ScrollView >


 <Header>
  <Logo source={require('assets/images/meta_logo.png')}/>


  <IconContainer>
    <Icon source={require('assets/images/nav_menu.png')}/>
  </IconContainer>
 </Header>


 <StoryHeader>
 <ScrollView horizontal={true}>
<StoryComponents title="Simcards" />

 <StoryComponents background='#4CA6A8' title="Devices" />
 
 <StoryComponents  background='#7A4CA8' title="Mapa" />

 <StoryComponents  background='#EA4C89' title="Hardwares" />
</ScrollView>

 </StoryHeader>


 <InputComponent />


         <DocSection />
         <DocumentCard />
       
       
  </ScrollView>

    </Container>
  );
};
