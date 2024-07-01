import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, IconContainer, Title } from './styles';

type ButtonComponentProps = TouchableOpacityProps & {
  title: string;
  onPress?: () => void;
  color?: string;
  borderColor?: string;
  background?: string;
  fontSize?: number;
  isIcon?: boolean;
};

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
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
    <Container
      onPress={onPress}
      borderColor={borderColor}
      background={background}
      disabled={disabled}
      {...rest}
    >
      {isIcon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}

      <Title color={color} disabled={disabled}>
        {title}
      </Title>
    </Container>
  );
};
