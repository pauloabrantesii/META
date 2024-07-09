import styled from "styled-components";


export const SafeArea = styled.SafeAreaView`
flex: 1;
width: 100%;
align-items: center;


`;

export const Container = styled.View`
flex: 1;
width: 100%;
background: #F2F2F2;
align-items: flex-start;
padding: 20px;
`;

export const IconContainer = styled.TouchableOpacity`

`;


export const Icon = styled.Image`

`;

export const TitleContainer = styled.View`
flex-direction: row;
width: 375px;
gap: 8px;
`;

export const Title = styled.Text`
color: #1A1854;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px;
`;


export const SearchBox = styled.View`


`;


export const InputContainer = styled.View`
padding: 24px;
flex-direction: row;
align-items: flex-start;
gap: 7px;
`;

export const InputContent = styled.View`
align-items: center;
width: 276px;


`;

export const SearchIcon = styled.Image`

`;

export const SearchContainer = styled.TouchableOpacity`
background: #1A1854;
border-radius: 15px;
align-items: center;
justify-content: center;
width: 46px;
height: 50px;


`;