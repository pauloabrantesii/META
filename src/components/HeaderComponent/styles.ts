import styled from 'styled-components/native';



type ContainerProps = {
    borderColor?: string;
    background?: string;
    disabled?: boolean;
    typeButton?: string;
    typeText?: string;
    color?: string
  };
  

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


