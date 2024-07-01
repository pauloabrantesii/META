import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Icon, IconContainer, InputWrapper, StyledInput } from './styles';

type InputProps = {
  value?: string;
  placeholder?: string;
  icon?: any;
  secureTextEntry?: boolean;
  onIconPress?: () => void;
  isFilled?: boolean;
  inputWidth?: string | number;
  containerWidth?: string | number;
  isInvalid?: boolean;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  iconError?: any; 
  onChangeText?: (text: string) => void;
  autoComplete?: TextInputProps['autoComplete'];
  keyboardType?: TextInputProps['keyboardType'];
  textContentType?: TextInputProps['textContentType'];
  autoCorrect?: boolean;
  autoFocus?: boolean;
};

export const InputComponent: React.FC<InputProps> = ({
  value,
  placeholder,
  icon,
  secureTextEntry,
  onIconPress,
  isFilled,
  isInvalid,
  autoCapitalize,
  onChangeText,
  autoComplete,
  keyboardType,
  textContentType,
  autoCorrect = true,
  autoFocus,
}) => {
  return (
    <Container isFilled={isFilled} isInvalid={isInvalid}>
      <InputWrapper>
        <StyledInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          keyboardType={keyboardType}
          textContentType={textContentType}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
        />
        {icon && (
          <IconContainer onPress={onIconPress}>
            <Icon source={icon} />
          </IconContainer>
        )}
      </InputWrapper>
    </Container>
  );
};
