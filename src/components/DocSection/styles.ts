import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;

`;

export const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding-top: 32px;
  

`;

export const Title = styled.Text`
  color: #1A1854;
  font-size: 20px;
  font-weight: 600;
  right: 30px;
`;

export const NumberContainer = styled.View`
width: 24px;
height: 24px;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;
border-radius: 4px;
border: 1px solid #385F9F;
background: #C3DCF0;
`;

export const Number = styled.Text`
  color: #192B53;
  font-size: 14px;
  font-weight: 600;
`;

export const CardContainer = styled.View`
align-items: flex-start;
gap: 24px;
margin-top: 24px;

`;

export const CardItem = styled.View`
width: 276px;
height: 155px;
padding: 20px 16px;
flex-direction: column;
align-items: flex-start;
gap: 12px;
border-radius: 12px;
border: 1px solid #C3DCF0;
background: #F0F5F8;

`;

export const Header = styled.View`
flex-direction: column;
align-items: flex-start;
gap: 2px;
`;

export const HeaderContainer = styled.View`
flex-direction: row;

`;

export const WrapperHeader = styled.View`
flex-direction: column;
align-items: flex-start;
gap: 2px;
flex: 1 0 0;

`;

export const HeaderTitle = styled.Text`
align-self: stretch;
color: #192B53;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
`;

export const HeaderSubtitle = styled.Text`
align-self: stretch;
color: #324F92;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
`;

export const Separate = styled.View`
height: 1px;
align-self: stretch;
background: #EEE;
margin-top: 12px;
margin-bottom: 12px;
`;

export const Bottom = styled.View`
align-items: center;
gap: 20px;
align-self: stretch;
flex-direction: row;
`;

export const CalendarContainer = styled.View`
align-items: flex-start;
gap: 8px;

`;

export const DateTitle = styled.Text`
color: rgba(16, 24, 40, 0.60);
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
`;

export const WrapperButton = styled.View`
width: 103px;
height: 40px;

`;

