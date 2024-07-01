import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

import typography from 'styles/typography';


type ContainerProps = {
    borderColor?: string;
    background?: string;
    disabled?: boolean;
    typeButton?: string;
    typeText?: string;
    color?: string
  };
  

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 12px;
  height: 54px;
  justify-content: center;
  background-color: ${({ background }) => background || '#1A1852'};
  border-radius: 12px;

  border-width: 1px;

  border-color: ${({ borderColor }) => borderColor || 'transparent'};
`;

export const Title = styled.Text<ContainerProps>`
  color: ${({ color, disabled }) => (disabled ? 'rgba(0, 0, 0, 0.48)' : color || '#fff')};
  font-family: ${typography.FONT_MEDIUM};
  font-size: ${typography.SIZE_16}px;

`;

export const IconContainer = styled.View`
  width: 20px;
  height: 20px;
  background-color: #000;
`;

export const Icon = styled(ImageBackground)`
  width: 20px;
  height: 20px;
`;
