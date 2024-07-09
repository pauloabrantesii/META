import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Map = styled(MapView)`
 flex: 1;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  position: absolute;

  left: 10px;
  align-items: center;

`;



export const BottomContainer = styled.View`
  align-items: center;
bottom: 200px;

`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin-vertical: 5px;
`;


export const ButtonFindMe = styled.TouchableOpacity`
  background-color: #1A1854;
  border-radius: 5px;
  padding: 10px;
  margin-vertical: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const CarContainer = styled.View``;

export const IconCar = styled.Image``;

export const GoBackContainer = styled.TouchableOpacity`
padding: 12px;
background: #1A1854;
align-items: center;
justify-content: center;
border-radius: 50%;
width: 38px;
height: 38px;
 left: 10px;
`;

export const CalloutContainer = styled.View`
width: 335px;
background: #fff;
padding: 12px;
border-radius: 10px;

`;

export const CalloutContent = styled.View`
flex-direction: row;
width: 200px;
margin-bottom: 20px;


`;

export const CalloutIcon = styled.View`
flex-direction: row;
width: 50px;
height: 50px;
background: #1A1854;
border-radius: 15px;
align-items: center;
justify-content: center;
`;



export const CalloutButton = styled.View`
flex-direction: row;
width: 50px;
height: 50px;
background: #1A1854;
border-radius: 50%;
align-items: center;
justify-content: center;
`;

export const CalloutImage = styled.Image`
width: 24px;
height: 24px;


`;

export const CalloutText = styled.Text`
width: 78px;
height: 14px;
font-family: Poppins;
font-size: 12px;
font-weight: 400;
line-height: 14.4px;
text-align: left;

`;

export const CalloutTextContainer = styled.View`
flex-direction: column;

margin-left: 10px;
`;

export const CalloutInfoCar = styled.Text``;

export const CalloutCodeCar = styled.Text``;

export const CalloutStatusContainer = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const CalloutStatusContent = styled.View`
width: 135px;
height: 35px;
border-radius: 10px;
background: #EEFFE5;
align-items: center;  
justify-content: center;

`;


export const CalloutStatus = styled.Text`
color: #039855;
font-family: Poppins;
font-size: 12px;
font-weight: 600;
line-height: 20px;
text-align: left;



`;

export const CalloutTouchable = styled.TouchableOpacity``;