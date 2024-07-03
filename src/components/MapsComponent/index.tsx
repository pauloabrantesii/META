import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { LatLng, Marker, Polyline, Region } from 'react-native-maps';
import { Button, ButtonContainer, ButtonFindMe, ButtonText, CarContainer, Container, GoBackContainer, GoBackContent, IconCar, Map } from './styles';

const mockVehicleData: LatLng[] = [
  { latitude: -23.55052, longitude: -46.633308 },
  { latitude: -23.55152, longitude: -46.634308 },
  { latitude: -23.55252, longitude: -46.635308 },
];

const MapsComponent: React.FC = () => {
  const [vehiclePosition, setVehiclePosition] = useState<LatLng>(mockVehicleData[0]);
  const [region, setRegion] = useState<Region>({
    latitude: vehiclePosition.latitude,
    longitude: vehiclePosition.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVehiclePosition((prev) => {
        const currentIndex = mockVehicleData.indexOf(prev);
        const nextIndex = (currentIndex + 1) % mockVehicleData.length;
        return mockVehicleData[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const centerMap = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        ...region,
        latitude: vehiclePosition.latitude,
        longitude: vehiclePosition.longitude,
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
  }, [vehiclePosition]);

  return (
    <Container>


      <Map
        ref={mapRef}
        region={region}
        onRegionChangeComplete={setRegion}
      >


        <CarContainer>
        <GoBackContainer>
    <GoBackContent>
    <FontAwesome name="chevron-left" size={12} color="#fff" />
    </GoBackContent>

 </GoBackContainer>
          <Marker coordinate={vehiclePosition} title="Veículo">
            <IconCar source={require('assets/images/CarPin.png')} />
          </Marker>
        </CarContainer>
        <Polyline coordinates={mockVehicleData} strokeColor="blue" strokeWidth={3} />
      </Map>
      <ButtonContainer>

        <ButtonFindMe onPress={centerMap}>
           <IconCar source={require('assets/images/map-pin.png')}/>
        </ButtonFindMe>
        <Button onPress={zoomIn}>
          <ButtonText>+</ButtonText>
        </Button>
        <Button onPress={zoomOut}>
          <ButtonText>-</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default MapsComponent;
