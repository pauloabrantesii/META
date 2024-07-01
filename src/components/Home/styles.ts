import styled from 'styled-components/native';



type ContainerProps = {
    borderColor?: string;
    background?: string;
    disabled?: boolean;
    typeButton?: string;
    typeText?: string;
    color?: string
  };
  

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #F2F2F2;
  align-items: center;
  padding: 12px;
`;


export const Header = styled.View`
width: 100%;
justify-content: space-between;
flex-direction: row;
padding: 12px;
`;

export const IconContainer = styled.TouchableOpacity`

`;

export const Icon = styled.Image`
width: 40px;
height: 40px;
`;

export const Logo = styled.Image`
`;

export const StoryHeader = styled.View`
width: 100%;
padding: 19px;
flex-direction: row;
`;

export const WrapperStory = styled.View`
  margin-right: 12px;
`;

export const DocumentContainer = styled.View`
  padding: 12px;

`;

export const InputConatiner = styled.View`
padding: 24px;
`;