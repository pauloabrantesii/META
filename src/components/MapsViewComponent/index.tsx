import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Callout, LatLng, Marker, Polyline, Region } from 'react-native-maps';
import { BottomContainer, Button, ButtonContainer, ButtonFindMe, ButtonText, CalloutCodeCar, CalloutContainer, CalloutContent, CalloutIcon, CalloutImage, CalloutInfoCar, CalloutStatus, CalloutStatusContainer, CalloutStatusContent, CalloutText, CalloutTextContainer, CalloutTouchable, Container, GoBackContainer, IconCar, Map } from './styles';

const mockVehicleData: LatLng[][] = [
  [
    { latitude: -23.55052, longitude: -46.633308 },
    { latitude: -23.55152, longitude: -46.632308 },
    { latitude: -23.55252, longitude: -46.633308 },
    { latitude: -23.55352, longitude: -46.632308 },
    { latitude: -23.55452, longitude: -46.633308 },
  ],

];

const MapsComponent: React.FC = () => {
  const navigation = useNavigation();
  const [vehiclePositions, setVehiclePositions] = useState<LatLng[]>(mockVehicleData.map(route => route[0]));
  const [region, setRegion] = useState<Region>({
    latitude: vehiclePositions[0].latitude,
    longitude: vehiclePositions[0].longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const mapRef = useRef<MapView>(null);

  const centerMap = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        ...region,
        latitude: vehiclePositions[0].latitude,
        longitude: vehiclePositions[0].longitude,
      });
    }
  };

  const zoomIn = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2,
    }));
  };

  const zoomOut = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  };

  useEffect(() => {
    centerMap();
  }, [vehiclePositions]);

  return (
    <Container>
      <Map
        ref={mapRef}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <GoBackContainer onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={12} color="#fff" />
        </GoBackContainer>

        {mockVehicleData.map((route, routeIndex) => (
          route.map((position, index) => (
            <Marker key={`${routeIndex}-${index}`} coordinate={position}>
              <IconCar source={require('assets/images/CarPin.png')} />
        
            </Marker>
          ))
        ))}
        {mockVehicleData.map((route, index) => (
          <Polyline key={index} coordinates={route} strokeColor="blue" strokeWidth={5} />
        ))}
      </Map>






      <ButtonContainer>
        <ButtonFindMe onPress={centerMap}>
          <IconCar source={require('assets/images/map-pin.png')} />
        </ButtonFindMe>
        <Button onPress={zoomIn}>
          <ButtonText>+</ButtonText>
        </Button>
        <Button onPress={zoomOut}>
          <ButtonText>-</ButtonText>
        </Button>
      </ButtonContainer>



  <BottomContainer>


<Callout >
              <CalloutContainer>
                <CalloutContent>
                  <CalloutIcon>
                    <CalloutImage source={require('assets/images/truck.png')} />
                  </CalloutIcon>
                  <CalloutTextContainer>
                    <CalloutText>
                      Workspace 3
                    </CalloutText>
                    <CalloutInfoCar>
                      STRADA CBP-1717
                    </CalloutInfoCar>
                    <CalloutCodeCar>
                      55199992938283
                    </CalloutCodeCar>
                  </CalloutTextContainer>
                </CalloutContent>
                <CalloutStatusContainer>
                  <CalloutStatusContent>
                    <CalloutStatus>
                      Ligado
                    </CalloutStatus>
                  </CalloutStatusContent>
                  <CalloutTouchable>
                  <CalloutCodeCar>
                  J17
                    </CalloutCodeCar>
                  </CalloutTouchable>
                </CalloutStatusContainer>
              </CalloutContainer>
            </Callout>
</BottomContainer>
    </Container>
  );
};

export default MapsComponent;
