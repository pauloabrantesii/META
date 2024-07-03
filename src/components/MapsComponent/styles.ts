import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

`;

export const Map = styled(MapView)`
 flex: 1;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 10px;
  align-items: center;
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

`;

export const GoBackContent = styled.View`
background: #1A1854;
align-items: center;
justify-content: center;
border-radius: 50%;
width: 38px;
height: 38px;
`;