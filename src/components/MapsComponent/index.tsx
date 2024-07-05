import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { LatLng, Marker, Polyline, Region } from 'react-native-maps';
import { Button, ButtonContainer, ButtonFindMe, ButtonText, Container, IconCar, Map } from './styles';

const mockVehicleData: LatLng[][] = [
  [
    { latitude: -23.55052, longitude: -46.633308 },
    // { latitude: -23.55152, longitude: -46.634308 },
    // { latitude: -23.55252, longitude: -46.635308 },
  ],
  [
    { latitude: -23.55352, longitude: -46.636308 },
    // { latitude: -23.55452, longitude: -46.637308 },
    // { latitude: -23.55552, longitude: -46.638308 },
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

  // useEffect(() => {
  //   const intervals = mockVehicleData.map((route, index) =>
  //     setInterval(() => {
  //       setVehiclePositions((prevPositions) => {
  //         const currentIndex = route.indexOf(prevPositions[index]);
  //         const nextIndex = (currentIndex + 1) % route.length;
  //         const newPositions = [...prevPositions];
  //         newPositions[index] = route[nextIndex];
  //         return newPositions;
  //       });
  //     }, 2000)
  //   );

  //   return () => intervals.forEach(clearInterval);
  // }, []);

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


        {vehiclePositions.map((position, index) => (
          <Marker key={index} coordinate={position} >
            <IconCar source={require('assets/images/CarPin.png')} />
          </Marker>
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

    </Container>
  );
};

export default MapsComponent;
