import styled from 'styled-components';

import { scaleSize } from 'helper/responsive';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #f2f2f2;
  justify-content: center;
  align-items: center;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.View`
  width: 335px;
  height: 357px;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  align-items: flex-start;
  flex-direction: column;
`;

export const WrapperTitle = styled.View`
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 24;
`;

export const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 14;
`;

export const InputContainer = styled.View`
  margin-top: 24px;
`;

export const WrapperInput = styled.View`
  margin-bottom: 24px;
`;

export const BackgroundImage = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View``;

export const Logo = styled.Image`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${scaleSize(8)}px;
`;

export const ForgotContainer = styled.View`
  align-items: flex-end;
  width: 100%;
`;

export const ForgotText = styled.Text`
  font-weight: 400;
  color: #6a6a6a;
  font-size: 12px;
  margin-bottom: 24px;
`;

export const CreateAccountContainer = styled.View`
margin-top: 24px;
align-items: center;
flex-direction: column;
`;

export const NoHaveAccountText = styled.Text`
color: #6A6A6A
`;

export const CreateAccount = styled.Text`
color: #1A1D1E;
`;

export const CopyContainer = styled.View`
align-items: center;
flex-direction: column;
width: 100%
`;

export const TextCopy = styled.Text`

color: #C8C8C8
`;

export const SubTextCopy = styled.Text`
color: #475467
`;