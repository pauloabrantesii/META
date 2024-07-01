import { scaleSize } from 'helper/responsive';
import styled from 'styled-components/native';
import typography from 'styles/typography';

type ContainerProps = {
  isFilled?: boolean;
  isInvalid?: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background: #fff;
  border-color: #eee;
  border-width: 2px;
  border-radius: 12px;
  height: 54px;
  border: 1px solid ${(props) => (props.isInvalid ? 'red' : '#EEE')};
  align-items: center;
  justify-content: center;
`;



export const InputWrapper = styled.View`
  flex-direction: row;
  border-radius: 2px;
  margin: 5px;
  width: 100%;
  align-items: center;
`;

export const StyledInput = styled.TextInput`
  padding: 2px;
  color: #1A1854;
  font-size: ${typography.SIZE_14}px;
  height: ${scaleSize(24)}px;
  width: 100%;
`;

export const IconContainer = styled.TouchableOpacity`
  right: ${scaleSize(30)}px;
  width: ${scaleSize(24)}px;
  height: ${scaleSize(24)}px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;
