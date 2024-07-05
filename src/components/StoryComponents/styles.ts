import styled from "styled-components";


type CircleProps = {
    background?: string;
  };

export const Container = styled.View`
flex: 1;
margin-right: 19px;
align-items: center;
`;


export const Circle = styled.TouchableOpacity<CircleProps>`
width: 70px;
height: 70px;
border-radius: 50%;
align-items: center;
justify-content: center;
background-color: ${({ background }) => background || '#1A1852'};
margin-bottom: 14px;
`;

export const Title = styled.Text`
color: #000000;
`;

export const Icon = styled.Image`

`;