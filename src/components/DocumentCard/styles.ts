import styled from "styled-components/native";

export const Container = styled.View`
width: 100%

`;

export const Content = styled.View`
padding: 20px 16px;
gap: 12px;
align-self: stretch;
border-radius: 12px;
border: 1px solid #D0D5DD;
background: #FFF;
width: 100%;
margin-top: 20px;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;

`;

export const Bottom = styled.View`
display: flex;
justify-content: flex-end;
align-items: flex-end;
gap: 12px;
align-self: stretch;
`;

export const HeaderContent = styled.View`
align-items: flex-start;
gap: 12px;
flex-direction: row;
`;

export const Logo = styled.Image`
width: 24px;
height: 24px;

`;

export const BackgroundImage = styled.View`
background: #1A1854;
width: 50px;
height: 50px;
border-radius:  15px;
align-items: center;
justify-content: center;
`;


export const HeaderTextContainer = styled.View`
display: flex;
flex-direction: column;
gap: 2px;

`;

export const Title = styled.Text`
color: #192B53;
align-self: stretch;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px;
`;


export const Subtitle = styled.Text`
align-self: stretch;
color: #7C7F8E;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;

export const BottomContent = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;

`;

export const BottomTitle = styled.Text`
align-self: stretch;
color: #7C7F8E;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;

export const BottomSubtitle = styled.Text`
align-self: stretch;
color: #070D1B;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;


export const Connected = styled.Text`
color: #039855

`;